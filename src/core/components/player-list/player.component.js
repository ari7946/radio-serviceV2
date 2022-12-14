import React, { useState } from "react"
// import ReactAudioPlayer from "react-audio-player"
import ReactPlayer from "react-player/lazy"
import styles from "./player-list.module.scss"
import Spotify  from "react-spotify-embed";

const AudioPlayer = ({ audioFile, audioData, isFromSoundCloud }) => {
  const [loading, setLoading] = useState(true);

  const handleOnCanPlay = () => {
    setLoading(false)
  }

  React.useEffect(() => {
    setLoading(false);
  }, [loading])

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

      {!loading && (
        <ReactPlayer
          url={audioFile}
          className={styles.audioPlayer}
          controls
          // onReady={handleOnCanPlay}
          height={isFromSoundCloud ? 130 : 100}
          width="100%"
        />
      )}
    </div>
  )
}

export default AudioPlayer
