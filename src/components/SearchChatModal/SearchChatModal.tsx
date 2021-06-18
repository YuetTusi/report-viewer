import React, { FC, MouseEvent, useState } from 'react';
import Button from 'antd/lib/button';
import Empty from 'antd/lib/empty';
import Table from 'antd/lib/table';
import Modal from 'antd/lib/modal';
import { KeywordMark } from './SearchChatModalStyle';
import { SearchChatModalProps } from './SearchChatModalProps';

const SearchChatModal: FC<SearchChatModalProps> = (props) => {
	const { data, visibile, onClose, onGo } = props;
	const [pageIndex, setPageIndex] = useState(1);

	return (
		<Modal
			footer={[
				<Button type="default" onClick={onClose} icon="close-circle" key="B_1">
					关闭
				</Button>
			]}
			onCancel={onClose}
			width={690}
			visible={visibile}
			title="记录搜索"
			maskClosable={false}
			destroyOnClose={true}
			className="search-chat-modal-root">
			<Table
				columns={[
					{
						title: '搜索内容',
						key: 'chat',
						dataIndex: 'chat',
						render(value) {
							return <KeywordMark dangerouslySetInnerHTML={{ __html: value }} />;
						}
					},
					{
						title: '位置',
						key: 'pageIndex',
						dataIndex: 'pageIndex',
						width: 80,
						align: 'center',
						render(value: number) {
							return (
								<a onClick={(e: MouseEvent<HTMLAnchorElement>) => onGo(value)}>
									第{value}页
								</a>
							);
						}
					}
				]}
				pagination={{
					total: data.length,
					current: pageIndex,
					pageSize: 5,
					onChange(page: number) {
						setPageIndex(page);
					}
				}}
				dataSource={data}
				bordered={true}
				rowKey={(record, index) => `R_${index}`}
				locale={{
					emptyText: (
						<Empty description="未找到搜索记录" image={Empty.PRESENTED_IMAGE_SIMPLE} />
					)
				}}
				size="small"></Table>
		</Modal>
	);
};

SearchChatModal.defaultProps = {
	visibile: false,
	data: []
};

export default SearchChatModal;
