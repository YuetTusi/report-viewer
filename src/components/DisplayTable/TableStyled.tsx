import styled from 'styled-components';

const FileLink = styled.a`
	cursor: pointer;
	text-decoration: underline;
	&:hover {
		color: #fff;
	}
`;

const RedText = styled.span`
	display: inline-block;
	color: #f00;
	max-width: 280px;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
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

const BlackText = styled.span`
	display: inline-block;
	color: #222;
	max-width: 280px;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
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
const PageBox = styled.div`
	display: flex;
	justify-content: flex-end;
	padding: 10px 10px;
	&.top {
		position: sticky;
		z-index: 99;
		top: 0;
		background-color: #f9f9f9;
	}
	&.bottom {
		background-color: #f9f9f9;
		border-bottom-left-radius: 4px;
		border-bottom-right-radius: 4px;
	}
`;

export { FileLink, RedText, BlackText, AnchorLink, FullText, PageBox };
