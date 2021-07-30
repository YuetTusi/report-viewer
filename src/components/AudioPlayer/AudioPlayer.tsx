import React, { FC, MouseEvent, useState, useRef } from 'react';
import Button from 'antd/lib/button';
import Icon from 'antd/lib/icon';
import AudioPlayerBox from './StyleBox';
import { ChatData } from '../ChatList/componentTypes';

interface Prop {
	/**
	 * 聊天数据
	 */
	data: ChatData;
}

/**
 * 音频播放器（动态）
 */
const AudioPlayer: FC<Prop> = (props) => {
	const { content, content_export } = props.data;
	const box = useRef<HTMLDivElement>(null);
	const hasChangeSrc = useRef<boolean>(false);
	const audioRef = useRef<HTMLAudioElement | null>(null);
	const [audioCanPlay, setAudioCanPlay] = useState(false);
	const [buttonText, setButtonText] = useState('播放音频');

    
	const onCanPlay = () => {
		setAudioCanPlay(true);
		audioRef.current!.play();
	};

	const onError = () => {
		if (hasChangeSrc.current) {
			box.current!.removeChild(audioRef.current!);
			setButtonText('加载失败');
			setAudioCanPlay(false);
		} else {
			hasChangeSrc.current = true;
			audioRef.current!.src = content_export;
		}
	};

	const onPlayClick = (event: MouseEvent<HTMLButtonElement>) => {
		if (audioRef.current === null) {
			// setAudioCanPlay(false);
			audioRef.current = document.createElement('audio');
			audioRef.current.src = content;
			audioRef.current.preload = 'auto';
			audioRef.current.controls = true;
			audioRef.current.oncanplay = onCanPlay;
			audioRef.current.onerror = onError;
			box.current!.appendChild(audioRef.current);
		}
	};

	return (
		<AudioPlayerBox>
			<div ref={box}>
				<Button onClick={onPlayClick} style={{ display: audioCanPlay ? 'none' : 'block' }} size="small">
					<Icon type="sound" />
					<span>{buttonText}</span>
				</Button>
			</div>
		</AudioPlayerBox>
	);
};

export default AudioPlayer;
