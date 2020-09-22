import styled from 'styled-components';

const FileLink = styled.a`
	cursor: pointer;
	text-decoration: underline;
	&:hover {
		color: #fff;
	}
`;

const RedText = styled.span`
	display: inline;
	color: #222;
`;

const BlackText = styled.span`
	display: inline;
	color: #f00;
`;

export { FileLink, RedText, BlackText };
