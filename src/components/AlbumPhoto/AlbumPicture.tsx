import React, { FC } from 'react';
import Empty from 'antd/lib/empty';
import Pagination from 'antd/lib/pagination';
import { PictureItem } from './PictureItem';
import { PictureList } from './StyleBox';
import { AlbumPictureProp } from './AlbumPictureProp';
import { PageBox } from '../DisplayTable/TableStyled';

/**
 * 相册组件
 */
const AlbumPicture: FC<AlbumPictureProp> = (props) => {
	const { data, pageIndex, pageSize, pageCount, pictureClick } = props;

	/**
	 * 翻页Change事件
	 * @param page 页号
	 * @param pageSize 分页尺寸
	 */
	const pageChange = (page: number, pageSize?: number) => {
		const { pageChange } = props;
		pageChange(page, pageSize);
	};

	const renderItem = () =>
		data.map((item) => <PictureItem pictureClick={pictureClick} data={item} key={item.src} />);

	return (
		<>
			<PageBox className="top">
				<Pagination
					onChange={pageChange}
					current={pageIndex}
					pageSize={pageSize}
					total={pageSize * pageCount}
					size="small"
					showQuickJumper={true}
				/>
			</PageBox>
			<PictureList>{renderItem()}</PictureList>
			<PageBox className="bottom">
				<Pagination
					onChange={pageChange}
					current={pageIndex}
					pageSize={pageSize}
					total={pageSize * pageCount}
					size="small"
					showQuickJumper={true}
				/>
			</PageBox>
		</>
	);
};

export default AlbumPicture;
