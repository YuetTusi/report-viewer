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
     * 格式：/[路由名称]/[JSON文件名]
     * 举例：/wechat/04302532
     */
    path?: string,
    /**
     * 数据文件位置
     */
    dir?: string,
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