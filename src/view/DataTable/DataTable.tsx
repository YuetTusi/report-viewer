import $ from 'jquery';
import debounce from 'lodash/debounce';
import React, { FC, useCallback, useState, useRef } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Input from 'antd/lib/input';
import message from 'antd/lib/message';
import { PanelBox } from '@src/components/styled/BoxStyle';
import RootPanel from '@src/components/RootPanel';
import AudioModal from '@src/components/AudioModal';
import VideoModal from '@src/components/VideoModal';
import PhotoShow from '@src/components/PhotoShow';
import DisplayTable from '@src/components/DisplayTable';
import SearchChatModal from '@src/components/SearchChatModal';
import { DisplayTableCell } from '@src/components/DisplayTable/types';
import { SearchContentBox } from '@src/components/DisplayTable/TableStyled';
import LoadingContainer from '@src/containers/Loading';
import { helper } from '@src/utils/helper';
import { useMount } from '@src/hooks';
import { BaseView, ColumnType } from '@src/types/View';
import { MainTitle, PartBox, PartCaption, PartContent } from '@src/components/styled/StyleWidget';

let defaultPageSize = 0;
let pageCount = '1';
const { Search } = Input;
interface Prop extends BaseView {}

/**
 * 表格类页面
 */
const DataTable: FC<Prop> = () => {
	const { file } = useParams<{ file: string }>();
	const { search } = useLocation();
	const [fileMd5, index] = file.split('-');
	const [pageIndex, setPageIndex] = useState<number>(
		helper.isNullOrUndefined(index) ? 1 : Number(index)
	); //当前页
	const actionCell = useRef<DisplayTableCell>(); //当前用户击中的单元格值
	const [data, setData] = useState<any>({}); //页面数据
	const searchRef = useRef<any>(null); //查询文本框
	const [videoModalVisible, setVideoModalVisible] = useState<boolean>(false); //视频框显示
	const [audioModalVisible, setAudioModalVisible] = useState<boolean>(false); //音频框显示
	const [photoShowVisible, setPhotoShowVisible] = useState<boolean>(false); //照片框显示
	const [searchChatModalVisible, setSearchChatModalVisible] = useState<boolean>(false); //搜索框显示
	const [foundChat, setFoundChat] = useState<any[]>([]);
	const { loading, setLoading } = LoadingContainer.useContainer();

	pageCount = helper.parseURLSearch(search, 'p') ?? '1';

	useMount(async () => {
		setLoading(true);
		try {
			const next = await helper.loadJSON<any>(`public/data/${file}.json`, 'data');
			defaultPageSize = next?.row?.length ?? 0;
			setData(next);
		} catch (error) {
			message.error('读取数据失败');
		} finally {
			setLoading(false);
		}
	});

	/**
	 * 分页Change
	 * @param pageIndex 当页页
	 * @param pageSize 分页尺寸
	 */
	const pageChangeHandle = async (pageIndex: number, pageSize?: number) => {
		$('[data-has]').each((i: number, element: any) => {
			$(element).attr('data-has', '0');
		});
		setLoading(true);
		try {
			const next = await helper.loadJSON(`public/data/${fileMd5}-${pageIndex}.json`, 'data');
			setPageIndex(pageIndex);
			setData(next);
		} catch (error) {
			message.error('读取数据失败');
		} finally {
			const rightPane = $('.layout-pane')[1];
			if (rightPane) {
				$(rightPane).scrollTop(0);
			}
			setTimeout(() => setLoading(false), 400);
		}
	};

	/**
	 * 搜索记录handle
	 * @param value 关键字
	 */
	const onSearch = debounce(
		async (value: string) => {
			if (helper.isNullOrUndefinedOrEmptyString(value)) {
				message.destroy();
				message.info('请输入关键字进行查询');
			} else if (/[@#$%^&\[\]\*?+()]/g.test(value)) {
				message.destroy();
				message.warn('不允许查询非法字符');
			} else {
				setLoading(true);
				const fileNames = helper.getAllPageNames(file, Number.parseInt(pageCount));
				const tasks = fileNames.map((f) =>
					helper.loadJSON<any>(`public/data/${f}.json`, 'data')
				);

				try {
					const data = await Promise.all(tasks);
					if (data && data.length > 0) {
						const rec = helper.getFoundContentAndPageIndex(data, value);
						setSearchChatModalVisible(true);
						setFoundChat(rec);
					}
				} catch (error) {
					message.error('搜索记录失败');
				} finally {
					setLoading(false);
				}
			}
		},
		800,
		{ leading: true, trailing: false }
	);

	/**
	 * 点中行action回调
	 * @param cell 单元格值
	 * @param type 列类型
	 */
	const actionHandle = useCallback((cell: DisplayTableCell, type: ColumnType) => {
		actionCell.current = cell;
		switch (type) {
			case ColumnType.Video:
				setVideoModalVisible(true);
				break;
			case ColumnType.Photo:
			case ColumnType.Preview:
				setPhotoShowVisible(true);
				break;
			case ColumnType.Audio:
				setAudioModalVisible(true);
				break;
			case ColumnType.File:
				window.open(cell.value);
			default:
				break;
		}
	}, []);

	/**
	 * 关闭音频框
	 */
	const closeAudioModalHandle = useCallback(
		() => setAudioModalVisible(false),
		[audioModalVisible]
	);

	/**
	 * 关闭视频框
	 */
	const closeVideoModalHandle = useCallback(
		() => setVideoModalVisible(false),
		[videoModalVisible]
	);

	/**
	 * 关闭照片框
	 */
	const closePhotoModalHandle = useCallback(() => setPhotoShowVisible(false), [photoShowVisible]);

	return (
		<RootPanel loading={loading}>
			<PanelBox>
				<MainTitle dangerouslySetInnerHTML={{ __html: data.title ?? '' }} />
			</PanelBox>
			<PanelBox>
				<PartBox>
					<PartCaption
						dangerouslySetInnerHTML={{ __html: `<span>${data.caption ?? ''}</span>` }}
					/>
					<SearchContentBox>
						<Search
							ref={searchRef}
							onSearch={onSearch}
							size="small"
							placeholder="请输入关键字搜索记录"
							maxLength={200}
						/>
					</SearchContentBox>
					<PartContent>
						<DisplayTable
							columns={data.column ?? []}
							data={data.row ?? []}
							pageIndex={helper.isNullOrUndefined(pageIndex) ? 1 : Number(pageIndex)}
							pageSize={defaultPageSize}
							pageCount={Number(pageCount) == 0 ? 1 : Number(pageCount)}
							pageChangeHandle={pageChangeHandle}
							actionHandle={actionHandle}
							scroll={{ x: 'max-content' }}
						/>
					</PartContent>
				</PartBox>
			</PanelBox>
			<AudioModal
				visible={audioModalVisible}
				src={actionCell.current?.value!}
				exportSrc={actionCell.current?.value_export}
				closeHandle={closeAudioModalHandle}
			/>
			<VideoModal
				visible={videoModalVisible}
				src={actionCell.current?.value!}
				exportSrc={actionCell.current?.value_export}
				closeHandle={closeVideoModalHandle}
			/>
			<PhotoShow
				visible={photoShowVisible}
				src={actionCell.current?.value!}
				exportSrc={actionCell.current?.value_export}
				closeHandle={closePhotoModalHandle}
			/>
			<SearchChatModal
				onGo={(pageIndex: number) => {
					setSearchChatModalVisible(false);
					setFoundChat([]);

					const { href } = window.location;
					const pos = href.indexOf(fileMd5);
					const prefix = href.substring(0, pos);
					// console.log(
					// 	`${prefix}${fileMd5}-${pageIndex}?p=${pageCount}&r=${helper.rnd()}`
					// );
					window.location.href = `${prefix}${fileMd5}-${pageIndex}?p=${pageCount}&r=${helper.rnd()}`;
				}}
				onClose={() => setSearchChatModalVisible(false)}
				visibile={searchChatModalVisible}
				data={foundChat}
			/>
		</RootPanel>
	);
};

export default DataTable;
