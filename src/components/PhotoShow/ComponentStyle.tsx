import styled from 'styled-components';

const FullScreenMask = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	cursor: wait;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: rgba(34, 34, 34, 0.6);
	user-select: none;
	z-index: 100;
	animation-name: maskFadeIn;
	animation-duration: 0.4s;

	.fn-bar {
		position: absolute;
		top: 5px;
		right: 30px;
		a {
			color: #fff;
			font-size: 2.8rem;
			margin-right: 14px;
			&:hover {
				color: #01c0c8;
			}
		}
	}

	img {
		cursor: pointer;
		max-height: 70%;
		max-width: 70%;
	}

	@keyframes maskFadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`;

export { FullScreenMask };
