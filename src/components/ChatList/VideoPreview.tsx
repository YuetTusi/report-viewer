import React, { FC } from 'react';
import Button from 'antd/lib/button';
import styled from 'styled-components';

interface Prop {
	/**
	 * 视频地址
	 */
	src: string;
}

const ButtonBar = styled.div`
	display: flex;
	flex-direction: row-reverse;
	margin: 5px 0;
`;

const VideoPreview: FC<Prop> = (props) => {
	return (
		<div>
			<ButtonBar>
				<Button
					onClick={() => window.open(props.src)}
					type="primary"
					size="small"
					icon="eye"></Button>
			</ButtonBar>
			<video
				src={props.src}
				controls={true}
				style={{ maxWidth: '580px', maxHeight: '500px' }}
			/>
		</div>
	);
};

export default VideoPreview;
