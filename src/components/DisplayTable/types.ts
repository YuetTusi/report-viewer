import { ColumnType } from "@src/types/View";

/**
 * 表格列
 */
interface DisplayTableColumn {
    /**
     * 列头
     */
    headerText: string,
    /**
     * 类型
     */
    type: ColumnType
}

export { DisplayTableColumn };