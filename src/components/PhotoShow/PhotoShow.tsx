import $ from 'jquery';
import React, { useRef, useState, useEffect, memo, FC } from 'react';
import Icon from 'antd/lib/icon';
import { FullScreenMask } from './ComponentStyle';
import { Prop } from './componentTypes';

/**
 * 图片展示组件
 */
const PhotoShow: FC<Prop> = (props) => {
	const { visible, src, exportSrc, closeHandle } = props;
	const [arc, setArc] = useState<number>(0);
	const fileRef = useRef<any>();

	useEffect(() => {
		$('[data-has]').each((i: number, element: any) => {
			$(element).attr('data-has', '0');
		});
	}, [visible]);

	/**
	 * 图片旋转
	 * @param isAnti 是否是逆时针
	 */
	const rotateHandle = (isAnti: boolean) =>
		isAnti ? setArc((prev) => prev - 90) : setArc((prev) => prev + 90);

	/**
	 * 打开图片
	 * @param src 路径
	 */
	const openHandle = () => {
		const { has } = fileRef.current?.dataset as any;
		if (has === '1') {
			window.open(exportSrc);
		} else {
			window.open(src);
		}
	};

	return (
		<FullScreenMask
			style={{ display: visible ? 'flex' : 'none' }}
			data-fn="mask"
			onClick={(e: any) => {
				const { dataset } = e.target;
				if (dataset?.fn === 'mask') {
					setArc(0);
					closeHandle();
				}
			}}>
			<div className="fn-bar">
				<a onClick={() => openHandle()} title="导出图片">
					<Icon type="export" />
				</a>
				<a onClick={() => rotateHandle(true)} title="向左旋转">
					<Icon type="undo" />
				</a>
				<a onClick={() => rotateHandle(false)} title="向右旋转">
					<Icon type="redo" />
				</a>
				<a
					onClick={() => {
						setArc(0);
						closeHandle();
					}}
					title="关闭">
					<Icon type="close-circle" />
				</a>
			</div>
			<img
				ref={fileRef}
				style={{ transform: `rotate(${arc}deg)` }}
				src={src}
				onClick={() => openHandle()}
				alt="图片"
				data-has="0"
				onError={(e) => {
					//error事件加载备用图片
					const { has } = (e.target as any).dataset;
					if (has === '0') {
						(e.target as any).setAttribute('data-has', '1');
						(e.target as any).src = props.exportSrc;
					}
				}}
			/>
		</FullScreenMask>
	);
};

export default memo(PhotoShow);
