import ReactDOM from 'react-dom';
import React, { FC } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import ConfigProvider from 'antd/lib/config-provider';
import zhCN from 'antd/es/locale/zh_CN';
import SplitterLayout from 'react-splitter-layout';
import { RouterConfig } from '@src/router';
import { TreeBox, ContentBox, LeftBox, RightBox } from '@src/components/styled/BoxStyle';
import NavTree from '@src/components/NavTree';
import NavTreeContainer from '@src/containers/NavTree';
import LoadingContainer from '@src/containers/Loading';
import 'antd/dist/antd.less';
import '@root/styles/splitter-layout.less';
import '@root/styles/default.less';

interface Prop {}

const defaultRightPercent = 82; //默认右栏百分比

const Index: FC<Prop> = () => {
	return (
		<Router>
			<NavTreeContainer.Provider>
				<SplitterLayout
					percentage={true}
					secondaryInitialSize={defaultRightPercent}
					primaryMinSize={10}>
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
