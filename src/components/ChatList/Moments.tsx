import React, { FC } from 'react';
import Icon from 'antd/lib/icon';
import styled from 'styled-components';
import { helper } from '@src/utils/helper';

interface Prop {
	data: any;
}

const MomentsRoot = styled.div`
	display: flex;
	flex-direction: column;
	width: 300px;
	box-sizing: border-box;

	.moments-content {
		color: #222;
		padding-bottom: 5px;
		border-bottom: 1px solid #efefef;
		a {
			cursor: pointer;
			text-decoration: underline;
		}
	}
	.moments-media {
		padding-top: 5px;
		padding-bottom: 5px;
		border-bottom: 1px solid #efefef;
		&:empty {
			border-bottom: none;
			padding: 0;
		}
		.inner {
			position: static;
			width: 270px;
			margin: 0 auto;
			img {
				width: 80px;
				max-height: 80px;
				margin: 5px;
			}
		}
	}
	.moments-locate {
		color: #3d4c5a;
		font-size: 1.2rem;
		border-bottom: 1px solid #efefef;
		&:empty {
			border-bottom: none;
		}
		.inner {
			padding-top: 5px;
			padding-bottom: 5px;
			span {
				margin-left: 5px;
			}
		}
	}
	.moments-remind {
		font-size: 1.2rem;
		border-bottom: 1px solid #efefef;
		&:empty {
			border-bottom: none;
		}
		.inner {
			padding-top: 5px;
			padding-bottom: 5px;
			span {
				color: #3d4c5a;
			}
		}
	}
	.moments-like {
		padding-top: 5px;
		padding-bottom: 5px;
		border-bottom: 1px solid #efefef;
		&:empty {
			border-bottom: none;
			padding: 0;
		}
		.inner {
			span {
				color: #3d4c5a;
				font-weight: bold;
				margin-left: 5px;
			}
		}
	}
	.moments-comments {
		padding-top: 5px;
		padding-bottom: 5px;

		&:empty {
			padding: 0;
		}

		ul {
			margin: 0;
			padding: 0;
		}
		li {
			margin: 0;
			padding: 0;
			list-style-type: none;
			b {
				color: #3d4c5a;
				font-weight: bold;
			}
		}
	}
`;

/**
 * 朋友圈
 */
const Moments: FC<Prop> = (props) => {
	const { data } = props;

	/**
	 * 渲染朋友圈9宫格图
	 */
	const renderMedia = (media: any[]) => {
		if (helper.isNullOrUndefined(media)) {
			return null;
		} else {
			return (
				<div className="inner">
					{media.map((i, index) => (
						<img src={i} key={`M_${index}`} alt="" onClick={() => window.open(i)} />
					))}
				</div>
			);
		}
	};

	/**
	 * 渲染地理位置
	 */
	const renderLocate = (locate: any) => {
		if (helper.isNullOrUndefinedOrEmptyString(locate?.describe)) {
			return null;
		} else {
			return (
				<div className="inner">
					<Icon type="environment" />
					<span>{locate?.describe}</span>
				</div>
			);
		}
	};

	/**
	 * 渲染提及
	 */
	const renderRemind = (remind: any) => {
		if (helper.isNullOrUndefinedOrEmptyArray(remind)) {
			return null;
		} else {
			return (
				<div className="inner">
					提及了：<span>{remind.map((i: string) => `@${i}`).join(',')}</span>
				</div>
			);
		}
	};

	/**
	 * 点赞列表
	 */
	const renderLike = (like: any[]) => {
		if (helper.isNullOrUndefinedOrEmptyArray(like)) {
			return null;
		} else {
			return (
				<div className="inner">
					<Icon type="heart" />
					<span>{like.join(',')}</span>
				</div>
			);
		}
	};

	/**
	 * 返回评论关系的DOM
	 */
	const getNameRelation = (comment: any) => {
		if (helper.isNullOrUndefinedOrEmptyString(comment?.refusername)) {
			return <b>{comment?.username ?? comment?.nickname}：</b>;
		} else {
			return (
				<>
					<b>{comment?.username ?? comment?.nickname}</b> 回复{' '}
					<b>{comment?.refusername}：</b>
				</>
			);
		}
	};

	/**
	 * 评论列表
	 */
	const renderComments = (comments: any[]) => {
		if (helper.isNullOrUndefined(comments)) {
			return null;
		} else {
			return (
				<div className="inner">
					<ul>
						{comments.map((i, index) => (
							<li key={`C_${index}`}>
								<div>
									{getNameRelation(i)}
									<span>{i.content}</span>
								</div>
							</li>
						))}
					</ul>
				</div>
			);
		}
	};

	return (
		<MomentsRoot>
			<div className="moments-content">
				<div>{data.title ?? ''}</div>
				<span>{data.content}</span>
				{!helper.isNullOrUndefined(data?.url) ? (
					<a href={data.url} target="__blank">
						{data.url.substring(0, 20)}
					</a>
				) : null}
			</div>
			<div className="moments-media">{renderMedia(data.media)}</div>
			<div className="moments-locate">{renderLocate(data.locate)}</div>
			<div className="moments-remind">{renderRemind(data.remind)}</div>
			<div className="moments-like">{renderLike(data.like)}</div>
			<div className="moments-comments">{renderComments(data.comments)}</div>
		</MomentsRoot>
	);
};

export default Moments;
