import React, { FC } from 'react';
import Empty from 'antd/lib/empty';
import Pagination from 'antd/lib/pagination';
import Tag from 'antd/lib/tag';
import RedBag from './RedBag';
import VideoPreview from './VideoPreview';
import Transfer from './Transfer';
import AttachFile from './AttachFile';
import News from './News';
import Moments from './Moments';
import { ListRoot, ListRow, Reply, Send, Message, PageBox } from './ListStyled';
import { ChatData, ChatType, Prop } from './componentTypes';
import { helper } from '@src/utils/helper';
import AudioCall from './AudioCall';
import VideoCall from './VideoCall';
import Locate from './Locate';

/**
 * 聊天展示组件
 */
const ChatList: FC<Prop> = (props) => {
	const { data, pageIndex, pageSize, pageCount } = props;

	/**
	 * 翻页Change事件
	 * @param page 页号
	 * @param pageSize 分页尺寸
	 */
	const pageChange = (page: number, pageSize?: number) => {
		const { pageChangeHandle } = props;
		pageChangeHandle(page, pageSize!);
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
						<audio
							src={record.content}
							controls={true}
							data-has="0"
							onError={(e) => {
								//error事件加载备用图片
								const { has } = (e.target as any).dataset;
								if (has === '0') {
									(e.target as any).setAttribute('data-has', '1');
									(e.target as any).src = record.content_export;
								}
							}}
						/>
					</div>
				);
			case ChatType.Video:
				return (
					<div className="talk">
						<VideoPreview src={record.content} exportSrc={record.content_export} />
					</div>
				);
			case ChatType.Photo:
				return (
					<div className="talk">
						<img
							onClick={() => props.photoHandle(record.content, record.content_export)}
							src={record.content}
							data-has="0"
							onError={(e) => {
								//error事件加载备用图片
								const { has } = (e.target as any).dataset;
								if (has === '0') {
									(e.target as any).setAttribute('data-has', '1');
									(e.target as any).src = record.content_export;
								}
							}}
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
			case ChatType.AudioCall:
				return (
					<div className="talk">
						<AudioCall />
					</div>
				);
			case ChatType.VideoCall:
				return (
					<div className="talk">
						<VideoCall />
					</div>
				);
			case ChatType.News:
				return (
					<div className="talk">
						<News data={record.content} />
					</div>
				);
			case ChatType.Moments:
				return (
					<div className="talk">
						<Moments data={record.content} />
					</div>
				);
			case ChatType.Locate:
				return <Locate>{record.content}</Locate>;
			default:
				return <div className="talk">{record.content}</div>;
		}
	};

	/**
	 * 渲染聊天记录
	 * @param {ChatData[]} row 聊天数据
	 */
	const renderList = (row: ChatData[], pageIndex: number, pageSize: number) => {
		return row.map((item, i) => {
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
							<img
								src={item.avatar}
								className="avatar"
								data-has="0"
								onError={(e) => {
									//error事件加载备用图片
									const { has } = (e.target as any).dataset;
									if (has === '0') {
										(e.target as any).setAttribute('data-has', '1');
										(e.target as any).src = item.avatar_export;
									}
								}}
							/>
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
							<img
								src={item.avatar}
								className="avatar"
								data-has="0"
								onError={(e) => {
									//error事件加载备用图片
									const { has } = (e.target as any).dataset;
									if (has === '0') {
										(e.target as any).setAttribute('data-has', '1');
										(e.target as any).src = item.avatar_export;
									}
								}}
							/>
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
		});
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
				<PageBox className="top">
					<Pagination
						onChange={pageChange}
						current={pageIndex}
						pageSize={pageSize}
						total={pageSize * pageCount}
						size="small"
					/>
				</PageBox>
				<ListRoot>{renderList(data, pageIndex, pageSize)}</ListRoot>
				<PageBox className="bottom">
					<Pagination
						onChange={pageChange}
						current={pageIndex}
						pageSize={pageSize}
						total={pageSize * pageCount}
						size="small"
					/>
				</PageBox>
			</>
		);
	}
};

export default ChatList;
