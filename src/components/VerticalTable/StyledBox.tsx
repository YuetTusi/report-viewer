import styled from 'styled-components';

const TableBox = styled.table`
	width: 100%;
	border-left: 1px solid #e8e8e8;
	border-top: 1px solid #e8e8e8;
	border-spacing: 0;
	color: #4d585f;
	font-size: 1.2rem;
`;

const RowBox = styled.tr`
	margin: 0;
	padding: 0;
	:hover {
		color: #fff;
		background-color: #01c0c8;
	}
`;

const CellBox = styled.td`
	border-right: 1px solid #e8e8e8;
	border-bottom: 1px solid #e8e8e8;
	padding: 10px 10px;

	:first-child {
		font-weight: bold;
	}
`;

export { TableBox, RowBox, CellBox };
