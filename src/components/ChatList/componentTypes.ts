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
     * 转帐
     */
    Transfer = 'transfer',
    /**
     * 文件
     */
    File = 'file',
    /**
     * 系统消息
     */
    Message = 'message',
    /**
     * 语音通话
     */
    AudioCall = 'audio_call',
    /**
     * 视频通话
     */
    VideoCall = 'video_call',
    /**
     * 公众号新闻
     */
    News = 'news'
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
    content: any,
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
     * 页码
     */
    pageIndex: number,
    /**
     * 分页尺寸
     */
    pageSize: number,
    /**
     * 总分页数
     */
    pageCount: number,
    /**
     * 换页Handle
     */
    pageChangeHandle: (pageIndex: number, pageSize: number) => void,
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