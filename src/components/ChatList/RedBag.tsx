import React, { FC } from 'react';
import Icon from 'antd/lib/icon';
import styled from 'styled-components';

interface Prop {
	/**
	 * 消息
	 */
	msg?: string;
}

const BagBox = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	color: #fff;
	padding: 10px;
	background-color: #e18d35;

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
 * 红包
 */
const RedBag: FC<Prop> = (props) => {
	return (
		<BagBox>
			<div className="left-ico">
				<Icon type="pay-circle" />
			</div>
			<div className="msg">{props.msg}</div>
		</BagBox>
	);
};

RedBag.defaultProps = {
	msg: '恭喜发财，大吉大利'
};

export default RedBag;
