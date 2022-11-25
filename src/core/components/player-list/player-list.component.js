import React from 'react';
import AudioPlayer from './player.component';
import styles from './player-list.module.scss';

const PlayerList = ({ monthTitle, audioData }) => {
	return (
		<main className={styles.playerWrapper}>
			{audioData.map((audio) => (
				<article key={audio.audioFile}>
					<h2 className={styles.audioTitle}>{audio.audioTitle}</h2>
					<AudioPlayer audioFile={audio.audioFile} />
				</article>
			))}
		</main>
	);
};

export default PlayerList;
