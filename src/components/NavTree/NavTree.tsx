import React, { FC, memo, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import NavTreeContainer from '@src/containers/NavTree';
import $ from 'jquery';

interface Prop {}

/**
 * 树导航组件
 */
const NavTree: FC<Prop> = (props) => {
    const history = useHistory();

    const { data } = NavTreeContainer.useContainer();

    useEffect(() => {
        $.fn.zTree.init(
            $('#navTree'),
            {
                callback: {
                    onClick(event: MouseEvent, id: string, node: any) {
                        history.replace(node.path);
                    }
                }
            },
            data
        );
    }, [data]);

    return <ul id="navTree" className="ztree"></ul>;
};

export default memo(NavTree);
