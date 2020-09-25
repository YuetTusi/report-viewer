import React, { FC } from 'react';
import Icon from 'antd/lib/icon';
import styled from 'styled-components';

interface Prop {
	/**
	 * 消息
	 */
	msg?: string;
}

const CallBox = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	color: #3d4c5a;
	padding: 10px;
	background-color: #efefef;

	.left-ico {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 2rem;
		background-color: #01c0c8;
		padding: 10px 8px;
		border-radius: 5px;
		color: #fff;
		font-weight: bold;
	}
	.msg {
		padding: 0 20px;

		span {
			font-style: normal;
		}
	}
`;

/**
 * 视频通话
 */
const VideoCall: FC<Prop> = (props) => {
	return (
		<CallBox>
			<div className="left-ico">
				<Icon type="video-camera" />
			</div>
			<div className="msg">
				<span>视频通话</span>
			</div>
		</CallBox>
	);
};

VideoCall.defaultProps = {
	msg: '文件'
};

export default VideoCall;
