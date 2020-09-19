import styled from 'styled-components';

/**
 * 页面标题
 */
const MainTitle = styled.div`
	padding: 5px;
	font-size: 2.4rem;
	color: #4d585f;
	font-family: 'Microsoft Yahei';
	em {
		color: #f00;
		font-style:normal;
	}
`;

/**
 * 二级标题
 */
const SubTitle = styled.div`
	font-size: 1.6rem;
	color: #4d585f;
	font-weight: lighter;
	font-family: 'Microsoft Yahei';
`;

/**
 * 分类框
 */
const PartBox = styled.div`
	border: 1px solid #3d4c5a;
	border-radius: 4px;
`;

/**
 * 分类框标题
 */
const PartCaption = styled.div`
	color: #fff;
	font-size: 1.4rem;
	text-indent: 0.5rem;
	background-color: #3d4c5a;
	padding: 5px;
`;

/**
 * 分类框内容
 */
const PartContent = styled.div`
	padding: 5px;
`;

export { MainTitle, SubTitle, PartBox, PartCaption, PartContent };
