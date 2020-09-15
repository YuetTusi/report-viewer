import { helper } from '@src/utils/helper';
import React, { FC } from 'react';
import { Prop } from './componentTypes';
import { CellBox, RowBox, TableBox } from './StyledBox';

/**
 * 渲染一行
 * @param rwos 行数据
 */
const renderRow = (rows: string[], index: number) => {
	let cells = rows.map((item, i) => <CellBox key={`cell_${i}`}>{item}</CellBox>);
	return <RowBox key={`row_${index}`}>{cells}</RowBox>;
};

/**
 * 渲染表格
 */
const renderTable = (data: Array<string[]>) => {
	if (helper.isNullOrUndefinedOrEmptyArray(data)) {
		return <table></table>;
	} else {
		const rows = data.map((item, i) => {
			return renderRow(item, i);
		});
		return (
			<TableBox>
				<tbody>{rows}</tbody>
			</TableBox>
		);
	}
};

/**
 * 纵表组件
 */
const VerticalTable: FC<Prop> = (props) => {
	const { data } = props;

	return <div>{renderTable(data)}</div>;
};

export default VerticalTable;
