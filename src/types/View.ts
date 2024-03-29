import { ChatType } from "@src/components/ChatList/componentTypes";

/**
 * 删除标记
 */
enum DelType {
    /**
     * 正常
     */
    Normal,
    /**
     * 删除
     */
    Del,
    /**
     * 撤回
     */
    Recall
}

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
    List = 'list',
    /**
     * 相册类
     */
    Album = 'album',
    /**
     * 饼状图类
     */
    Pie = 'pie',
    /**
     * 柱状图类
     */
    Bar = 'bar'
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
    File = 'file',
    /**
     * 链接
     */
    Anchor = 'anchor'
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

/**
 * 行类型
 */
interface PageRow {
    /**
     * ID
     */
    id: string,
    /**
     * 昵称
     */
    nickname: string,
    /**
     * 头像
     */
    avatar: string,
    /**
     * 内容
     */
    content: string,
    /**
     * 类型
     */
    type: ChatType,
    /**
     * 时间
     */
    time: string,
    /**
     * 是发送
     */
    send: boolean,
    /**
     * 已删除
     */
    del: boolean
}

export { DelType, ViewData, ViewType, ColumnType, PageRow, BaseView };