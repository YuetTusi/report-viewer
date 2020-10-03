import React, { FC, memo, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import NavTreeContainer from '@src/containers/NavTree';
import $ from 'jquery';

interface Prop {}

/**
 * 将第n层之前的结点展开
 * @param context 树对象
 * @param nodes 树结点数据
 * @param level 展开层级
 */
function expandNodes(context: any, nodes: any[], level: number) {
	if (nodes === undefined || nodes.length === 0) {
		return;
	}
	for (let i = 0; i < nodes.length; i++) {
		if (nodes[i].level < level) {
			context.expandNode(nodes[i], true);
		}
		expandNodes(context, nodes[i].children, level);
	}
}

/**
 * 树导航组件
 */
const NavTree: FC<Prop> = (props) => {
	const history = useHistory();

	const { data } = NavTreeContainer.useContainer();

	useEffect(() => {
		var tree = $.fn.zTree.init(
			$('#navTree'),
			{
				callback: {
					onClick(event: MouseEvent, id: string, node: any) {
						let url = node.path + `?p=${node.page ?? 0}`;
						history.replace(url);
					},
				},
				view: {
					nameIsHTML: true,
				},
			},
			data
		);
		expandNodes(tree, tree.getNodes(), 3);
	}, [data]);

	return <ul id="navTree" className="ztree"></ul>;
};

export default memo(NavTree);
