import styled from 'styled-components';

/**
 * 树div
 */
const TreeBox = styled.div`
	display: block;
`;

/**
 * 内容区div
 */
const ContentBox = styled.div`
	display: relative;
`;

/**
 * 左侧布局div
 */
const LeftBox = styled.div`
	width: auto;
	height: 100%;
	color: #fff;
`;

/**
 * 右侧布局div
 */
const RightBox = styled.div`
	box-sizing: border-box;
	padding: 10px;
	min-height: 100%;
	background-color: #fff;
`;

const PanelBox = styled.div`
	margin-bottom: 10px;
	padding: 5px;
	background-color: #fff;
	border-radius: 4px;
	border: 1px solid #e5e7e8;
	box-shadow: 1px 1px 1px #dadada;
`;

export { TreeBox, ContentBox, LeftBox, RightBox, PanelBox };
