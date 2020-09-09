import React, { FC } from 'react';
import { RouteChildrenProps } from 'react-router-dom';

interface Prop extends RouteChildrenProps { };

const Default: FC<Prop> = (props) => {

    return <div>
        Default
    </div>;

};

export default Default;
