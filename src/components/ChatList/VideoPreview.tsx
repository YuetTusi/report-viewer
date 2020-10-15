import React, { FC, useRef } from 'react';
import Button from 'antd/lib/button';
import styled from 'styled-components';

interface Prop {
	/**
	 * 视频地址
	 */
	src: string;
	/**
	 * 备用视频地址（导出后）
	 */
	exportSrc: string;
}

const ButtonBar = styled.div`
	display: flex;
	flex-direction: row-reverse;
	margin: 5px 0;
`;

/**
 * 视频预览 
 */
const VideoPreview: FC<Prop> = (props) => {
	const videoRef = useRef<any>();

	const openHandle = () => {
		const { has } = videoRef.current.dataset as any;
		if (has === '1') {
			window.open(props.exportSrc);
		} else {
			window.open(props.src);
		}
	};

	return (
		<div>
			<ButtonBar>
				<Button
					onClick={openHandle}
					type="primary"
					size="small"
					icon="eye"></Button>
			</ButtonBar>
			<video
				ref={videoRef}
				src={props.src}
				controls={true}
				data-has="0"
				onError={(e) => {
					//error事件加载备用文件
					const { has } = (e.target as any).dataset;
					if (has === '0') {
						(e.target as any).setAttribute('data-has', '1');
						(e.target as any).src = props.exportSrc;
					}
				}}
				style={{ maxWidth: '580px', maxHeight: '500px' }}
			/>
		</div>
	);
};

export default VideoPreview;
