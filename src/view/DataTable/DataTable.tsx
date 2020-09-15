import React, { FC, useCallback, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import message from 'antd/lib/message';
import { PanelBox } from '@src/components/styled/BoxStyle';
import RootPanel from '@src/components/RootPanel';
import AudioModal from '@src/components/AudioModal';
import VideoModal from '@src/components/VideoModal';
import PhotoModal from '@src/components/PhotoModal';
import DisplayTable from '@src/components/DisplayTable';
import LoadingContainer from '@src/containers/Loading';
import { helper } from '@src/utils/helper';
import { useMount } from '@src/hooks';
import { ColumnType } from '@src/types/View';
import { MainTitle, PartBox, PartCaption, PartContent } from '@src/components/styled/StyleWidget';

interface Prop {}

/**
 * 表格类页面
 */
const DataTable: FC<Prop> = (props) => {
	const { file } = useParams<{ file: string }>();
	const rowVal = useRef<any>(null); //当前用户击中的值
	const [data, setData] = useState<Record<string, any>>({}); //页面数据
	const [videoModalVisible, setVideoModalVisible] = useState<boolean>(false); //视频框显示
	const [audioModalVisible, setAudioModalVisible] = useState<boolean>(false); //音频框显示
	const [photoModalVisible, setPhotoModalVisible] = useState<boolean>(false); //照片框显示

	const { loading, setLoading } = LoadingContainer.useContainer();

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
	 * 点中行action回调
	 * @param val 值
	 * @param type 列类型
	 */
	const actionHandle = useCallback((val: any, type: ColumnType) => {
		rowVal.current = val;
		switch (type) {
			case ColumnType.Video:
				setVideoModalVisible(true);
				break;
			case ColumnType.Photo:
				setPhotoModalVisible(true);
				break;
			case ColumnType.Audio:
				setAudioModalVisible(true);
				break;
			default:
				break;
		}
	}, []);

	/**
	 * 关闭音频框
	 */
	const closeAudioModalHandle = useCallback(() => {
		setAudioModalVisible(false);
	}, [audioModalVisible]);

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
				<MainTitle>{data.title ?? ''}</MainTitle>
			</PanelBox>
			<PanelBox>
				<PartBox>
					<PartCaption>标题</PartCaption>
					<PartContent>
						<DisplayTable
							columns={data.columnData ?? []}
							data={data.tableData ?? []}
							actionHandle={actionHandle}
						/>
					</PartContent>
				</PartBox>
			</PanelBox>
			<AudioModal
				visible={audioModalVisible}
				src={rowVal.current}
				closeHandle={closeAudioModalHandle}
			/>
			<VideoModal
				visible={videoModalVisible}
				src={rowVal.current}
				closeHandle={closeVideoModalHandle}
			/>
			<PhotoModal
				visible={photoModalVisible}
				src={rowVal.current}
				closeHandle={closePhotoModalHandle}
			/>
		</RootPanel>
	);
};

export default DataTable;
