import { useJsonData } from '../useJsonData';

interface RowData {
    id: string,
    col1: string,
    col2: string,
    col3: string
}

function usePage1Data() {

    const [data, setData] = useJsonData<RowData[]>('public/data/page1.json', 'data');

    return { data, setData };
}

export { usePage1Data, RowData };