import ReactDOM from 'react-dom';
import React, { FC } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import SplitterLayout from 'react-splitter-layout';
import { RouterConfig } from '@src/router';
import { TreeBox, ContentBox, LeftBox, RightBox } from '@src/components/styled/BoxStyle';
import NavTree from '@src/components/NavTree';
import NavTreeContainer from '@src/containers/NavTree';
import '@root/styles/splitter-layout.less';
import 'antd/dist/antd.less';

interface Prop {}

const Index: FC<Prop> = (props) => {
    const { clientWidth } = document.body;
    return (
        <Router>
            <SplitterLayout primaryMinSize={260} secondaryInitialSize={clientWidth - 260}>
                <LeftBox>
                    <TreeBox>
                        <NavTreeContainer.Provider>
                            <NavTree />
                        </NavTreeContainer.Provider>
                    </TreeBox>
                </LeftBox>
                <RightBox>
                    <ContentBox>{RouterConfig()}</ContentBox>
                </RightBox>
            </SplitterLayout>
        </Router>
    );
};

ReactDOM.render(<Index />, document.getElementById('root'));
