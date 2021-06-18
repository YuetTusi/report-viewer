import React, { FC, useState } from 'react';
import $ from 'jquery';
import { useLocation, useParams } from 'react-router-dom';
import message from 'antd/lib/message';
import PhotoShow from '@src/components/PhotoShow';
import { BaseView } from '@src/types/View';
import { useMount } from '@src/hooks';
import LoadingContainer from '@src/containers/Loading';
import RootPanel from '@src/components/RootPanel';
import { PanelBox } from '@src/components/styled/BoxStyle';
import { MainTitle, PartBox, PartCaption, PartContent } from '@src/components/styled/StyleWidget';
import { helper } from '@src/utils/helper';
import AlbumPicture from '@src/components/AlbumPhoto/AlbumPicture';

interface Prop extends BaseView {}

let defaultPageSize = 50; //默认分页尺寸
let pageCount = '1'; //总页数

/**
 * 相册页
 */
const Album: FC<Prop> = (props) => {
	const { file } = useParams<{ file: string }>();
	const { search } = useLocation();
	const [fileMd5, index] = file.split('-');
	const [pageIndex, setPageIndex] = useState<number>(
		helper.isNullOrUndefined(index) ? 1 : Number(index)
	); //当前页
	const [data, setData] = useState<Record<string, any>>({}); //页面数据
	const [photoShowVisible, setPhotoShowVisible] = useState(false);
	const [src, setSrc] = useState('');
	const [srcExport, setSrcExport] = useState('');
	const { loading, setLoading } = LoadingContainer.useContainer();

	pageCount = helper.parseURLSearch(search, 'p') ?? '1';

	useMount(async () => {
		setLoading(true);
		try {
			const next = await helper.loadJSON<Record<string, any>>(
				`public/data/${file}.json`,
				'data'
			);
			setData(next);
		} catch (error) {
			message.error('读取数据失败');
		} finally {
			setLoading(false);
		}
	});

	/**
	 * 点击照片click
	 * @param src 照片路径
	 */
	const pictureClick = (src: string, srcExport: string) => {
		setSrc(src);
		setSrcExport(srcExport);
		setPhotoShowVisible(true);
	};

	const pageChange = async (pageIndex: number) => {
		$('[data-has]').each((i: number, element: any) => {
			$(element).attr('data-has', '0');
		});
		setLoading(true);
		try {
			const next = await helper.loadJSON<Record<string, any>>(
				`public/data/${fileMd5}-${pageIndex}.json`,
				'data'
			);
			setPageIndex(pageIndex);
			setData(next);
		} catch (error) {
			message.error('读取数据失败');
		} finally {
			const rightPane = $('.layout-pane')[1];
			if (rightPane) {
				$(rightPane).scrollTop(0);
			}
			setTimeout(() => {
				setLoading(false);
			}, 600);
		}
	};

	return (
		<RootPanel loading={loading}>
			<PanelBox>
				<MainTitle dangerouslySetInnerHTML={{ __html: data.title ?? '' }} />
			</PanelBox>
			<PanelBox>
				<PartBox>
					<PartCaption dangerouslySetInnerHTML={{ __html: data?.caption }} />
					<PartContent>
						<AlbumPicture
							data={data?.images ?? []}
							pageIndex={pageIndex}
							pageSize={defaultPageSize}
							pageCount={Number(pageCount)}
							total={data.total}
							pictureClick={pictureClick}
							pageChange={pageChange}
						/>
					</PartContent>
				</PartBox>
			</PanelBox>
			<PhotoShow
				visible={photoShowVisible}
				src={src}
				exportSrc={srcExport}
				closeHandle={() => setPhotoShowVisible(false)}
			/>
		</RootPanel>
	);
};

export default Album;
