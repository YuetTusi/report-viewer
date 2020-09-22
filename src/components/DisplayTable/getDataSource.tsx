import { DisplayTableCell } from './types';

function getDataSource(data: Array<DisplayTableCell[]>) {
	let results: any[] = [];

	for (let i = 0; i < data.length; i++) {
		let row = data[i].reduce((prev: any, current: DisplayTableCell, index) => {
			prev[`col_${index}`] = current.value;
			return prev;
		}, {});

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
