import React, { FC, useState } from 'react';
import Empty from 'antd/lib/empty';
import Pagination from 'antd/lib/pagination';
import Tag from 'antd/lib/tag';
import { ListRoot, ListRow, Reply, Send, PageBox } from './ListStyled';
import { ChatData, Prop } from './componentTypes';
import { helper } from '@src/utils/helper';

const defaultPageSize = 10;

/**
 * 渲染聊天记录
 * @param {ChatData[]} records 聊天数据
 */
const renderList = (records: ChatData[], pageIndex: number, pageSize: number = defaultPageSize) => {
	return records
		.slice((pageIndex - 1) * pageSize, (pageIndex - 1) * pageSize + pageSize)
		.map((item, i) => {
			if (item.send) {
				return (
					<ListRow key={`chat_${i}`}>
						<Reply>
							<img src={item.avatar} className="avatar" />
							<div className="text-box">
								<div className="user-name">
									<span>{item.nickname}</span>
									<em>({item.id})</em>
								</div>
								<div className="talk">{item.content}</div>
								<time>{item.time}</time>
							</div>
							{item.del ? <Tag color="red">已删除</Tag> : null}
						</Reply>
					</ListRow>
				);
			} else {
				return (
					<ListRow key={`chat_${i}`}>
						<Send>
							<img src={item.avatar} className="avatar" />
							<div className="text-box">
								<div className="user-name">
									<span>{item.nickname}</span>
									<em>({item.id})</em>
								</div>
								<div className="talk">{item.content}</div>
								<time>{item.time}</time>
							</div>
							{item.del ? <Tag color="red">已删除</Tag> : null}
						</Send>
					</ListRow>
				);
			}
		});
};

/**
 * 聊天展示组件
 */
const ChatList: FC<Prop> = (props) => {
	const { data } = props;

	const [current, setCurrent] = useState<number>(1); //当前页

	/**
	 * 翻页Change事件
	 * @param page 页号
	 * @param pageSize 分页尺寸
	 */
	const pageChange = (page: number, pageSize?: number) => {
		console.log(page);
		setCurrent(page);
	};

	if (helper.isNullOrUndefinedOrEmptyArray(data)) {
		return (
			<div>
				<Empty />
			</div>
		);
	} else {
		return (
			<>
				<ListRoot>{renderList(data, current, defaultPageSize)}</ListRoot>
				<PageBox>
					<Pagination
						onChange={pageChange}
						current={current}
						pageSize={defaultPageSize}
						total={data.length}
						size="small"
					/>
				</PageBox>
			</>
		);
	}
};

export default ChatList;
