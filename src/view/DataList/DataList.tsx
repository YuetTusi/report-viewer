import React, { FC, useState } from 'react';
import { useParams } from 'react-router-dom';
import message from 'antd/lib/message';
import { useMount } from '@src/hooks';
import LoadingContainer from '@src/containers/Loading';
import RootPanel from '@src/components/RootPanel';
import { PanelBox } from '@src/components/styled/BoxStyle';
import VerticalTable from '@src/components/VerticalTable';
import { MainTitle, PartBox, PartCaption, PartContent } from '@src/components/styled/StyleWidget';
import { helper } from '@src/utils/helper';
import { BaseView } from '@src/types/View';

interface Prop extends BaseView {}

/**
 * 纵表类页面
 */
const DataList: FC<Prop> = (props) => {
	const [data, setData] = useState<Record<string, any>>({}); //页面数据
	const { loading, setLoading } = LoadingContainer.useContainer();
	const { file } = useParams<{ file: string }>();

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

	return (
		<RootPanel loading={loading}>
			<PanelBox>
				<MainTitle dangerouslySetInnerHTML={{ __html: data.title ?? '' }} />
			</PanelBox>
			<PanelBox>
				<PartBox>
					<PartCaption dangerouslySetInnerHTML={{ __html: data?.part?.caption }} />
					<PartContent>
						<VerticalTable data={data?.part?.listData} />
					</PartContent>
				</PartBox>
			</PanelBox>
		</RootPanel>
	);
};

export default DataList;
