import React, { FC } from 'react';
import styled from 'styled-components';
import Icon from 'antd/lib/icon';

const PosInfo = styled.div`
	display: flex;
	flex-direction: row;

	span {
		color: #3d4c5a;
	}
	a {
		color: #00b4bb;
		font-weight: bold;
	}
	.anticon-environment {
		font-size: 1.4rem;
		font-weight: bold;
		margin-right: 2px;
	}
`;

interface Prop {}

/**
 * 位置
 * @param props
 */
const Locate: FC<Prop> = (props) => {
	return (
		<div className="talk">
			<PosInfo>
				<span>位置：</span>
				<a>
					<Icon type="environment" />
					<strong>{props.children}</strong>
				</a>
			</PosInfo>
		</div>
	);
};

export default Locate;
