import { useState, useEffect } from 'react';
import { helper } from '@src/utils/helper';

/**
 * 读取JSON数据
 */
function useJsonData<T = any>(filePath: string, variableName: string): [T | undefined, (arg?: T) => void] {

    const [data, setData] = useState<T>();

    useEffect(() => {
        (async () => {
            let json = await helper.loadJSON<any>(filePath, variableName);
            setData(json);
        })();
    }, []);
    return [data, setData];
}

export { useJsonData };