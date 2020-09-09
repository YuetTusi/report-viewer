import React, { FC } from 'react';
import Table from 'antd/lib/table';
import RootPanel from '@src/components/RootPanel';
import Page1DataContainer from '@src/containers/Page1Data';
import { RowData } from '@src/hooks/data/usePage1Data';
import LoadingContainer from '@src/containers/Loading';

interface Prop {}

const Page1: FC<Prop> = (props) => {
    let { data, setData } = Page1DataContainer.useContainer();
    let { loading, setLoading } = LoadingContainer.useContainer();

    return (
        <RootPanel visible={loading}>
            <div>
                <button
                    type="button"
                    onClick={() => {
                        let next = data!.map((i) => {
                            if (i.id === 'e07e5aa3-4c53-4b0f-9a59-ccbd2159c056') {
                                i.col1 = `Update_${(~~(Math.random() * 100000)).toString()}`;
                            }
                            return i;
                        });
                        setData(next);
                    }}
                >
                    update
                </button>
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
                <Table<RowData>
                    columns={[
                        { title: 'id', dataIndex: 'id' },
                        {
                            title: 'col1',
                            dataIndex: 'col1'
                        }
                    ]}
                    rowKey={(record) => record.id}
                    dataSource={data}
                ></Table>
            </div>
        </RootPanel>
    );
};

export default Page1;
