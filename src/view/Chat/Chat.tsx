import React, { FC, useCallback, useRef, useState } from 'react';
import message from 'antd/lib/message';
import { useParams } from 'react-router-dom';
import { useMount } from '@src/hooks';
import LoadingContainer from '@src/containers/Loading';
import { helper } from '@src/utils/helper';
import RootPanel from '@src/components/RootPanel';
import { PanelBox } from '@src/components/styled/BoxStyle';
import { MainTitle, PartBox, PartCaption, PartContent } from '@src/components/styled/StyleWidget';
import ChatList from '@src/components/ChatList';
import { BaseView } from '@src/types/View';
import VideoModal from '@src/components/VideoModal';
import PhotoModal from '@src/components/PhotoModal';

interface Prop extends BaseView {}

const defaultPageSize = 500; //默认分页尺寸

/**
 * 聊天类页面
 */
const Chat: FC<Prop> = (props) => {
	const { file } = useParams<{ file: string }>();
	const [data, setData] = useState<any>({});
	const [fileMd5, index] = file.split('-');
	const [pageIndex, setPageIndex] = useState<number>(
		helper.isNullOrUndefined(index) ? 1 : Number(index)
	); //当前页
	const fileSrc = useRef<any>(null); //当前聊天组件返回的文件路径
	const [videoModalVisible, setVideoModalVisible] = useState<boolean>(false); //视频框显示
	const [photoModalVisible, setPhotoModalVisible] = useState<boolean>(false); //照片框显示

	const { loading, setLoading } = LoadingContainer.useContainer();

	useMount(async () => {
		setLoading(true);
		try {
			const next = await helper.loadJSON(`public/data/${file}.json`, 'data');
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
		console.log(pageIndex, pageSize);
		setLoading(true);
		try {
			const next = await helper.loadJSON(`public/data/${fileMd5}-${pageIndex}.json`, 'data');
			setPageIndex(pageIndex);
			setData(next);
		} catch (error) {
			message.error('读取数据失败');
		} finally {
			setLoading(false);
		}
	};

	/**
	 * 关闭视频框
	 */
	const closeVideoModalHandle = useCallback(() => {
		setVideoModalVisible(false);
	}, [videoModalVisible]);

	/**
	 * 关闭照片框
	 */
	const closePhotoModalHandle = useCallback(() => {
		setPhotoModalVisible(false);
	}, [photoModalVisible]);

	return (
		<RootPanel loading={loading}>
			<PanelBox>
				<MainTitle dangerouslySetInnerHTML={{ __html: data.title ?? '' }} />
			</PanelBox>
			<PanelBox>
				<PartBox>
					<PartCaption>{data.caption ?? ''}</PartCaption>
					<PartContent>
						<ChatList
							data={data.row}
							pageIndex={helper.isNullOrUndefined(pageIndex) ? 1 : Number(pageIndex)}
							pageSize={defaultPageSize}
							total={data.total ?? 0}
							pageChangeHandle={pageChangeHandle}
							photoHandle={(src: string) => {
								fileSrc.current = src;
								setPhotoModalVisible(true);
							}}
							videoHandle={(src: string) => {
								fileSrc.current = src;
								setVideoModalVisible(true);
							}}
						/>
					</PartContent>
				</PartBox>
			</PanelBox>
			<VideoModal
				visible={videoModalVisible}
				src={fileSrc.current}
				closeHandle={closeVideoModalHandle}
			/>
			<PhotoModal
				visible={photoModalVisible}
				src={fileSrc.current}
				closeHandle={closePhotoModalHandle}
			/>
		</RootPanel>
	);
};

export default Chat;
