import React, { FC } from 'react';
import Table from 'antd/lib/table';
import { helper } from '@src/utils/helper';
import { getColumns } from './getColumns';
import { getDataSource } from './getDataSource';

interface Prop {
    /**
     * 列头数据
     */
    columns: string[];
    /**
     * 表格数据
     */
    data: Array<string[]>;
}

/**
 * 纯展示表格
 * @param props
 */
const DisplayTable: FC<Prop> = (props) => {
    return (
        <div>
            <Table<Record<string, any>>
                columns={getColumns(props.columns)}
                dataSource={getDataSource(props.data)}
                rowKey={(record) => record._id}
                size="small"
                bordered={true}
                pagination={{
                    defaultPageSize: 10
                }}
            />
        </div>
    );
};

DisplayTable.defaultProps = {
    columns: [],
    data: []
};

export default DisplayTable;
