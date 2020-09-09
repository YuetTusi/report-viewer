import { useJsonData } from '@src/hooks';

function usePage3Data() {

    const [data, setData] = useJsonData<any>('public/data/page3.json', 'data');

    return { data, setData };
}

export { usePage3Data };