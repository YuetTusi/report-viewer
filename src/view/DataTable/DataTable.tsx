import React, { FC, useCallback, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import message from 'antd/lib/message';
import { PanelBox } from '@src/components/styled/BoxStyle';
import RootPanel from '@src/components/RootPanel';
import VideoModal from '@src/components/VideoModal';
import DisplayTable from '@src/components/DisplayTable';
import LoadingContainer from '@src/containers/Loading';
import { helper } from '@src/utils/helper';
import { useMount } from '@src/hooks';
import { ColumnType } from '@src/types/View';

interface Prop {}

/**
 * 表格类页面
 */
const DataTable: FC<Prop> = (props) => {
	const { file } = useParams<{ file: string }>();
	const rowVal = useRef<any>(null);
	const [data, setData] = useState<Record<string, any>>({}); //页面数据
	const [videoModalVisible, setVideoModalVisible] = useState<boolean>(false);

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
			default:
				break;
		}
	}, []);

	/**
	 * 关闭视频框
	 */
	const closeVideoModalHandle = useCallback(() => {
		setVideoModalVisible(false);
	}, [videoModalVisible]);

	return (
		<RootPanel loading={loading}>
			<PanelBox>
				<h1>{data.title}</h1>
			</PanelBox>
			<PanelBox>
				<DisplayTable
					columns={data.columnData ?? []}
					data={data.tableData ?? []}
					actionHandle={actionHandle}
				/>
			</PanelBox>
			<VideoModal
				visible={videoModalVisible}
				src={rowVal.current}
				closeHandle={closeVideoModalHandle}
			/>
		</RootPanel>
	);
};

export default DataTable;
