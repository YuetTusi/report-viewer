import NavTree from './NavTree';

/**
 * 树结点数据
 */
interface TreeNode {
    /**
     * 结点名称
     */
    name: string,
    /**
     * 结点图标
     */
    icon?: string,
    /**
     * 路由路径
     */
    path?: string,
    /**
     * 页面类型
     */
    type?: string,
    /**
     * 子结点
     */
    children: TreeNode[],
    /**
     * 未知属性
     */
    [props: string]: any
}

export { TreeNode };
export default NavTree;