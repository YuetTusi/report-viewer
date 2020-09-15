import { ColumnType } from "@src/types/View";
import { DisplayTableColumn } from "./types";

interface Prop {
    /**
     * 列头数据
     */
    columns: DisplayTableColumn[],
    /**
     * 表格数据
     */
    data: Array<string[]>,
    /**
     * 列动作回调
     * @param val 值
     * @param type 列类型
     */
    actionHandle: (val: any, type: ColumnType) => void
}

export { Prop };