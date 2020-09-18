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
    Chat = 'chat',
    /**
     * 列表类（纵表）
     */
    List = 'list'
}

/**
 * 列类型
 */
enum ColumnType {
    /**
     * 文本
     */
    Text = 'text',
    /**
     * 视频
     */
    Video = 'video',
    /**
     * 音频
     */
    Audio = 'audio',
    /**
     * 照片
     */
    Photo = 'photo',
    /**
     * 预览
     */
    Preview = 'preview',
    /**
     * 文件
     */
    File = 'file'
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

/**
 * 视图页基类型
 */
interface BaseView {
    /**
     * 数据文件路径
     * 此属性会由树结点上的dir属性传入
     * 后续版本可能由树数据中定义JSON文件路径
     * 需由此目录拼接JSON文件名
     */
    dataFilePath?: string
}

export { ViewData, ViewType, ColumnType, BaseView };