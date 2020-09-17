import React, { FC } from 'react';
import Icon from 'antd/lib/icon';
import styled from 'styled-components';

interface Prop {
	/**
	 * 消息
	 */
	msg?: string;
}

const FileBox = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	color: #3d4c5a;
	padding: 10px;
	background-color: #01c0c8;
	cursor: pointer;

	.left-ico {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 2rem;
		background-color: #3d4c5a;
		padding: 10px 8px;
		border-radius: 5px;
		color: #fff;
		font-weight: bold;
	}
	.msg {
		padding: 0 20px;

		a {
			&:hover {
				color: #fff;
			}
		}
	}
`;

/**
 * 文件
 */
const AttachFile: FC<Prop> = (props) => {
	return (
		<FileBox
			onClick={() => {
				window.open(props.msg);
			}}>
			<div className="left-ico">
				<Icon type="file-text" />
			</div>
			<div className="msg">
				<a>文件：{props.msg}</a>
			</div>
		</FileBox>
	);
};

AttachFile.defaultProps = {
	msg: '文件'
};

export default AttachFile;
