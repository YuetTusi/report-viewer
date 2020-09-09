import React, { FC } from 'react';
import Spin from 'antd/lib/spin';
import { FullScreenBox, CenterBox } from './StyledBox';

interface Prop {}

/**
 * 等待组件
 */
const LazyLoading: FC<Prop> = (props) => {
    return (
        <FullScreenBox>
            <CenterBox>
                <Spin spinning={true} />
            </CenterBox>
        </FullScreenBox>
    );
};

export default LazyLoading;
