import styled from 'styled-components';

const PictureList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	padding: 0;
	margin: 0;
`;

const LiItem = styled.li`
	display: flex;
	justify-content: center;
	align-items: center;
	list-style-type: none;
	padding: 5px;
	margin: 5px 0 0 5px;
	border: 1px solid #e5e7e8;

	&:hover {
		cursor: pointer;
		box-shadow: 0 0 5px 5px #90abad;
	}

	img {
		max-width: 500px;
		max-height: 900px;
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
