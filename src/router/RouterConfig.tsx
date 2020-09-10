import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import NavTreeContainer from '@src/containers/NavTree';
import DataTable from '@src/view/DataTable';
import Chat from '@src/view/Chat';
import Display from '@src/view/Display';
import { TreeNode } from '@src/components/NavTree';
import { helper } from '@src/utils/helper';

let acc = 0; //计数

/**
 * 截取路径
 * @param pathWithParam 原带参数路径
 */
function subPath(pathWithParam: string) {
    const pos = pathWithParam.lastIndexOf('/');
    return pathWithParam.substring(0, pos);
}

/**
 * 递归树生成路由
 * @param {TreeNode[]} nodes 树结点集合
 */
function recurrenceRoute(nodes: TreeNode[]) {
    let routes: JSX.Element[] = [];

    if (helper.isNullOrUndefinedOrEmptyArray(nodes)) {
        return routes;
    }

    for (let i = 0, len = nodes.length; i < len; i++) {
        const { path, type, children } = nodes[i];
        if (path) {
            switch (type) {
                case 'display':
                    routes.push(
                        <Route
                            path={`${subPath(path)}/:file`}
                            component={Display}
                            key={`K_${i}_${acc++}`}
                        />
                    );
                    break;
                case 'chat':
                    routes.push(
                        <Route
                            path={`${subPath(path)}/:file`}
                            component={Chat}
                            key={`K_${i}_${acc++}`}
                        />
                    );
                    break;
                case 'table':
                    routes.push(
                        <Route
                            path={`${subPath(path)}/:file`}
                            component={DataTable}
                            key={`K_${i}_${acc++}`}
                        />
                    );
                    break;
            }
        }
        if (children && children.length > 0) {
            routes = routes.concat(recurrenceRoute(children));
        }
    }

    return routes;
}

/**
 * 路由
 */
function RouterConfig() {
    const { data } = NavTreeContainer.useContainer();
    const temp = recurrenceRoute(data!);

    return <>{temp}</>;
}

export { RouterConfig };
