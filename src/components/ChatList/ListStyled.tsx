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
		word-break: break-all;
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
	& .del {
		color: rgb(255, 0, 0);
		font-size: 1.2rem;
		border: 1px solid rgb(255, 0, 0);
		background-color: rgba(255, 0, 0, 0.05);
		border-radius: 2px;
		padding: 2px 4px;
		text-decoration: none;
		margin-left: 10px;
	}
	& .recall {
		color: rgb(0, 171, 210);
		font-size: 1.2rem;
		border: 1px solid rgb(0, 171, 210);
		background-color: rgba(0, 171, 210, 0.05);
		border-radius: 2px;
		padding: 2px 4px;
		text-decoration: none;
		margin-left: 10px;
	}

	& .user-name {
		font-family: 'Microsoft YaHei';
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
		font-family: 'Microsoft YaHei';
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
		word-break: break-all;
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

	& .del {
		color: rgb(255, 0, 0);
		font-size: 1.2rem;
		border: 1px solid rgb(255, 0, 0);
		background-color: rgba(255, 0, 0, 0.05);
		border-radius: 2px;
		padding: 2px 4px;
		text-decoration: none;
		margin-right: 10px;
	}
	& .recall {
		color: rgb(0, 171, 210);
		font-size: 1.2rem;
		border: 1px solid rgb(0, 171, 210);
		background-color: rgba(0, 171, 210, 0.05);
		border-radius: 2px;
		padding: 2px 4px;
		text-decoration: none;
		margin-right: 10px;
	}

	& .user-name {
		font-family: 'Microsoft YaHei';
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
	}
`;

/**
 * 分页区
 */
const PageBox = styled.div`
	position: sticky;
	z-index: 99;
	display: flex;
	justify-content: flex-end;
	padding: 10px 10px;
	&.top {
		top: 24px;
		margin-bottom: 10px;
		border-bottom: 1px solid #efefef;
		background-color: #f9f9f9;
		border: 1px solid #efefef;
	}
	&.bottom {
		bottom: 0;
		margin-top: 10px;
		border-top: 1px solid #efefef;
		background-color: #f9f9f9;
		border-bottom-left-radius: 4px;
		border-bottom-right-radius: 4px;
	}
`;

const SearchChatBox = styled.div`
	position: sticky;
	z-index: 99;
	top: 0;
`;

export { ListRoot, ListRow, Send, Reply, Message, PageBox, SearchChatBox };
