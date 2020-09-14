import React, { FC, memo, MouseEvent, SyntheticEvent, useRef } from 'react';
import Button from 'antd/lib/button';
import Modal from 'antd/lib/modal';
import { VideoBox } from './ModalStyled';

interface Prop {
	/**
	 * 视频文件路径
	 */
	src: string;
	/**
	 * 是否显示
	 */
	visible: boolean;
	/**
	 * 关闭handle
	 */
	closeHandle?: () => void;
}

/**
 * 视频播放弹框
 */
const VideoModal: FC<Prop> = (props) => {
	const videoRef = useRef<any>();

	console.log('render...');

	const cancelHandle = (event: MouseEvent<HTMLElement>) => {
		videoRef.current.pause();
		props.closeHandle!();
	};

	const exportHandle = (event: MouseEvent<HTMLElement>) => {
		window.open(props.src);
	};

	return (
		<Modal
			visible={props.visible}
			onCancel={cancelHandle}
			footer={[
				<Button type="primary" onClick={exportHandle} key="B_0">
					导出
				</Button>,
				<Button type="default" onClick={cancelHandle} key="B_1">
					关闭
				</Button>
			]}
			width={820}
			maskClosable={false}
			title="视频">
			<VideoBox>
				<video
					src={props.src}
					ref={videoRef}
					controls={true}
					style={{ maxWidth: '800px', maxHeight: '550px' }}></video>
			</VideoBox>
		</Modal>
	);
};

VideoModal.defaultProps = {
	visible: true,
	src: 'public/',
	closeHandle: () => {}
};

export default memo(VideoModal);
