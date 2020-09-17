/**
 * 聊天记录
 */
interface ChatData {
    /**
     * 用户ID
     */
    id: string,
    /**
     * 昵称
     */
    nickname: string,
    /**
     * 头像路径
     */
    avatar: string,
    /**
     * 聊天内容
     */
    content: string,
    /**
     * 时间
     */
    time: string,
    /**
     * 是否为发送消息（false为接收）
     */
    send: boolean,
    /**
     * 是否已删除
     */
    del: boolean
}

/**
 * 组件属性
 */
interface Prop {
    /**
     * 聊天记录
     */
    data: ChatData[]
}

export { Prop, ChatData };