/**
 * 页面类型枚举
 */
enum ViewType {
    /**
     * 表格类
     */
    Table = 'table',
    /**
     * 展示类
     */
    Display = 'display',
    /**
     * 聊天类
     */
    Chat = 'chat'
}



/**
 * 页面数据
 */
interface ViewData {
    /**
     * 页面标题
     */
    title: string,
    /**
     * 未知属性
     */
    [prop: string]: any
}

export { ViewData, ViewType };