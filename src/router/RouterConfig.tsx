import React, { FC, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import LazyLoading from '@src/components/LazyLoading';
import NavTreeContainer from '@src/containers/NavTree';
import { TreeNode } from '@src/components/NavTree';
import { helper } from '@src/utils/helper';
import { BaseView, ViewType } from '@src/types/View';

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
		const { path, type, dir, children } = nodes[i];
		if (path) {
			switch (type) {
				case ViewType.List:
					routes.push(
						<Route
							path={`${subPath(path)}/:file`}
							render={() => {
								const NextView = lazy<FC<BaseView>>(
									() => import('@src/view/DataList')
								);
								return (
									<Suspense fallback={<LazyLoading />}>
										<NextView dataFilePath={dir} />
									</Suspense>
								);
							}}
							key={`N_${acc++}`}
						/>
					);
					break;
				case ViewType.Table:
					routes.push(
						<Route
							path={`${subPath(path)}/:file`}
							render={() => {
								const NextView = lazy<FC<BaseView>>(
									() => import('@src/view/DataTable')
								);
								return (
									<Suspense fallback={<LazyLoading />}>
										<NextView dataFilePath={dir} />
									</Suspense>
								);
							}}
							key={`N_${acc++}`}
						/>
					);
					break;
				case ViewType.Display:
					routes.push(
						<Route
							path={`${subPath(path)}/:file`}
							render={() => {
								const NextView = lazy<FC<BaseView>>(
									() => import('@src/view/Display')
								);
								return (
									<Suspense fallback={<LazyLoading />}>
										<NextView dataFilePath={dir} />
									</Suspense>
								);
							}}
							key={`N_${acc++}`}
						/>
					);
					break;
				case ViewType.Chat:
					routes.push(
						<Route
							path={`${subPath(path)}/:file`}
							render={() => {
								const NextView = lazy<FC<BaseView>>(() => import('@src/view/Chat'));
								return (
									<Suspense fallback={<LazyLoading />}>
										<NextView dataFilePath={dir} />
									</Suspense>
								);
							}}
							key={`N_${acc++}`}
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
