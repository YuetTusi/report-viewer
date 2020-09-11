import { useState } from 'react';

/**
 * 强制渲染组件
 */
function useForceUpdate() {
    const [, forceUpdate] = useState(0);
    return () => forceUpdate((prev) => prev === 0 ? 1 : 0);
}

export { useForceUpdate };