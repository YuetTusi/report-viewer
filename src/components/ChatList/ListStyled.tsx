import styled from 'styled-components';

const ListRoot = styled.ul`
	margin: 0 20px;
	padding: 0;
`;

const ListRow = styled.li`
	list-style-type: none;
	margin: 0;
	padding: 10px 10px;
`;

const Send = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;

	& .avatar {
		display: block;
		position: relative;
		top: 20px;
		width: 50px;
		height: 50px;
		border: 1px solid silver;
	}

	& .text-box {
		display: flex;
		flex-direction: column;
		margin-left: 15px;
	}

	& .talk {
		position: relative;
		max-width: 400px;
		height: auto;
		border: 1px solid #d1d8dc;
		padding: 5px;
		color: #222;
		line-height: 2rem;
		background-color: #fff;
		:after {
			display: block;
			position: absolute;
			top: 9px;
			left: -6px;
			width: 10px;
			height: 10px;
			content: ' ';
			border-bottom: 1px solid #d1d8dc;
			border-left: 1px solid #d1d8dc;
			transform: rotate(45deg);
			background-color: #fff;
		}
	}

	& .user-name {
		color: #222;
		em {
			font-style: normal;
			color: #999;
		}
		padding: 5px 0;
	}
	& time {
		color: #999;
		padding: 5px 0;
	}
`;
const Reply = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;

	& .avatar {
		display: block;
		position: relative;
		top: 20px;
		width: 50px;
		height: 50px;
		border: 1px solid silver;
	}

	& .text-box {
		display: flex;
		flex-direction: column;
		margin-right: 15px;
	}

	& .user-name {
		color: #222;
		em {
			font-style: normal;
			color: #999;
		}
	}

	& .talk {
		position: relative;
		max-width: 400px;
		border: 1px solid #d1d8dc;
		padding: 5px;
		color: #222;
		line-height: 2rem;
		background-color: #94ee6a;
		:after {
			display: block;
			position: absolute;
			top: 9px;
			right: -6px;
			width: 10px;
			height: 10px;
			content: ' ';
			border-top: 1px solid #d1d8dc;
			border-right: 1px solid #d1d8dc;
			transform: rotate(45deg);
			background-color: #94ee6a;
		}
	}

	& .user-name {
		color: #222;
		em {
			font-style: normal;
			color: #999;
		}
		padding: 5px 0;
	}
	& time {
		color: #999;
		padding: 5px 0;
	}
`;

export { ListRoot, ListRow, Send, Reply };
