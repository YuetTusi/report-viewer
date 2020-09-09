import React, { FC } from 'react';
import Spin from 'antd/lib/spin';
import { FullScreenBox, CenterBox } from './StyleBox';

interface Prop {
    loading: boolean;
}

const RootPanel: FC<Prop> = (props) => {
    return (
        <>
            <div>{props.children}</div>
            <FullScreenBox style={{ display: props.loading ? 'block' : 'none' }}>
                <CenterBox>
                    <Spin spinning={props.loading} />
                </CenterBox>
            </FullScreenBox>
        </>
    );
};

export default RootPanel;
