
let _keyValue = 0;

const helper = {
    getKey(initalValue: number = 0) {
        _keyValue = initalValue;
        return `k_${_keyValue++}`;
    },
    /**
     * 
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
            document.body.appendChild($script);
        });
    }
}

export { helper };