import { useState } from 'react';
import { useJsonData } from '../useJsonData';
import { TreeNode } from '@src/components/NavTree';

/**
 * 树容器数据
 */
function useNavTree() {

    const [data, setData] = useJsonData<TreeNode[]>('public/data/tree.json', 'treeData');

    return { data, setData };
}

export { useNavTree };