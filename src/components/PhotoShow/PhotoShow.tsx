import React, { useState, FC, SyntheticEvent } from 'react';
import Icon from 'antd/lib/icon';
import { FullScreenMask } from './ComponentStyle';
import { Prop } from './componentTypes';

/**
 * 打开图片
 * @param src 路径
 */
const openHandle = (src: string) => window.open(src);

/**
 * 图片展示组件
 */
const PhotoShow: FC<Prop> = (props) => {
	const { visible, src, closeHandle } = props;

	const [arc, setArc] = useState<number>(0);

	/**
	 * 旋转
	 * @param isAnti 是否是逆时针
	 */
	const rorateHandle = (isAnti: boolean) => {
		isAnti ? setArc((prev) => prev - 90) : setArc((prev) => prev + 90);
	};

	return (
		<FullScreenMask style={{ display: visible ? 'flex' : 'none' }}>
			<div className="fn-bar">
				<a onClick={() => openHandle(src)} title="导出图片">
					<Icon type="export" />
				</a>
				<a onClick={() => rorateHandle(true)} title="向左旋转">
					<Icon type="undo" />
				</a>
				<a onClick={() => rorateHandle(false)} title="向右旋转">
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
				style={{ transform: `rotate(${arc}deg)` }}
				src={src}
				onClick={() => openHandle(src)}
				alt="图片"
			/>
		</FullScreenMask>
	);
};

export default PhotoShow;
