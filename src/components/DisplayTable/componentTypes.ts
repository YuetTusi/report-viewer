import { ColumnType } from "@src/types/View";
import { DisplayTableCell, DisplayTableColumn } from "./types";

interface Prop {
    /**
     * 列头数据
     */
    columns: DisplayTableColumn[],
    /**
     * 表格数据
     */
    data: Array<DisplayTableCell[]>,
    /**
     * 当前页
     */
    pageIndex: number,
    /**
     * 分页尺寸
     */
    pageSize: number,
    /**
     * 总分页数
     */
    pageCount: number,
    /**
     * 换页Handle
     */
    pageChangeHandle: (pageIndex: number, pageSize?: number) => void,
    /**
     * 列动作回调
     * @param val 值
     * @param type 列类型
     */
    actionHandle: (val: any, type: ColumnType) => void,
    /**
     * 横向滚动外界宽度
     */
    scroll?: {
        x: string | number
    }
}

export { Prop };