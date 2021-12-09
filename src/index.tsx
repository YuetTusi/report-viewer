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

const defaultRightPercent = 82; //默认右栏百分比
const { Provider: NavTreeProvider } = NavTreeContainer;
const { Provider: LoadingProvider } = LoadingContainer;

interface Prop {}

const Index: FC<Prop> = () => (
	<Router>
		<NavTreeProvider>
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
							<LoadingProvider>
								<RouterConfig />
							</LoadingProvider>
						</ConfigProvider>
					</ContentBox>
				</RightBox>
			</SplitterLayout>
		</NavTreeProvider>
	</Router>
);

ReactDOM.render(<Index />, document.getElementById('root'));
