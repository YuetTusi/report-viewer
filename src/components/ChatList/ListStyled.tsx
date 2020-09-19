import styled from 'styled-components';

const ListRoot = styled.ul`
	margin: 0 20px;
	padding: 0;
`;

const ListRow = styled.li`
	list-style-type: none;
	margin: 0;
	padding: 2px 10px;
`;

const Send = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;

	& .avatar {
		display: block;
		position: relative;
		width: 50px;
		height: 50px;
		border: 1px solid #efefef;
	}

	& .ant-tag {
		margin-left: 10px;
	}

	& .text-box {
		display: flex;
		flex-direction: column;
		margin-left: 15px;
	}

	& .talk {
		position: relative;
		max-width: 600px;
		height: auto;
		border: 1px solid #d1d8dc;
		padding: 6px;
		color: #3d4c5a;
		line-height: 2rem;
		background-color: #fff;
		:after {
			display: block;
			position: absolute;
			top: calc(50% - 5px);
			left: -6px;
			width: 10px;
			height: 10px;
			content: ' ';
			border-bottom: 1px solid #d1d8dc;
			border-left: 1px solid #d1d8dc;
			transform: rotate(45deg);
			background-color: #fff;
		}

		& img {
			max-width: 480px;
			max-height: 400px;
			cursor: pointer;
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
	flex-direction: row-reverse;
	justify-content: flex-start;
	align-items: center;

	& .avatar {
		display: block;
		position: relative;
		width: 50px;
		height: 50px;
		border: 1px solid #efefef;
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
		max-width: 600px;
		border: 1px solid #d1d8dc;
		padding: 6px;
		color: #3d4c5a;
		line-height: 2rem;
		background-color: #94ee6a;
		:after {
			display: block;
			position: absolute;
			top: calc(50% - 5px);
			right: -6px;
			width: 10px;
			height: 10px;
			content: ' ';
			border-top: 1px solid #d1d8dc;
			border-right: 1px solid #d1d8dc;
			transform: rotate(45deg);
			background-color: #94ee6a;
		}
		& img {
			max-width: 480px;
			max-height: 400px;
			cursor: pointer;
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
const Message = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	p {
		color: #222;
		background-color: #dddddd;
		padding: 5px 20px;
		border-radius: 5px;
	}
	.other {
		display: flex;
		flex-direction: row;
		del {
			color: #f00;
			text-decoration: none;
			margin-left: 10px;
		}
	}
`;

const PageBox = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-top: 10px;
	padding: 20px 10px;
	border-top: 1px solid #efefef;
`;

export { ListRoot, ListRow, Send, Reply, Message, PageBox };
