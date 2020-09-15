import React, { FC } from 'react';
import Table from 'antd/lib/table';
import { getColumns } from './getColumns';
import { getDataSource } from './getDataSource';
import { Prop } from './componentTypes';
import { DisplayTableCell } from './types';

/**
 * 纯展示表格
 * @param props
 */
const DisplayTable: FC<Prop> = (props) => {
	return (
		<div>
			<Table<DisplayTableCell>
				columns={getColumns(props)}
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
