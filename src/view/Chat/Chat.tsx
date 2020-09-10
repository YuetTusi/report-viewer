import React, { FC, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMount } from '@src/hooks';
import { helper } from '@src/utils/helper';

interface Prop {}

const Chat: FC<Prop> = (props) => {
    const [data, setData] = useState<any>({});

    const { file } = useParams<{ file: string }>();

    useMount(async () => {
        const next = await helper.loadJSON(`public/data/${file}.json`, 'data');
        setData(next);
    });

    return (
        <div>
            <h1>Chat类页面</h1>
            <hr />
            <div>{JSON.stringify(data)}</div>
        </div>
    );
};

export default Chat;
