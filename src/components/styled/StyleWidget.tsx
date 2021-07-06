import styled from 'styled-components';

/**
 * 页面标题
 */
const MainTitle = styled.div`
	padding: 5px;
	font-size: 2.4rem;
	color: #4d585f;
	min-height: 46px;
	font-family: 'Microsoft Yahei';
	em {
		color: #f00;
		font-style: normal;
	}
	b {
		color: #00cece;
		font-style: normal;
		font-weight: normal;
	}
	i {
		color: #ffb100;
		font-style: normal;
		font-weight: normal;
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
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	background-color: #3d4c5a;
	padding: 5px 10px;
	height: 31px;
	color: #fff;

	.caption-text {
		font-family: 'Microsoft YaHei';
		color: #fff;
		em {
			font-size: 1.4rem;
			color: #ff0033;
			font-style: normal;
			font-weight: normal;
			text-indent: 0.5rem;
		}
		b {
			font-size: 1.4rem;
			color: #00ffff;
			font-style: normal;
			font-weight: normal;
			text-indent: 0.5rem;
		}
		i {
			font-size: 1.4rem;
			color: #ffcc00;
			font-style: normal;
			font-weight: normal;
			text-indent: 0.5rem;
		}
	}
	.caption-action {
		color: #fff;
		cursor: pointer;
		padding-left: 3px;
		&:hover {
			color: #00b4bb;
		}
		& > span {
			margin-left: 2px;
		}
	}
`;

/**
 * 分类框内容
 */
const PartContent = styled.div`
	padding: 0;
`;

export { MainTitle, SubTitle, PartBox, PartCaption, PartContent };
