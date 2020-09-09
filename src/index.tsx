import ReactDOM from 'react-dom';
import React, { FC } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import SplitterLayout from 'react-splitter-layout';
import { RouterConfig } from '@src/router';
import { TreeBox, ContentBox } from '@src/components/styled/BoxStyle';
import NavTree from '@src/components/NavTree';
import NavTreeContainer from '@src/containers/NavTree';
import '@root/styles/splitter-layout.less';
import 'antd/dist/antd.less';

interface Prop {}

const { clientWidth } = document.body;

const Index: FC<Prop> = (props) => {
    return (
        <Router>
            <SplitterLayout secondaryInitialSize={clientWidth - 280}>
                <div>
                    <TreeBox>
                        <NavTreeContainer.Provider>
                            <NavTree />
                        </NavTreeContainer.Provider>
                    </TreeBox>
                </div>
                <div>
                    <ContentBox>{RouterConfig()}</ContentBox>
                </div>
            </SplitterLayout>
        </Router>
    );
};

ReactDOM.render(<Index />, document.getElementById('root'));
