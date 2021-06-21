import styled from 'styled-components';

const PictureList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	padding: 0;
	margin: 0;
`;

const LiItem = styled.li`
	list-style-type: none;
	padding: 0;
	margin: 3px 0;

	fieldset {
		border: 1px solid #e8e8e8;
		margin-left: 5px;
		margin-top: 1px;
		legend {
			width: auto;
			font-size: 1.2rem;
			border: 1px solid #e8e8e8;
			padding: 0 5px;
			margin-bottom: 5px;
			margin-left: 5px;
		}
		& > div {
			margin: 0 5px 5px 5px;
			border: 1px solid #e8e8e8;
		}
		&:hover {
			legend {
				color: #3d4c5a;
				font-weight: 500;
				box-shadow: 1px 1px 3px rgba(61, 76, 90, 0.5), -1px -1px 3px rgba(61, 76, 90, 0.5),
					1px -1px 3px rgba(61, 76, 90, 0.5), -1px 1px 3px rgba(61, 76, 90, 0.5);
			}
			& > div {
				margin: 0 5px 5px 5px;
				border: 1px solid #e8e8e8;
				cursor: pointer;
				border-color: #3d4c5a;
				box-shadow: 1px 1px 5px rgba(61, 76, 90, 0.5), -1px -1px 5px rgba(61, 76, 90, 0.5),
					1px -1px 5px rgba(61, 76, 90, 0.5), -1px 1px 5px rgba(61, 76, 90, 0.5);
			}
		}
	}

	img {
		width: 230px;
		height: 230px;
	}
`;

const TipList = styled.ul`
	padding: 0;
	margin: 0;

	li {
		list-style-type: none;
		padding: 2px 0;

		label {
		}
		span {
			color: #3d4c5a;
			font-weight: 500;
		}
	}
`;

export { PictureList, LiItem, TipList };
