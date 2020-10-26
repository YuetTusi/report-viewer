import $ from 'jquery';
import React, { FC, memo, MouseEvent, SyntheticEvent, useEffect, useRef } from 'react';
import Button from 'antd/lib/button';
import Modal from 'antd/lib/modal';
import message from 'antd/lib/message';
import { VideoBox } from './ModalStyled';

interface Prop {
	/**
	 * 视频文件路径
	 */
	src: string;
	/**
	 * 备用视频文件路径
	 */
	exportSrc: string;
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
	const videoRef = useRef<HTMLVideoElement | null>(null);

	useEffect(() => {
		$('[data-has]').each((i: number, element: any) => {
			$(element).attr('data-has', '0');
		});
	}, [props.visible]);

	const cancelHandle = (event: MouseEvent<HTMLElement>) => {
		videoRef.current!.pause();
		props.closeHandle!();
	};

	const exportHandle = (event: MouseEvent<HTMLElement>) => {
		const { has } = videoRef.current?.dataset as any;
		if (has === '1') {
			window.open(props.exportSrc);
		} else {
			window.open(props.src);
		}
	};

	const videoCanPlay = (event: SyntheticEvent<HTMLVideoElement>) => {
		console.log(event.currentTarget.videoHeight);
		console.log(event.currentTarget.videoWidth);
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
			title="视频">
			<VideoBox>
				<video
					src={props.src}
					ref={videoRef}
					onCanPlay={videoCanPlay}
					controls={true}
					data-has="0"
					onError={(e) => {
						//error事件加载备用文件
						const { has } = (e.target as any).dataset;
						if (has === '0') {
							(e.target as any).setAttribute('data-has', '1');
							(e.target as any).src = props.exportSrc;
						} else {
							message.error('视频加载失败');
						}
					}}
					style={{ maxWidth: '800px', maxHeight: '550px' }}
				/>
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
