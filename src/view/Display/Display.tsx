import React, { FC, useEffect, useState } from 'react';
import { useParams, Router } from 'react-router-dom';
import Table from 'antd/lib/table';
import { helper } from '@src/utils/helper';
import { useMount } from '@src/hooks';

interface Prop {}

const Display: FC<Prop> = (props) => {
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

export default Display;
