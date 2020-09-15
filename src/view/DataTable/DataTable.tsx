import React, { FC, useCallback, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import message from 'antd/lib/message';
import RootPanel from '@src/components/RootPanel';
import VideoModal from '@src/components/VideoModal';
import DisplayTable from '@src/components/DisplayTable';
import { DisplayTableColumn } from '@src/components/DisplayTable/types';
import LoadingContainer from '@src/containers/Loading';
import { helper } from '@src/utils/helper';
import { useMount } from '@src/hooks';
import { ColumnType } from '@src/types/View';

interface Prop {}

const columnData: DisplayTableColumn[] = [
	{ headerText: 'id', type: ColumnType.Text },
	{ headerText: '视频', type: ColumnType.Video }
];

const tableData: Array<string[]> = [
	['1', 'public/video/1.mp4'],
	['2', 'public/video/0E3656FB718619607AF989A2F840D266.mp4'],
	['3', 'public/video/2.mp4']
];

const DataTable: FC<Prop> = (props) => {
	const [data, setData] = useState<any>({});
	const rowVal = useRef<any>(null);
	const [videoModalVisible, setVideoModalVisible] = useState<boolean>(false);

	const { file } = useParams<{ file: string }>();

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

	const closeHandle = useCallback(() => {
		setVideoModalVisible(false);
	}, [videoModalVisible]);

	return (
		<RootPanel loading={loading}>
			<h1>DataTable类页面</h1>
			<hr />
			<div>
				<label>{data.title}</label>
			</div>
			<div>
				<DisplayTable
					columns={columnData}
					data={tableData}
					actionHandle={(val: any, type: ColumnType) => {
						rowVal.current = val;
						switch (type) {
							case ColumnType.Video:
								setVideoModalVisible(true);
								break;
							default:
								break;
						}
					}}
				/>
			</div>
			<VideoModal
				visible={videoModalVisible}
				src={rowVal.current}
				closeHandle={closeHandle}
			/>
		</RootPanel>
	);
};

export default DataTable;
