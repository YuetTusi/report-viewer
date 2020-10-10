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
	color: #f00;
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
	display: inline;
	color: #222;
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

export { FileLink, RedText, BlackText };
