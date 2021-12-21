import React, { FC } from 'react';
import Table from 'antd/lib/table';
import Pagination from 'antd/lib/pagination';
import { getColumns } from './getColumns';
import { getDataSource } from './getDataSource';
import { Prop } from './componentTypes';
import { DisplayTableCell } from './types';
import { PageBox } from './TableStyled';

/**
 * 表格组件
 * 可由数据定制列（对应ColumnType枚举）
 * text:文本列(默认),preview:图片预览列,
 * video:视频列,audio:音频列,photo:照片列
 */
const DisplayTable: FC<Prop> = (props) => {
	const { pageIndex, pageSize, pageCount, pageChangeHandle } = props;

	return (
		<div>
			<PageBox className="top" top="24px">
				<Pagination
					onChange={pageChangeHandle}
					current={pageIndex}
					pageSize={pageSize}
					total={pageSize * pageCount}
					size="small"
					showQuickJumper={true}
				/>
			</PageBox>
			<Table<DisplayTableCell>
				columns={getColumns(props)}
				dataSource={getDataSource(props.data)}
				rowKey={(record) => record._id}
				size="small"
				bordered={true}
				rowClassName={() => 'az-report-row'}
				scroll={props.scroll}
				pagination={false}
			/>
			<PageBox className="bottom">
				<Pagination
					onChange={pageChangeHandle}
					current={pageIndex}
					pageSize={pageSize}
					total={pageSize * pageCount}
					size="small"
					showQuickJumper={true}
				/>
			</PageBox>
		</div>
	);
};

DisplayTable.defaultProps = {
	columns: [],
	data: []
};

export default DisplayTable;
