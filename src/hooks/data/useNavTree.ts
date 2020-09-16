import { useJsonData } from '../useJsonData';
import { TreeNode } from '@src/components/NavTree';

/**
 * 树容器数据
 */
function useNavTree() {

    const [data, setData] = useJsonData<TreeNode[]>('public/data/tree.json', 'data');

    return { data, setData };
}

export { useNavTree };