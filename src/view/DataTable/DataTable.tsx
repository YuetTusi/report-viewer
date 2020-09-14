import React, { FC, useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import message from 'antd/lib/message';
import RootPanel from '@src/components/RootPanel';
import { helper } from '@src/utils/helper';
import { useMount } from '@src/hooks';
import LoadingContainer from '@src/containers/Loading';
import VideoModal from '@src/components/VideoModal';

interface Prop {}

const DataTable: FC<Prop> = (props) => {
	const [data, setData] = useState<any>({});
	const [visible, setVisible] = useState<boolean>(false);

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
		setVisible(false);
	}, [visible]);

	return (
		<RootPanel loading={loading}>
			<h1>DataTable类页面</h1>
			<hr />
			<div>
				<label>{data.title}</label>
			</div>
			<div>
				<button
					type="button"
					onClick={() => {
						setVisible((prev) => !prev);
					}}>
					ShowVideoModel
				</button>
			</div>
			<VideoModal
				visible={visible}
				// src={'public/video/1.mp4'}
				src={'public/video/0E3656FB718619607AF989A2F840D266.mp4'}
				closeHandle={closeHandle}
			/>
		</RootPanel>
	);
};

export default DataTable;
