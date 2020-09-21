import React, { FC, useState } from 'react';
import Button from 'antd/lib/button';
import Icon from 'antd/lib/icon';
import Empty from 'antd/lib/empty';
// import Pagination from 'antd/lib/pagination';
import Tag from 'antd/lib/tag';
import RedBag from './RedBag';
import Transfer from './Transfer';
import AttachFile from './AttachFile';
import { ListRoot, ListRow, Reply, Send, Message } from './ListStyled';
import { ChatData, ChatType, Prop } from './componentTypes';
import { helper } from '@src/utils/helper';

const defaultPageSize = 20; //默认分页尺寸

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
		setCurrent(page);
	};

	/**
	 * 渲染聊天内容
	 */
	const renderContent = (record: ChatData) => {
		switch (record?.type) {
			case ChatType.Text:
				return <div className="talk">{record.content}</div>;
			case ChatType.Audio:
				return (
					<div className="talk">
						<audio src={record.content} controls={true} />
					</div>
				);
			case ChatType.Video:
				return (
					<div className="talk">
						<label htmlFor="videoPlayButton">视频：</label>
						<Button
							onClick={() => props.videoHandle(record.content)}
							name="videoPlayButton"
							type="primary">
							<Icon type="play-circle" />
						</Button>
					</div>
				);
			case ChatType.Photo:
				return (
					<div className="talk">
						<img
							onClick={() => props.photoHandle(record.content)}
							src={record.content}
							alt={record.content}
						/>
					</div>
				);
			case ChatType.Reward:
				return (
					<div className="talk">
						<RedBag msg={record.content} />
					</div>
				);
			case ChatType.Transfer:
				return (
					<div className="talk">
						<Transfer msg={record.content} />
					</div>
				);
			case ChatType.File:
				return (
					<div className="talk">
						<AttachFile msg={record.content} />
					</div>
				);
			default:
				return <div className="talk">{record.content}</div>;
		}
	};

	/**
	 * 渲染聊天记录
	 * @param {ChatData[]} row 聊天数据
	 */
	const renderList = (row: ChatData[], pageIndex: number, pageSize: number = defaultPageSize) => {
		return (
			row
				// .slice((pageIndex - 1) * pageSize, (pageIndex - 1) * pageSize + pageSize) //不启用分页，需要时放开
				.map((item, i) => {
					if (item.type === ChatType.Message) {
						return (
							<ListRow key={`chat_${i}`}>
								<Message>
									<p>{item.content}</p>
									<div className="other">
										<time>{item.time}</time>
										{item?.del ? <del>已删除</del> : null}
									</div>
								</Message>
							</ListRow>
						);
					} else if (item.send) {
						return (
							<ListRow key={`chat_${i}`}>
								<Reply>
									<img src={item.avatar} className="avatar" />
									<div className="text-box">
										<div className="user-name">
											<span>{item.nickname}</span>
											<em>({item.id})</em>
										</div>
										{renderContent(item)}
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
										{renderContent(item)}
										<time>{item.time}</time>
									</div>
									{item.del ? <Tag color="red">已删除</Tag> : null}
								</Send>
							</ListRow>
						);
					}
				})
		);
	};

	if (helper.isNullOrUndefinedOrEmptyArray(data)) {
		return (
			<div>
				<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
			</div>
		);
	} else {
		return (
			<>
				<ListRoot>{renderList(data, current, defaultPageSize)}</ListRoot>
				{/* <PageBox>
					<Pagination
						onChange={pageChange}
						current={current}
						pageSize={defaultPageSize}
						total={data.length}
						size="small"
					/>
				</PageBox> */}
			</>
		);
	}
};

export default ChatList;
