import styled from 'styled-components';

/**
 * 文件链接
 */
const FileLink = styled.a`
	cursor: pointer;
	text-decoration: underline;
	&:hover {
		color: #fff;
	}
`;

/**
 * 红色提示文本
 * 文字过多省略显示
 */
const RedText = styled.span`
	display: inline-block;
	max-width: 280px;
	white-space: normal;
	word-break: break-all;
	vertical-align: middle;
	em {
		color: #ff0033;
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
 * 黑色默认文本
 * 文字过多省略显示
 */
const BlackText = styled.span`
	display: inline-block;
	color: #222;
	max-width: 280px;
	white-space: normal;
	word-break: break-all;
	vertical-align: middle;
	em {
		color: #ff0033;
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

const AnchorLink = styled.a`
	display: inline-block;
	cursor: pointer;
	max-width: 280px;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	text-decoration: underline;
	&:hover {
		text-decoration: underline;
	}
`;

const FullText = styled.span`
	display: block;
	max-width: 600px;
	max-height: 300px;
	overflow: auto;
	word-break: break-all;
`;

/**
 * 分页区
 */
const PageBox = styled.div<{ top?: string | 0 }>`
	display: flex;
	justify-content: flex-end;
	padding: 10px 10px;
	&.top {
		position: sticky;
		z-index: 99;
		top: ${(prop) => prop.top ?? 0};
		background-color: #f9f9f9;
	}
	&.bottom {
		background-color: #f9f9f9;
		border-bottom-left-radius: 4px;
		border-bottom-right-radius: 4px;
	}
`;

const ExportPane = styled.div`
	position: relative;
	background-color: #f9f9f9;
	border: 1px solid #e8e8e8;
	border-radius: 3px;

	.ant-btn {
		position: absolute;
		top: 5px;
		right: 5px;
		z-index: 9;
	}
`;

const SearchContentBox = styled.div`
	position: sticky;
	z-index: 99;
	top: 0;
`;

export {
	FileLink,
	RedText,
	BlackText,
	AnchorLink,
	FullText,
	PageBox,
	ExportPane,
	SearchContentBox
};
