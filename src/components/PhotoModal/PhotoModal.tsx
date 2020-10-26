import $ from 'jquery';
import React, { FC, memo, MouseEvent, useEffect, useRef } from 'react';
import Button from 'antd/lib/button';
import Modal from 'antd/lib/modal';
import { PhotoBox } from './ModalStyled';

interface Prop {
	/**
	 * 照片文件路径
	 */
	src: string;
	/**
	 * 备用图片路径（导出后）
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
 * 照片弹框
 */
const PhotoModal: FC<Prop> = (props) => {
	const imgRef = useRef<any>();

	useEffect(() => {
		$('[data-has]').each((i: number, element: any) => {
			$(element).attr('data-has', '0');
		});
	}, [props.visible]);

	const cancelHandle = (event: MouseEvent<HTMLElement>) => {
		props.closeHandle!();
	};

	const exportHandle = (event: MouseEvent<HTMLElement>) => {
		const { has } = imgRef.current?.dataset as any;
		if (has === '1') {
			window.open(props.exportSrc);
		} else {
			window.open(props.src);
		}
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
					ref={imgRef}
					src={props.src}
					data-has="0"
					onError={(e) => {
						//error事件加载备用图片
						const { has } = (e.target as any).dataset;
						if (has === '0') {
							(e.target as any).setAttribute('data-has', '1');
							(e.target as any).src = props.exportSrc;
						}
					}}
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
