import styled from 'styled-components';

const FullScreenBox = styled.div`
	position: fixed;
	z-index: 999;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background-color: #3d4c5a;
	opacity: 0.5;
	cursor: wait;
`;

const CenterBox = styled.div`
	display: block;
	width: 40px;
	height: 40px;
	position: absolute;
	left: 50%;
	top: 50%;
	margin-left: -20px;
	margin-top: -20px;
	.ant-spin-dot-item {
		background-color: #1890ff !important;
	}
`;

export { FullScreenBox, CenterBox };
