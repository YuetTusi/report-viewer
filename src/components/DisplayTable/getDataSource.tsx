import { DisplayTableCell } from './types';

function getDataSource(data: Array<DisplayTableCell[]>) {
	let results: any[] = [];

	for (let i = 0; i < data.length; i++) {
		results.push(
			data[i].reduce((prev: any, current: DisplayTableCell, index) => {
				prev[`col_${index}`] = current.value;
				return prev;
			}, {})
		);
		results[i]._id = `R_${i}`;
	}
	return results;
}

export { getDataSource };
