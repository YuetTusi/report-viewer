import React, { FC, useState } from 'react';
import { helper } from '@src/utils/helper';
import { useParams } from 'react-router-dom';
import { useMount } from '@src/hooks';

interface Prop {}

const DataTable: FC<Prop> = (props) => {
    const [data, setData] = useState<any>({});

    const { file } = useParams<{ file: string }>();

    useMount(async () => {
        const next = await helper.loadJSON(`public/data/${file}.json`, 'data');
        setData(next);
    });

    return (
        <div>
            <h1>Display类页面</h1>
            <hr />
            <div>{JSON.stringify(data)}</div>
        </div>
    );
};

export default DataTable;
