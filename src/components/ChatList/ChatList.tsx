import React, { FC } from 'react';
import { ListRoot, ListRow, Reply, Send } from './ListStyled';
import { Prop } from './componentTypes';

/**
 * 聊天展示组件
 */
const ChatList: FC<Prop> = (props) => {
	return (
		<ListRoot>
			<ListRow>
				<Send>
					<img src="public/images/photo/default_avatar.jpg" className="avatar" />
					<div className="text-box">
						<div className="user-name">
							妄念<em>(12345)</em>
						</div>
						<div className="talk">
							聊天内容，聊天内容，聊天内容，聊天内容，聊天内容，聊天内容，聊天内容，聊天内容，聊天内容，聊天内容，聊天内容聊天内容，聊天内容，聊天内容，聊天内容，聊天内容，聊天内容，聊天内容，聊天内容，聊天内容，聊天内容，聊天内容
						</div>
						<time>2010-01-01 10:00:23</time>
					</div>
				</Send>
			</ListRow>
			<ListRow>
				<Reply>
					<img src="public/images/photo/default_avatar.jpg" className="avatar" />
					<div className="text-box">
						<div className="user-name">
							妄念<em>(12345)</em>
						</div>
						<div className="talk">聊天内容</div>
						<time>2010-01-01 10:00:24</time>
					</div>
				</Reply>
			</ListRow>
			<ListRow>
				<Send>
					<img src="public/images/photo/default_avatar.jpg" className="avatar" />
					<div className="text-box">
						<div className="user-name">
							妄念<em>(12345)</em>
						</div>
						<div className="talk">聊天内容</div>
						<time>2010-01-01 10:00:23</time>
					</div>
				</Send>
			</ListRow>
			<ListRow>
				<Send>
					<img src="public/images/photo/default_avatar.jpg" className="avatar" />
					<div className="text-box">
						<div className="user-name">
							妄念<em>(12345)</em>
						</div>
						<div className="talk">聊天内容</div>
						<time>2010-01-01 10:00:23</time>
					</div>
				</Send>
			</ListRow>
		</ListRoot>
	);
};

export default ChatList;
