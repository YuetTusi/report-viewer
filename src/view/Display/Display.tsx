import React, { FC, useState } from 'react';
import { useParams } from 'react-router-dom';
import message from 'antd/lib/message';
import { helper } from '@src/utils/helper';
import { useMount } from '@src/hooks';
import { ViewData } from '@src/types/View';

interface Prop {}

const Display: FC<Prop> = (props) => {
	const [data, setData] = useState<ViewData>();

	const { file } = useParams<{ file: string }>();

	useMount(async () => {
		try {
			const next = await helper.loadJSON<ViewData>(`public/data/${file}.json`, 'data');
			setData(next);
		} catch (error) {
			message.error('读取数据失败');
		}
	});

	return (
		<div>
			<h1>Display类页面</h1>
			<hr />
			<div>
				<label>{data?.title}</label>
			</div>
		</div>
	);
};

export default Display;
