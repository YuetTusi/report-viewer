import React, { FC, useEffect } from 'react';
import * as echars from 'echarts/core';
import { PieChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers';
import {
    TitleComponent,
    LegendComponent,
    TooltipComponent
} from 'echarts/components';
import { PieChartProp } from './PieChartProp';
import { PieBox } from './PieBox';

echars.use([
    TitleComponent,
    LegendComponent,
    TooltipComponent,
    PieChart,
    CanvasRenderer
]);

const PieChartWidget: FC<PieChartProp> = ({
    name,
    series,
    data
}) => {

    useEffect(() => {

        const $target = document.getElementById('pie-target');

        if ($target !== null) {
            const charts = echars.init($target);
            charts.setOption({
                title: {
                    text: name,
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    orient: 'vertical',
                    left: 'right'
                },
                series: [
                    {
                        name: series,
                        type: 'pie',
                        radius: '50%',
                        data,
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            });
        }

    }, []);

    return <PieBox id="pie-target" />;
}

export default PieChartWidget;