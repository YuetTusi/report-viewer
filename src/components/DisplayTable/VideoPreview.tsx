import React, { MouseEvent, FC, useRef } from 'react';
import Button from 'antd/lib/button';
import Icon from 'antd/lib/icon';
import { ExportPane } from './TableStyled';
import { DisplayTableCell } from './types';

interface Prop {
	/**
	 * 单元格数据
	 */
	data: DisplayTableCell;
	/**
	 * 打开视频框handle
	 */
	openHandle: () => void;
}

/**
 * 视频预览
 * @param props
 */
const VideoPreview: FC<Prop> = (props) => {
	const videoRef = useRef<any>();

	const exportHandle = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		window.open(videoRef.current?.src);
	};

	return (
		<ExportPane>
			<Button onClick={exportHandle} type="primary" size="small">
				<Icon type="export" />
			</Button>
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
		</ExportPane>
	);
};

export default VideoPreview;
