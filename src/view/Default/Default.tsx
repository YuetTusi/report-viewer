import React, { FC } from 'react';
import { RouteChildrenProps } from 'react-router-dom';
import noDataSvg from '@root/styles/images/no-data.svg';
import styled from 'styled-components';

interface Prop extends RouteChildrenProps {}

const CenterBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;

	h1 {
		color: #3d4c5a;
	}

	img {
		width: 200px;
		height: 200px;
	}
`;

const Default: FC<Prop> = (props) => {
	return (
		<CenterBox>
			<h1>案件分析报告</h1>
			<hr />
			<div>
				<img src={noDataSvg} alt="nodata" />
			</div>
		</CenterBox>
	);
};

export default Default;
