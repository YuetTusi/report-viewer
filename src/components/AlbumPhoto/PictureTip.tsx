import React, { FC } from 'react';
import { PictureTip } from './AlbumPictureProp';
import { TipList } from './StyleBox';

const PictureTip: FC<{ data: PictureTip[] }> = (props) => {
	/**
	 * 渲染Tip项
	 */
	const renderTips = () =>
		props.data.map((item, i) => (
			<li key={`T_${i}`}>
				<label>{item.name}</label>
				<span>{item.value}</span>
			</li>
		));
	return <TipList>{renderTips()}</TipList>;
};

export default PictureTip;
