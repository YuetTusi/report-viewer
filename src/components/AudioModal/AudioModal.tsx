import React, { FC, memo, MouseEvent, SyntheticEvent, useRef } from 'react';
import Button from 'antd/lib/button';
import Modal from 'antd/lib/modal';
import message from 'antd/lib/message';
import { AudioBox } from './ModalStyled';

interface Prop {
	/**
	 * 音频文件路径
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
 * 音频播放弹框
 */
const AudioModal: FC<Prop> = (props) => {
	const fileRef = useRef<HTMLAudioElement | null>(null);

	const cancelHandle = (event: MouseEvent<HTMLElement>) => {
		fileRef.current!.pause();
		props.closeHandle!();
	};

	const exportHandle = (event: MouseEvent<HTMLElement>) => {
		window.open(props.src);
	};

	const videoCanPlay = (event: SyntheticEvent<HTMLAudioElement>) => {};

	const loadError = (event: SyntheticEvent<HTMLAudioElement>) => {
		message.error('音频加载失败');
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
			width={600}
			maskClosable={false}
			title="音频">
			<AudioBox>
				<audio
					src={props.src}
					ref={fileRef}
					onCanPlay={videoCanPlay}
					onError={loadError}
					controls={true}
				/>
			</AudioBox>
		</Modal>
	);
};

AudioModal.defaultProps = {
	visible: true,
	src: 'public/',
	closeHandle: () => {}
};

export default memo(AudioModal);