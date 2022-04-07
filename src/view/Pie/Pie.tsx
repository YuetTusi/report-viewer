import React, { FC, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import * as echars from 'echarts/core';
import { PieChart } from 'echarts/charts'
import {
    TitleComponent,
    LegendComponent,
    TooltipComponent,

} from 'echarts/components';
import Empty from 'antd/lib/empty';
import message from 'antd/lib/message';
import LoadingContainer from '@src/containers/Loading';
import { helper } from '@src/utils/helper';
import { useMount } from '@src/hooks';
import RootPanel from '@src/components/RootPanel';
import { PanelBox } from '@src/components/styled/BoxStyle';
import { MainTitle, PartBox, PartCaption, PartContent } from '@src/components/styled/StyleWidget';
import PieChartWidget from '@src/components/PieChart';
import { PieBox } from '@src/components/PieChart/PieBox';

/**
 * 饼状图页
 */
const Pie: FC<{}> = () => {

    const { file } = useParams<{ file: string }>();
    const { search } = useLocation();
    const [fileMd5, index] = file.split('-');
    const [pageIndex, setPageIndex] = useState<number>(
        helper.isNullOrUndefined(index) ? 1 : Number(index)
    ); //当前页
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
     * 渲染饼图
     */
    const renderPie = () => {
        if (!helper.isNullOrUndefined(data?.pie?.data)) {
            return <PieChartWidget
                name={data.pie.name}
                series={data.pie.series}
                data={data.pie.data}
            />
        } else {
            return <PieBox>
                <Empty description="暂无数据" image={Empty.PRESENTED_IMAGE_SIMPLE} />
            </PieBox>;
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
                    {renderPie()}
                </PartContent>
            </PartBox>
        </PanelBox>
    </RootPanel>;
};

export default Pie;