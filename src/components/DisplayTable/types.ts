import { ColumnType } from "@src/types/View";

/**
 * 表格列
 */
interface DisplayTableColumn {
    /**
     * 列头
     */
    header: string,
    /**
     * 类型
     */
    type: ColumnType
}

/**
 * 单元格
 */
interface DisplayTableCell {
    /**
     * 值
     */
    value: string,
    /**
     * 其它属性
     */
    [extra: string]: any
}

export { DisplayTableColumn, DisplayTableCell };