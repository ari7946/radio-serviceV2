import React, { useState } from "react"
import ReactAudioPlayer from "react-audio-player"
import ReactPlayer from "react-player"
import styles from "./player-list.module.scss"
import Spotify  from "react-spotify-embed";

const AudioPlayer = ({ audioFile, audioData, isFromSpotify }) => {
  const [loading, setLoading] = useState(true)

  const handleOnCanPlay = () => {
    setLoading(false)
  }

  console.log('audioFile', audioFile);
  return (
    <div className={styles.playerWrapper}>
      {/* {loading && <span className={styles.spinner} />} */}
      {/* <ReactAudioPlayer
				className={styles.audioPlayer}
				src={audioFile}
				autoplay
				controls
				onCanPlay={handleOnCanPlay}
				onCanPlayThrough={loading && handleOnCanPlay}
			/> */}
      <ReactPlayer
        url={audioFile}
        className={styles.audioPlayer}
        controls
        onReady={handleOnCanPlay}
        height={150}
        width={400}
      />
    </div>
  )
}

export default AudioPlayer
