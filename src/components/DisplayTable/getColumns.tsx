import React from 'react';
import Button from 'antd/lib/button';
import Icon from 'antd/lib/icon';
import { ColumnType } from '@src/types/View';
import { ColumnGroupProps } from 'antd/lib/table/ColumnGroup';
import { DisplayTableColumn } from './types';
import { Prop } from './componentTypes';

/**
 * 根据列头数据生成表头
 * @param columns 列头数据
 */
function getColumns(props: Prop): ColumnGroupProps[] {
	if (props.columns.length === 0) {
		return [];
	} else {
		return props.columns.map(({ headerText, type }, i) => {
			switch (type) {
				case ColumnType.Text:
					return {
						title: headerText,
						dataIndex: `col_${i}`,
						key: `col_${i}`
					};
				case ColumnType.Audio:
				case ColumnType.Video:
					return {
						title: headerText,
						render: (val: any, record: DisplayTableColumn) => (
							<Button
								type="primary"
								size="small"
								onClick={() => {
									props.actionHandle(val, type);
								}}>
								<Icon type="play-circle" />
							</Button>
						),
						dataIndex: `col_${i}`,
						key: `col_${i}`
					};
				case ColumnType.Photo:
					return {
						title: headerText,
						render: (val: any, record: DisplayTableColumn) => (
							<Button
								type="primary"
								size="small"
								onClick={() => {
									props.actionHandle(val, type);
								}}>
								查看
							</Button>
						),
						dataIndex: `col_${i}`,
						key: `col_${i}`
					};
				default:
					return {
						title: headerText,
						dataIndex: `col_${i}`,
						key: `col_${i}`
					};
			}
		});
	}
}

export { getColumns };
