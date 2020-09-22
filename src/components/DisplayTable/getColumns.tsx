import React from 'react';
import Button from 'antd/lib/button';
import Icon from 'antd/lib/icon';
import { ColumnType } from '@src/types/View';
import { ColumnGroupProps } from 'antd/lib/table/ColumnGroup';
import { DisplayTableColumn } from './types';
import { Prop } from './componentTypes';
import { BlackText, RedText } from './TableStyled';
/**
 * 根据列头数据生成表头
 * @param columns 列头数据
 */
function getColumns(props: Prop): ColumnGroupProps[] {
	if (props.columns.length === 0) {
		return [];
	} else {
		return props.columns.map(({ header, type }, i) => {
			switch (type) {
				case ColumnType.Text:
					return {
						title: header,
						dataIndex: `col_${i}`,
						key: `col_${i}`,
						render: (val: string, row: Record<string, any>) =>
							row.del ? <RedText>{val}</RedText> : <BlackText>{val}</BlackText>
					};
				case ColumnType.Audio:
				case ColumnType.Video:
					return {
						title: header,
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
						key: `col_${i}`,
						align: 'center',
						width: 60
					};
				case ColumnType.Photo:
					return {
						title: header,
						render: (val: any, record: DisplayTableColumn) => (
							<Button
								type="primary"
								size="small"
								onClick={() => {
									props.actionHandle(val, type);
								}}>
								<Icon type="search" />
							</Button>
						),
						dataIndex: `col_${i}`,
						key: `col_${i}`,
						align: 'center',
						width: 60
					};
				case ColumnType.Preview:
					return {
						title: header,
						render: (url: string, record: DisplayTableColumn) => (
							<img
								onClick={() => {
									props.actionHandle(url, type);
								}}
								src={url}
								alt={url}
								style={{ cursor: 'pointer', width: '50px', height: '50px' }}
							/>
						),
						dataIndex: `col_${i}`,
						key: `col_${i}`,
						align: 'center',
						width: 80
					};
				case ColumnType.File:
					return {
						title: header,
						render: (val: string, record: DisplayTableColumn) => (
							<Icon type="file-text" style={{ fontSize: '2rem' }} />
						),
						dataIndex: `col_${i}`,
						key: `col_${i}`,
						align: 'center',
						width: 60
					};
				default:
					return {
						title: header,
						dataIndex: `col_${i}`,
						key: `col_${i}`,
						render: (val: string, row: Record<string, any>) =>
							row.del ? <RedText>{val}</RedText> : <BlackText>{val}</BlackText>
					};
			}
		});
	}
}

export { getColumns };
