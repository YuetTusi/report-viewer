import React, { FC } from 'react';
import Icon from 'antd/lib/icon';
import styled from 'styled-components';

interface Prop {
	msg?: string;
}

const TansferBox = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	color: #fff;
	padding: 10px;
	background-color: #af6e2a;

	.left-ico {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 2rem;
		background-color: #e94929;
		padding: 10px 8px;
		border-radius: 5px;
		color: #ffda47;
		font-weight: bold;
	}
	.msg {
		padding: 0 20px;
	}
`;

/**
 * 转账
 */
const Transfer: FC<Prop> = (props) => {
	return (
		<TansferBox>
			<div className="left-ico">
				<Icon type="transaction" />
			</div>
			<div className="msg">{props.msg}</div>
		</TansferBox>
	);
};

Transfer.defaultProps = {
	msg: ''
};

export default Transfer;
