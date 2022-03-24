import styled from 'styled-components';
import React, { FC, useState, MouseEvent } from 'react';
import Button from 'antd/lib/button';
import Modal from 'antd/lib/modal';
import InputNumber from 'antd/lib/input-number';
import message from 'antd/lib/message';
import { helper } from '@src/utils/helper';

const CenterBox = styled.div`

    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    &>span{
        padding:0 10px;
    }
`;

const PageRangeModal: FC<{
    visible: boolean,
    max: number,
    okHandle: (start: number, end: number) => void,
    cancelHandle: () => void
}> = ({ visible, max, okHandle, cancelHandle }) => {


    const [start, setStart] = useState<number>(1);
    const [end, setEnd] = useState<number>(max);

    const onClick = (event: MouseEvent<HTMLButtonElement>) => {
        message.destroy();
        if (helper.isNullOrUndefinedOrEmptyString(start) || helper.isNullOrUndefinedOrEmptyString(end)) {
            message.warning('请填写页码');
        } else if (start > end) {
            message.warning('起始页不可小于结束页码');
        } else {
            okHandle(start, end);
        }
    };

    return <Modal
        footer={[
            <Button type="primary" onClick={onClick} icon="check-circle" key="B_0">
                确定
            </Button>,
            <Button type="default" onClick={cancelHandle} icon="close-circle" key="B_1">
                关闭
            </Button>
        ]}
        onCancel={cancelHandle}
        visible={visible}
        maskClosable={false}
        destroyOnClose={true}
        title="打印视图">
        <CenterBox>
            <label>页码范围：</label>
            <InputNumber value={start} onChange={(value) => setStart(value!)} min={1} max={max} />
            <span>至</span>
            <InputNumber value={end} onChange={(value) => setEnd(value!)} min={1} max={max} defaultValue={max} />
        </CenterBox>
    </Modal>
};

PageRangeModal.defaultProps = {
    visible: false
};

export default PageRangeModal;