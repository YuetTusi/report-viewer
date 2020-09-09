import React, { FC } from 'react';
import Button from 'antd/lib/button';
import RootPanel from '@src/components/RootPanel';
import Page1DataContainer from '@src/containers/Page1Data';
import LoadingContainer from '@src/containers/Loading';
import DisplayTable from '@src/components/DisplayTable';
import { helper } from '@src/utils/helper';

interface Prop {}

const Page1: FC<Prop> = (props) => {
    let { data, setData } = Page1DataContainer.useContainer();
    let { loading, setLoading } = LoadingContainer.useContainer();

    return (
        <RootPanel loading={loading}>
            <div>
                <Button type="primary">OK</Button>
                <a>测试链接</a>
                <button
                    type="button"
                    onClick={() => {
                        setLoading(true);
                        setTimeout(() => {
                            setLoading(false);
                        }, 1000);
                    }}
                >
                    loading
                </button>
            </div>
            <hr />
            <div>
                <DisplayTable
                    columns={['姓名', '年龄']}
                    data={[
                        ['张三', '28'],
                        ['李四', '29'],
                        ['张三', '28'],
                        ['李四', '29'],
                        ['张三', '28'],
                        ['李四', '29'],
                        ['张三', '28'],
                        ['李四', '29'],
                        ['张三', '28'],
                        ['李四', '29'],
                        ['张三', '28'],
                        ['李四', '29'],
                        ['张三', '28'],
                        ['李四', '29'],
                        ['张三', '28'],
                        ['李四', '29'],
                        ['张三', '28'],
                        ['李四', '29'],
                        ['张三', '28'],
                        ['李四', '29'],
                        ['张三', '28'],
                        ['李四', '29'],
                        ['234234234234234', '28'],
                        ['李四', '29'],
                        ['王五', '30']
                    ]}
                ></DisplayTable>
            </div>
        </RootPanel>
    );
};

export default Page1;
