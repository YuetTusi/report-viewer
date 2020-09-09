import { useState } from 'react';
import { useJsonData } from '../useJsonData';

/**
 * 树容器数据
 */
function useNavTree() {

    const [data, setData] = useJsonData<Record<string, any>[]>('public/data/tree.json', 'treeData');

    return { data, setData };
}

export { useNavTree };