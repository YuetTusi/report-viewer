import React, { FC, useState } from 'react';
import message from 'antd/lib/message';
import { useParams } from 'react-router-dom';
import { useMount } from '@src/hooks';
import LoadingContainer from '@src/containers/Loading';
import { helper } from '@src/utils/helper';
import RootPanel from '@src/components/RootPanel';
import { PanelBox } from '@src/components/styled/BoxStyle';
import { MainTitle } from '@src/components/styled/StyleWidget';

interface Prop {}

const Chat: FC<Prop> = (props) => {
	const [data, setData] = useState<any>({});
	const { file } = useParams<{ file: string }>();

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

	const { loading, setLoading } = LoadingContainer.useContainer();

	return (
		<RootPanel loading={loading}>
			<PanelBox>
				<MainTitle>{data.title ?? ''}</MainTitle>
			</PanelBox>
			<PanelBox></PanelBox>
		</RootPanel>
	);
};

export default Chat;
