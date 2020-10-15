import { DisplayTableCell } from './types';

/**
 * 处理表格数据
 * @param data 表格数据
 */
function getDataSource(data: Array<DisplayTableCell[]>) {
	let results: any[] = [];

	for (let i = 0; i < data.length; i++) {
		let row = data[i].reduce((prev: any, current: DisplayTableCell, index) => {
			prev[`col_${index}`] = current;
			return prev;
		}, {});

		//若第一列有del标识，则标记为删除行（红色显示）
		if (data[i][0].del) {
			row['del'] = true;
		} else {
			row['del'] = false;
		}

		results.push(row);
		results[i]._id = `R_${i}`;
	}
	return results;
}

export { getDataSource };
