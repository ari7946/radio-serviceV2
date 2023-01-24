import React from 'react';
import AudioPlayer from './player.component';
import styles from './player-list.module.scss';
import { AudioData } from '../../types/types';

interface PlayerListProps {
  audioData: AudioData[];
}

const PlayerList = ({ audioData } : PlayerListProps) => {
	return (
		<main className={styles.playerWrapper}>
			{audioData.map((audio) => (
				<article key={audio.audioFile} className={styles.playerArticle}>
					<h2 className={styles.audioTitle}>{audio.audioTitle}</h2>
          <AudioPlayer audioFile={audio.audioFile} isFromSoundCloud={audio.isFromSoundCloud} />
				</article>
			))}
		</main>
	);
};

export default PlayerList;
