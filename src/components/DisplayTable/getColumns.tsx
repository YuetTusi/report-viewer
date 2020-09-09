import { ColumnGroupProps } from 'antd/lib/table/ColumnGroup';

/**
 * 根据列头数据生成表头
 * @param columns 列头数据
 */
function getColumns(columns: string[]): ColumnGroupProps[] {
    if (columns.length === 0) {
        return [];
    } else {
        return columns.map((headerText, i) => ({
            title: headerText,
            dataIndex: `col_${i}`,
            key: `col_${i}`
        }));
    }
}

export { getColumns };
