import { useState } from 'react';

/**
 * 设置加载中状态
 * @param initLoading 初始值
 */
function useLoading(initLoading: boolean = false) {

    const [loading, setLoading] = useState<boolean>(initLoading);

    return { loading, setLoading };
}

export { useLoading };