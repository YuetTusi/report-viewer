import React, { FC } from 'react';
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
	return (
		<Modal
			visible={props.visible}
			onCancel={props.closeHandle}
			footer={[
				<Button type="default" onClick={props.closeHandle} key="F_0">
					关闭
				</Button>,
			]}
			width={800}
			title="视频"
		>
			<VideoBox>
				<video src={props.src} controls={true} style={{height:'60vh'}}></video>
			</VideoBox>
		</Modal>
	);
};

VideoModal.defaultProps = {
	visible: true,
	src: 'public/',
	closeHandle: () => {},
};

export default VideoModal;
