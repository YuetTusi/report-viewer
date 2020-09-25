import React, { FC } from 'react';
import styled from 'styled-components';

interface Prop {
	/**
	 * 新闻数据
	 */
	data: any;
}

const WechatNewsPanel = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	margin: 0;
	padding: 0;
	border: 1px solid #d1d8dc;
	.major {
		display: block;
		position: relative;
		mark {
			display: block;
			position: absolute;
			background-color: rgba(34, 34, 34, 0.6);
			bottom: 0;
			left: 0;
			color: #fff;
		}
	}
	.subs {
		ul {
			margin: 0;
			padding: 0;
		}
		li {
			cursor: pointer;
			margin: 0;
			list-style-type: none;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			border-bottom: 1px solid #d1d8dc;

			&:last-child {
				border-bottom: none;
			}

			span {
				flex: 1;
				padding: 5px;
				max-width: fit-content;
			}
			img {
				flex: none;
				display: block;
				border: 1px solid #d1d8dc;
				margin: 5px;
				width: 80px;
				height: 80px;
			}
		}
	}
`;

/**
 * 公众号新闻
 */
const News: FC<Prop> = (props) => {
	const { data } = props;

	/**
	 * 渲染新闻列表
	 */
	const renderItems = (items: any[]) => {
		return items.map((item, i) => (
			<li key={`N_${i}`} onClick={() => window.open(item.url)}>
				<span>{item.title ?? ''}</span>
				<img src={item.cover} alt="" />
			</li>
		));
	};

	return (
		<WechatNewsPanel>
			<div className="major" onClick={() => window.open(data.item.url)}>
				<img src={data.item.cover} />
				<mark>{data.item.title ?? ''}</mark>
			</div>
			<div className="subs">
				<ul>{renderItems(data.newitem)}</ul>
			</div>
		</WechatNewsPanel>
	);
};

export default News;
