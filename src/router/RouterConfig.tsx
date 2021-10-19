import React, { FC, lazy, Suspense } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Default from '@src/view/Default';
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
		routes.push(<Route path="/default" component={Default} key={`N_${acc++}`} />);
		return routes;
	}

	for (let i = 0, len = nodes.length; i < len; i++) {
		const { path, type, dir, children } = nodes[i];
		if (path) {
			switch (type) {
				case ViewType.List:
					//纵表类
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
					//横表类
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
					//展示类
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
					//聊天类
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
				case ViewType.Album:
					//相册类
					routes.push(
						<Route
							path={`${subPath(path)}/:file`}
							render={() => {
								const NextView = lazy<FC<BaseView>>(
									() => import('@src/view/Album')
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
			}
		}
		if (children && children.length > 0) {
			routes = routes.concat(recurrenceRoute(children));
		}
		// routes.push(<Redirect to="/default" />); //缺省路由
	}

	return routes;
}

/**
 * 路由
 */
function RouterConfig() {
	const { data } = NavTreeContainer.useContainer();

	return (
		<Switch>
			<Route path="/default" component={Default} />
			{recurrenceRoute(data!)}
			<Redirect to="/default" />
		</Switch>
	);
}

export { RouterConfig };
