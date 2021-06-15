interface SearchChatModalProps {

    /**
     * 是否显示
     */
    visibile: boolean,
    /**
     * 数据
     */
    data: any[],
    /**
     * 关闭handle
     */
    onClose: () => void,
    /**
     * 跳转handle
     */
    onGo: (pageIndex: number) => void
}

export { SearchChatModalProps };