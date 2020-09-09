import { useJsonData } from '@src/hooks';

function usePage2Data() {
    const [data, setData] = useJsonData('public/data/page2.json', 'data');
    return { data, setData };
}

export { usePage2Data };