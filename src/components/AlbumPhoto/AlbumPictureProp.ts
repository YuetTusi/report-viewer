interface AlbumPictureProp {
    /**
     * 相册数据
     */
    data: Picture[],
    /**
     * 当前页码
     */
    pageIndex: number,
    /**
     * 分页尺寸
     */
    pageSize: number,
    /**
     * 数量
     */
    pageCount: number,
    /**
     * 总记录数
     */
    total: number,
    /**
     * 照片click
     */
    pictureClick: (src: string, srcExport: string) => void,
    /**
     * 翻页Change
     */
    pageChange: (page: number, pageSize?: number) => void
}

interface Picture {
    /**
     * 照片路径
     */
    src: string,
    /**
     * 照片路径（导出）
     */
    src_export: string,
    /**
     * 标签文本
     */
    label: string,
    /**
     * 提示文案
     */
    tips: PictureTip[]
}

interface PictureTip {
    /**
     * 名称
     */
    name: string,
    /**
     * 值
     */
    value: string
}

export { AlbumPictureProp, Picture, PictureTip };