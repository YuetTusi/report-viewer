import styled from 'styled-components';

const FullScreenBox = styled.div`
	position: absolute;
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
	width: 20px;
	height: 25px;
	position: absolute;
	left: 50%;
	top: 50%;
	margin-left: -10px;
	margin-top: -12px;
`;

export { FullScreenBox, CenterBox };
