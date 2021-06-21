import React, { FC, MouseEvent, useRef } from 'react';
import Popover from 'antd/lib/popover';
import { helper } from '@src/utils/helper';
import { Picture } from './AlbumPictureProp';
import PictureTip from './PictureTip';
import { LiItem } from './StyleBox';

interface PictureItemProp {
	/**
	 * 照片数据
	 */
	data: Picture;
	/**
	 * Click回调
	 */
	pictureClick: (src: string, srcExport: string) => void;
}

/**
 * 渲染legend标签
 * @param label 标签文字
 * @returns
 */
const SimilarLabel: FC<{}> = (props) =>
	helper.isNullOrUndefinedOrEmptyString(props.children) ? null : (
		<legend>{props.children}</legend>
	);

/**
 * 相册组件
 */
const PictureItem: FC<PictureItemProp> = (props) => {
	const { data, pictureClick } = props;
	const { src, src_export, tips } = data;

	const imgRef = useRef<HTMLImageElement>(null);

	const onClick = (event: MouseEvent<HTMLElement>) => {
		event.stopPropagation();
		if (imgRef.current) {
			pictureClick(src, src_export);
		}
	};

	if (tips && tips.length > 0) {
		return (
			<LiItem onClick={onClick}>
				<fieldset style={{ marginTop: data.label ? '0' : '10px' }}>
					<SimilarLabel>{data.label}</SimilarLabel>
					<Popover content={<PictureTip data={tips ?? []} />} placement="top">
						<div style={{ marginTop: data.label ? '0' : '15px' }}>
							<img
								onClick={onClick}
								ref={imgRef}
								src={src}
								alt={src}
								data-has="0"
								onError={(e) => {
									//error事件加载备用图片
									const { has } = (e.target as any).dataset;
									if (has === '0') {
										(e.target as any).setAttribute('data-has', '1');
										(e.target as any).src = src_export;
									}
								}}
							/>
						</div>
					</Popover>
				</fieldset>
			</LiItem>
		);
	} else {
		return (
			<LiItem onClick={onClick}>
				<fieldset>
					<SimilarLabel>{data.label}</SimilarLabel>
					<div>
						<img
							onClick={onClick}
							ref={imgRef}
							src={src}
							alt={src}
							data-has="0"
							onError={(e) => {
								//error事件加载备用图片
								const { has } = (e.target as any).dataset;
								if (has === '0') {
									(e.target as any).setAttribute('data-has', '1');
									(e.target as any).src = src_export;
								}
							}}
						/>
					</div>
				</fieldset>
			</LiItem>
		);
	}
};

export { PictureItem };
