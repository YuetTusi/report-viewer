import ReactDOM from 'react-dom';
import React, { FC } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import ConfigProvider from 'antd/lib/config-provider';
import SplitterLayout from 'react-splitter-layout';
import { RouterConfig } from '@src/router';
import zhCN from 'antd/es/locale/zh_CN';
import { TreeBox, ContentBox, LeftBox, RightBox } from '@src/components/styled/BoxStyle';
import NavTree from '@src/components/NavTree';
import NavTreeContainer from '@src/containers/NavTree';
import LoadingContainer from '@src/containers/Loading';
import '@root/styles/splitter-layout.less';
import 'antd/dist/antd.less';

interface Prop {}

const Index: FC<Prop> = (props) => {
    const { clientWidth } = document.body;
    return (
        <Router>
            <NavTreeContainer.Provider>
                <SplitterLayout primaryMinSize={260} secondaryInitialSize={clientWidth - 260}>
                    <LeftBox>
                        <TreeBox>
                            <NavTree />
                        </TreeBox>
                    </LeftBox>
                    <RightBox>
                        <ContentBox>
                            <ConfigProvider locale={zhCN}>
                                <LoadingContainer.Provider>
                                    <RouterConfig />
                                </LoadingContainer.Provider>
                            </ConfigProvider>
                        </ContentBox>
                    </RightBox>
                </SplitterLayout>
            </NavTreeContainer.Provider>
        </Router>
    );
};

ReactDOM.render(<Index />, document.getElementById('root'));
