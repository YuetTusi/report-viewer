import React, { FC, useEffect, useState } from 'react';
import Page3Data from '@src/containers/Page3Data';
import Table from 'antd/lib/table';
import { helper } from '@src/utils/helper';

interface Prop {}

const Page3: FC<Prop> = (props) => {
    const { data } = Page3Data.useContainer();

    return (
        <div>
            <div>page3</div>
            <hr />
            <div>
                <Table<any>
                    columns={[
                        {
                            title: 'id',
                            dataIndex: 'id',
                            key: 'id'
                        },
                        {
                            title: 'col1',
                            dataIndex: 'col1',
                            key: 'col1'
                        },
                        {
                            title: 'col2',
                            dataIndex: 'col2',
                            key: 'col2'
                        },
                        {
                            title: 'col3',
                            dataIndex: 'col3',
                            key: 'col3'
                        }
                    ]}
                    dataSource={data}
                    rowKey={(record) => record.id}
                ></Table>
            </div>
        </div>
    );
};

export default Page3;
