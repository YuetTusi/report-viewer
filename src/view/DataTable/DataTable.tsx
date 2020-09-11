import React, { FC, useState } from 'react';
import message from 'antd/lib/message';
import RootPanel from '@src/components/RootPanel';
import { helper } from '@src/utils/helper';
import { useParams } from 'react-router-dom';
import { useMount } from '@src/hooks';
import LoadingContainer from '@src/containers/Loading';

interface Prop {}

const DataTable: FC<Prop> = (props) => {
	const [data, setData] = useState<any>({});

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

	return (
		<RootPanel loading={loading}>
			<h1>DataTable类页面</h1>
			<hr />
			<div>
				<label>{data.title}</label>
			</div>
		</RootPanel>
	);
};

export default DataTable;
