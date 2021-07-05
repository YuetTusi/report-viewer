import $ from 'jquery';
import React, { FC, useCallback, useRef, useState } from 'react';
import debounce from 'lodash/debounce';
import Icon from 'antd/lib/icon';
import Input from 'antd/lib/input';
import message from 'antd/lib/message';
import { useLocation, useParams } from 'react-router-dom';
import { useMount } from '@src/hooks';
import LoadingContainer from '@src/containers/Loading';
import { helper } from '@src/utils/helper';
import RootPanel from '@src/components/RootPanel';
import VideoModal from '@src/components/VideoModal';
import PhotoShow from '@src/components/PhotoShow';
import SearchChatModal from '@src/components/SearchChatModal';
import ChatList from '@src/components/ChatList';
import { SearchChatBox } from '@src/components/ChatList/ListStyled';
import { PanelBox } from '@src/components/styled/BoxStyle';
import { MainTitle, PartBox, PartCaption, PartContent } from '@src/components/styled/StyleWidget';
import { BaseView } from '@src/types/View';

interface Prop extends BaseView {}

const { Search } = Input;
let defaultPageSize = 0; //默认分页尺寸
let pageCount = '1'; //总页数

/**
 * 聊天类页面
 */
const Chat: FC<Prop> = (props) => {
	const { file } = useParams<{ file: string }>();
	const { search } = useLocation();
	const [data, setData] = useState<any>({});
	const [fileMd5, index] = file.split('-');
	const [pageIndex, setPageIndex] = useState<number>(
		helper.isNullOrUndefined(index) ? 1 : Number(index)
	); //当前页
	const fileSrc = useRef<any>(null); //当前聊天组件返回的文件路径
	const fileExportSrc = useRef<any>(null); //当前聊天组件返回的备用文件路径
	const searchRef = useRef<any>(null); //查询文本框
	const [videoModalVisible, setVideoModalVisible] = useState<boolean>(false); //视频框显示
	const [photoShowVisible, setPhotoShowVisible] = useState<boolean>(false); //照片框显示
	const [searchChatModalVisible, setSearchChatModalVisible] = useState<boolean>(false); //照片框显示
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
	const pageChangeHandle = async (pageIndex: number, pageSize: number) => {
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
			setLoading(false);
		}
	};

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
	const closePhotoShowHandle = useCallback(() => setPhotoShowVisible(false), [photoShowVisible]);

	/**
	 * 查询聊天记录handle
	 * @param value 关键字
	 */
	const onSearchChat = debounce(
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
						const rec = helper.getFoundChatAndPageIndex(data, value);
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

	return (
		<RootPanel loading={loading}>
			<PanelBox>
				<MainTitle dangerouslySetInnerHTML={{ __html: data.title ?? '' }} />
			</PanelBox>
			<PanelBox>
				<PartBox>
					<PartCaption>
						<div
							className="caption-text"
							dangerouslySetInnerHTML={{ __html: data.caption ?? '' }}
						/>
						<div
							onClick={() => {
								window.open(`preview.html?file=${fileMd5}&p=${pageCount}`);
							}}
							className="caption-action">
							<Icon type="printer" />
							<span>打印视图</span>
						</div>
					</PartCaption>
					<SearchChatBox>
						<Search
							ref={searchRef}
							onSearch={onSearchChat}
							size="small"
							placeholder="请输入关键字搜索记录"
							maxLength={200}
						/>
					</SearchChatBox>

					<PartContent>
						<ChatList
							data={data.row}
							pageIndex={helper.isNullOrUndefined(pageIndex) ? 1 : Number(pageIndex)}
							pageSize={defaultPageSize}
							pageCount={pageCount as any}
							pageChangeHandle={pageChangeHandle}
							photoHandle={(src: string, exportSrc: string) => {
								fileSrc.current = src;
								fileExportSrc.current = exportSrc;
								setPhotoShowVisible(true);
							}}
							videoHandle={(src: string, exportSrc: string) => {
								fileSrc.current = src;
								fileExportSrc.current = exportSrc;
								setVideoModalVisible(true);
							}}
						/>
					</PartContent>
				</PartBox>
			</PanelBox>
			<VideoModal
				visible={videoModalVisible}
				src={fileSrc.current}
				exportSrc={fileExportSrc.current}
				closeHandle={closeVideoModalHandle}
			/>
			<PhotoShow
				visible={photoShowVisible}
				src={fileSrc.current}
				exportSrc={fileExportSrc.current}
				closeHandle={closePhotoShowHandle}
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

export default Chat;
