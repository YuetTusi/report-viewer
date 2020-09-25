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
import { BaseView, ColumnType } from '@src/types/View';
import { MainTitle, PartBox, PartCaption, PartContent } from '@src/components/styled/StyleWidget';

const defaultPageSize = 500;
interface Prop extends BaseView {}

/**
 * 表格类页面
 */
const DataTable: FC<Prop> = (props) => {
	const { file } = useParams<{ file: string }>();
	const [fileMd5, index] = file.split('-');
	const [pageIndex, setPageIndex] = useState<number>(
		helper.isNullOrUndefined(index) ? 1 : Number(index)
	); //当前页
	const actionVal = useRef<any>(null); //当前用户击中的值
	const [data, setData] = useState<any>({}); //页面数据
	const [videoModalVisible, setVideoModalVisible] = useState<boolean>(false); //视频框显示
	const [audioModalVisible, setAudioModalVisible] = useState<boolean>(false); //音频框显示
	const [photoModalVisible, setPhotoModalVisible] = useState<boolean>(false); //照片框显示

	const { loading, setLoading } = LoadingContainer.useContainer();

	useMount(async () => {
		setLoading(true);
		try {
			const next = await helper.loadJSON<any>(`public/data/${file}.json`, 'data');
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
	 * 点中行action回调
	 * @param val 值
	 * @param type 列类型
	 */
	const actionHandle = useCallback((val: any, type: ColumnType) => {
		actionVal.current = val;
		switch (type) {
			case ColumnType.Video:
				setVideoModalVisible(true);
				break;
			case ColumnType.Photo:
			case ColumnType.Preview:
				setPhotoModalVisible(true);
				break;
			case ColumnType.Audio:
				setAudioModalVisible(true);
				break;
			case ColumnType.File:
				window.open(val);
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
				<MainTitle dangerouslySetInnerHTML={{ __html: data.title ?? '' }} />
			</PanelBox>
			<PanelBox>
				<PartBox>
					<PartCaption>{data.caption ?? ''}</PartCaption>
					<PartContent>
						<DisplayTable
							columns={data.column ?? []}
							data={data.row ?? []}
							pageIndex={helper.isNullOrUndefined(pageIndex) ? 1 : Number(pageIndex)}
							pageSize={defaultPageSize}
							total={data.total ?? 0}
							pageChangeHandle={pageChangeHandle}
							actionHandle={actionHandle}
							scroll={{ x: 'max-content' }}
						/>
					</PartContent>
				</PartBox>
			</PanelBox>
			<AudioModal
				visible={audioModalVisible}
				src={actionVal.current}
				closeHandle={closeAudioModalHandle}
			/>
			<VideoModal
				visible={videoModalVisible}
				src={actionVal.current}
				closeHandle={closeVideoModalHandle}
			/>
			<PhotoModal
				visible={photoModalVisible}
				src={actionVal.current}
				closeHandle={closePhotoModalHandle}
			/>
		</RootPanel>
	);
};

export default DataTable;
