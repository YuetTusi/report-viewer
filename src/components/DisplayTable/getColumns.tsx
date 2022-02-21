import React, { MouseEvent } from 'react';
import Button from 'antd/lib/button';
import Icon from 'antd/lib/icon';
import { ColumnType } from '@src/types/View';
import { ColumnGroupProps } from 'antd/lib/table/ColumnGroup';
import { DisplayTableCell, DisplayTableColumn } from './types';
import { AnchorLink, BlackText, FullText, RedText } from './TableStyled';
import VideoPreview from './VideoPreview';
import { Prop } from './componentTypes';
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
						render: (cell: DisplayTableCell, row: Record<string, any>) =>
							row.del ? (
								<RedText dangerouslySetInnerHTML={{ __html: cell.value }} />
							) : (
								<BlackText dangerouslySetInnerHTML={{ __html: cell.value }} />
							)
					};
				case ColumnType.Audio:
					return {
						title: header,
						render: (cell: DisplayTableCell, record: DisplayTableColumn) => (
							<Button
								type="primary"
								size="small"
								onClick={() => {
									props.actionHandle(cell, type);
								}}>
								<Icon type="play-circle" />
							</Button>
						),
						dataIndex: `col_${i}`,
						key: `col_${i}`,
						align: 'center',
						width: 60
					};
				case ColumnType.Video:
					return {
						title: header,
						render: (cell: DisplayTableCell, record: DisplayTableColumn) => {
							return (
								<VideoPreview
									data={cell}
									openHandle={() => props.actionHandle(cell, type)}
								/>
							);
						},
						dataIndex: `col_${i}`,
						key: `col_${i}`,
						align: 'center',
						width: '80px'
					};
				case ColumnType.Photo:
					return {
						title: header,
						render: (cell: DisplayTableCell, record: DisplayTableColumn) => (
							<Button
								type="primary"
								size="small"
								onClick={() => {
									props.actionHandle(cell, type);
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
						render: (cell: DisplayTableCell, record: DisplayTableColumn) => {
							return (
								<img
									onClick={() => {
										props.actionHandle(cell, type);
									}}
									src={cell.value}
									data-has="0"
									onError={(e) => {
										//error事件加载备用图片
										const { has } = (e.target as any).dataset;
										if (has === '0') {
											(e.target as any).setAttribute('data-has', '1');
											(e.target as any).src = cell.value_export;
										}
									}}
									style={{ cursor: 'pointer', width: '50px', height: '50px' }}
								/>
							);
						},
						dataIndex: `col_${i}`,
						key: `col_${i}`,
						align: 'center',
						width: 80
					};
				case ColumnType.File:
					return {
						title: header,
						render: (cell: DisplayTableCell, record: DisplayTableColumn) => (
							<a
								onClick={(event: MouseEvent<HTMLAnchorElement>) => {
									event.preventDefault();
									window.open(cell.value);
								}}>
								<Icon type="file-text" style={{ fontSize: '2rem' }} />
							</a>
						),
						dataIndex: `col_${i}`,
						key: `col_${i}`,
						align: 'center',
						width: 60
					};
				case ColumnType.Anchor:
					return {
						title: header,
						render: (cell: DisplayTableCell, record: DisplayTableColumn) => (
							<AnchorLink href={cell.value} target="_blank" title={cell.value}>
								{cell.value}
							</AnchorLink>
						),
						dataIndex: `col_${i}`,
						key: `col_${i}`
					};
				default:
					return {
						title: header,
						dataIndex: `col_${i}`,
						key: `col_${i}`,
						render: (cell: DisplayTableCell, row: Record<string, any>) =>
							row.del ? (
								<RedText dangerouslySetInnerHTML={{ __html: cell.value }} />
							) : (
								<BlackText dangerouslySetInnerHTML={{ __html: cell.value }} />
							)
					};
			}
		});
	}
}

export { getColumns };
