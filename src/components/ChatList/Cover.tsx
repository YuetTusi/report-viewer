import React, { FC } from 'react';
import styled from 'styled-components';
import { ChatData } from './componentTypes';
import previewMaskPng from '@root/styles/images/preview-mask.png';

interface Prop {
	/**
	 * 聊天记录
	 */
	record: ChatData;
	/**
	 * 显示图片handle
	 */
	photoHandle: (content: string, contentExport: string) => void;
}

const PreviewMask = styled.div`
	position: relative;
	cursor: pointer;
	.inner-mask {
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		background-color: rgba(54, 54, 53, 0.5);
		img {
			position: absolute;
			max-width: 80%;
			max-height: 80%;
		}
	}
`;

/**
 * 视频综略图
 * @param props
 */
const Cover: FC<Prop> = (props) => {
	const { record } = props;
	return (
		<div className="talk">
			<PreviewMask onClick={() => props.photoHandle(record.content, record.content_export)}>
				<div className="inner-mask">
					<img src={previewMaskPng} />
				</div>
				<img
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
			</PreviewMask>
		</div>
	);
};

export default Cover;
