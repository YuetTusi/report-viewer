import React, { FC, MouseEvent, useRef } from 'react';
import Popover from 'antd/lib/popover';
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
			<Popover content={<PictureTip data={tips ?? []} />} placement="top">
				<LiItem onClick={onClick}>
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
				</LiItem>
			</Popover>
		);
	} else {
		return (
			<LiItem onClick={onClick}>
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
			</LiItem>
		);
	}
};

export { PictureItem };
