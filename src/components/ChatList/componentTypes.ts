enum ChatType {
    /**
     * 文本消息
     */
    Text = 'text',
    /**
     * 语音消息
     */
    Audio = 'audio',
    /**
     * 视频消息
     */
    Video = 'video',
    /**
     * 图片消息
     */
    Photo = 'photo',
    /**
     * 红包
     */
    Reward = 'reward',
    /**
     * 文件
     */
    File = 'file'
}

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
     * 消息类型
     */
    type: ChatType,
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
    data: ChatData[],
    /**
     * 打开照片handle
     */
    photoHandle: (src: string) => void,
    /**
     * 打开视频handle
     */
    videoHandle: (src: string) => void
}

export { Prop, ChatData, ChatType };