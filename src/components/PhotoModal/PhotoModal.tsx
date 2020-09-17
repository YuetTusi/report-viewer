import React, { FC, memo, MouseEvent, SyntheticEvent, useRef } from 'react';
import Button from 'antd/lib/button';
import Modal from 'antd/lib/modal';
import message from 'antd/lib/message';
import { PhotoBox } from './ModalStyled';

interface Prop {
	/**
	 * 照片文件路径
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
const PhotoModal: FC<Prop> = (props) => {
	const cancelHandle = (event: MouseEvent<HTMLElement>) => {
		props.closeHandle!();
	};

	const exportHandle = (event: MouseEvent<HTMLElement>) => {
		window.open(props.src);
	};

	const loadError = (event: SyntheticEvent<HTMLImageElement>) => {
		message.error('照片加载失败');
	};

	return (
		<Modal
			visible={props.visible}
			onCancel={cancelHandle}
			footer={[
				<Button type="primary" onClick={exportHandle} icon="download" key="B_0">
					导出
				</Button>,
				<Button type="default" onClick={cancelHandle} icon="close-circle" key="B_1">
					关闭
				</Button>
			]}
			width={850}
			maskClosable={false}
			title="照片">
			<PhotoBox>
				<img
					src={props.src}
					onError={loadError}
					alt="照片"
					style={{ maxWidth: '800px', maxHeight: '550px' }}
				/>
			</PhotoBox>
		</Modal>
	);
};

PhotoModal.defaultProps = {
	visible: true,
	src: 'public/',
	closeHandle: () => {}
};

export default memo(PhotoModal);
