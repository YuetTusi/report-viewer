import { useEffect } from 'react';

/**
 * 组件装载后
 * @param handle 
 */
function useMount(handle: Function) {
    useEffect(() => {
        handle();
    }, []);
}

export { useMount };