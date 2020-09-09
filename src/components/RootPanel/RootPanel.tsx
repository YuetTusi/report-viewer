import React, { FC } from 'react';
import Spin from 'antd/lib/spin';
import { FullScreenBox, CenterBox } from './StyleBox';

interface Prop {
    visible: boolean;
}

const RootPanel: FC<Prop> = (props) => {
    return (
        <>
            <div>{props.children}</div>
            <FullScreenBox style={{ display: props.visible ? 'block' : 'none' }}>
                <CenterBox>
                    <Spin spinning={props.visible} />
                </CenterBox>
            </FullScreenBox>
        </>
    );
};

export default RootPanel;
