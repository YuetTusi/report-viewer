interface Prop {
    /**
     * 是否显示
     */
    visible: boolean,
    /**
     * 图片路径
     */
    src: string,
    /**
     * 备用图片文件路径
     */
    exportSrc: string,
    /**
     * 关闭handle
     */
    closeHandle: () => void
}

export { Prop }