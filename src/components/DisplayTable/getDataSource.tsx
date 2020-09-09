function getDataSource(data: Array<string[]>) {
    let results: any[] = [];

    for (let i = 0; i < data.length; i++) {
        results.push(
            data[i].reduce((prev: any, current: string, index) => {
                prev[`col_${index}`] = current;
                return prev;
            }, {})
        );
        results[i]._id = `K_${i}`;
    }
    return results;
}

export { getDataSource };
