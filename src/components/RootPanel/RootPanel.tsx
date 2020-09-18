import React, { FC } from 'react';
import Spin from 'antd/lib/spin';
import { FullScreenBox, CenterBox } from './StyleBox';

interface Prop {
    /**
     * 读取中
     */
    loading: boolean;
}

/**
 * 根视图
 */
const RootPanel: FC<Prop> = (props) => {
    return (
        <>
            <div>{props.children}</div>
            <FullScreenBox style={{ display: props.loading ? 'block' : 'none' }}>
                <CenterBox>
                    <Spin spinning={true} size="large" />
                </CenterBox>
            </FullScreenBox>
        </>
    );
};

export default RootPanel;
