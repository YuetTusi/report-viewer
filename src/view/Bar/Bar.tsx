import React, { FC, useState } from 'react';
import { useParams } from 'react-router-dom';
import Empty from 'antd/lib/empty';
import message from 'antd/lib/message';
import LoadingContainer from '@src/containers/Loading';
import { helper } from '@src/utils/helper';
import { useMount } from '@src/hooks';
import RootPanel from '@src/components/RootPanel';
import { PanelBox } from '@src/components/styled/BoxStyle';
import { MainTitle, PartBox, PartCaption, PartContent } from '@src/components/styled/StyleWidget';
import BarChartWidget from '@src/components/BarChart';
import { BarBox } from '@src/components/BarChart/BarBox'

/**
 * 柱状图页
 */
const Bar: FC<{}> = () => {

    const { file } = useParams<{ file: string }>();
    const [data, setData] = useState<Record<string, any>>({}); //页面数据
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
     * 渲染柱图
     */
    const renderBar = () => {
        if (!helper.isNullOrUndefined(data?.pie?.data)) {

            const x = data.pie.data.map((item: any) => item.name) ?? [];
            const y = data.pie.data.map((item: any) => item.value) ?? [];

            return <BarChartWidget
                name={data.pie.name}
                x={x}
                y={y}
            />
        } else {
            return <BarBox>
                <Empty description="暂无数据" image={Empty.PRESENTED_IMAGE_SIMPLE} />
            </BarBox>;
        }
    }

    return <RootPanel loading={loading}>
        <PanelBox>
            <MainTitle dangerouslySetInnerHTML={{ __html: data.title ?? '' }} />
        </PanelBox>
        <PanelBox>
            <PartBox>
                <PartCaption dangerouslySetInnerHTML={{ __html: data?.caption }} />
                <PartContent>
                    {renderBar()}
                </PartContent>
            </PartBox>
        </PanelBox>
    </RootPanel>;
};

export default Bar;