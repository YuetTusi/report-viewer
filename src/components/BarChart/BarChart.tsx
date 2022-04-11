import React, { FC, useEffect } from 'react';
import * as echars from 'echarts/core';
import { BarChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers';
import {
    TitleComponent,
    TooltipComponent,
    GridComponent
} from 'echarts/components';
import { BarChartProp } from './BarChartProp';
import { BarBox } from './BarBox';

echars.use([
    TitleComponent,
    TooltipComponent,
    BarChart,
    GridComponent,
    CanvasRenderer
]);

/**
 * 柱状图
 */
const PieChartWidget: FC<BarChartProp> = ({
    name, x, y
}) => {

    useEffect(() => {

        const $target = document.getElementById('bar-target');

        if ($target !== null) {
            const charts = echars.init($target);
            charts.setOption({
                color: ['#58B19F'],
                title: {
                    text: name,
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item'
                },
                xAxis: {
                    type: 'category',
                    data: x
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: y,
                        type: 'bar'
                    }
                ]
            });
        }

    }, []);

    return <BarBox id="bar-target" />;
}

export default PieChartWidget;