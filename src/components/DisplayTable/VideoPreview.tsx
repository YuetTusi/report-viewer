import React, { FC, useRef } from 'react';
import { DisplayTableCell } from './types';

interface Prop {
	data: DisplayTableCell;
	openHandle: () => void;
}

/**
 * 视频预览
 * @param props
 */
const VideoPreview: FC<Prop> = (props) => {
	const videoRef = useRef<any>();

	// const openHandle = () => {
	// 	const { has } = videoRef.current.dataset as any;
	// 	if (has === '1') {
	// 		window.open(props.data.value_export);
	// 	} else {
	// 		window.open(props.data.value);
	// 	}
	// };

	return (
		<video
			style={{ maxWidth: '220px', maxHeight: '220px' }}
			ref={videoRef}
			src={props.data.value}
			controls={true}
			data-has="0"
			onClick={() => props.openHandle()}
			onError={(e) => {
				//error事件加载备用文件
				const { has } = (e.target as any).dataset;
				if (has === '0') {
					(e.target as any).setAttribute('data-has', '1');
					(e.target as any).src = props.data.value_export;
				}
			}}
		/>
	);
};

export default VideoPreview;
