
const helper = {

    /**
     * @description 是否是null或undefined
     * @param val 任意值
     */
    isNullOrUndefined(val: any): boolean {
        if (Object.prototype.toString.call(val) === '[object Undefined]' ||
            Object.prototype.toString.call(val) === '[object Null]') {
            return true;
        } else {
            return false;
        }
    },
    /**
     * @description 是否是null或undefined或空串
     * @param val 任意值
     */
    isNullOrUndefinedOrEmptyString(val: any): boolean {
        if (Object.prototype.toString.call(val) === '[object Undefined]' ||
            Object.prototype.toString.call(val) === '[object Null]' ||
            val == '') {
            return true;
        } else {
            return false;
        }
    },
    /**
     * @description 是否是null或undefined或空数组
     * @param val 任意值
     */
    isNullOrUndefinedOrEmptyArray(val: any): boolean {
        if (Object.prototype.toString.call(val) === '[object Undefined]' ||
            Object.prototype.toString.call(val) === '[object Null]' ||
            val.length === 0) {
            return true;
        } else {
            return false;
        }
    },
    /**
     * 加载本地JSON文件
     * @param filePath 文件路径
     * @param exportName 导出变量名称
     */
    loadJSON<T>(filePath: string, exportName: string): Promise<T> {
        let $script = document.createElement('script');
        return new Promise((resolve, reject) => {
            $script.src = filePath;
            $script.addEventListener('load', () => {
                document.body.removeChild($script);
                resolve((window as any)[exportName]);
            });
            $script.addEventListener('error', (event) => {
                document.body.removeChild($script);
                reject(event);
            });
            document.body.appendChild($script);
        });
    }
}

export { helper };