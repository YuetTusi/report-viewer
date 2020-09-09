import React, { FC } from 'react';
import Page2DataContainer from '@src/containers/Page2Data';

interface Prop {}

const Page2: FC<Prop> = (props) => {
    const { data } = Page2DataContainer.useContainer();

    return <div>{JSON.stringify(data)}</div>;
};

export default Page2;
