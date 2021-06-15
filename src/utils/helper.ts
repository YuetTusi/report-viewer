import { ChatType } from "@src/components/ChatList/componentTypes";
import { PageRow } from "@src/types/View";

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
    },
    /**
     * 根据文件名及总页数返回所有JSON文件名
     * @param firstPageName 首页的文件名
     * @param pageSize 总页数
     */
    getAllPageNames(firstPageName: string, pageSize: number = 1) {
        let allPages: string[] = [];
        const [md5] = firstPageName.split('-');
        for (let i = 1; i <= pageSize; i++) {
            allPages = allPages.concat(`${md5}-${i}`);
        }
        return allPages;
    },
    /**
     * 返回查找到的聊天记录和记录所在的页码
     * @param data 所有页数据
     * @param keyword 查找关键字
     */
    getFoundChatAndPageIndex(data: any[], keyword: string) {

        let rec: any[] = [];
        const reg = new RegExp(keyword);

        for (let i = 0, p = data.length; i < p; i++) {
            const { row } = data[i] as { row: PageRow[] };
            for (let j = 0, len = row.length; j < len; j++) {
                const { type, content } = row[j];
                if (type === ChatType.Text && typeof content === 'string' && content.includes(keyword)) {
                    rec = rec.concat([{ chat: row[j].content.replace(reg, `<b>${keyword}</b>`), pageIndex: i + 1 }]);
                    // rec = rec.concat([{ chat: row[j].content, pageIndex: i + 1 }]);
                }
            }
        }

        return rec;
    },
    /**
     * 得到随机值
     * @returns 8位随机数
     */
    rnd() {
        return Math.trunc(Math.random() * 100000000);
    },
    /**
     * 解析URL返回?参数
     * @param name 参数名
     * @returns 参数值
     */
    parseURLSearch(search: string, name: string) {
        if (window.URLSearchParams !== undefined) {
            return new URLSearchParams(search).get(name);
        }

        if (search.startsWith('?')) {
            search = search.substring(1);
        }
        const kv = search.split('&');
        let value: string | null = null;
        for (let i = 0; i < kv.length; i++) {
            const [k, v] = kv[i].split('=');
            if (k === name) {
                value = v;
                break;
            }
        }
        return value;
    }
}

export { helper };