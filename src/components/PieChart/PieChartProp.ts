export interface PieChartProp {
    /**
     * 图表标题
     */
    name: string,
    /**
     * Tooltip内容
     */
    series: string,
    /**
     * 数据
     */
    data: Array<{ value: number, name: string }>
}

// "name":"饼图标题",
// "series":"浮层内容",
// "data":[
//     { "value": 1048, "name": "数据项1" },
//     { "value": 735, "name": "数据项2" },
//     { "value": 580, "name": "数据项3" },
//     { "value": 484, "name": "数据项4" },
//     { "value": 300, "name": "数据项5" },
//     { "value": 120, "name": "数据项6" },
//     { "value": 53, "name": "数据项7" }
// ]
