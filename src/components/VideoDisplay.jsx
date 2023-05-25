import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import { FaPlay, FaPause } from 'react-icons/fa'

function VideoDisplay({ url, controls = false }) {
  const [playing, setPlaying] = useState(false)
  const handlePlay = (e) => {
    e.stopPropagation()
    setPlaying(!playing)
  }

  return (
    <>
      <ReactPlayer
        controls={controls}
        playing={playing}
        url={url}
        height={"100%"}
        width={"100%"}
      />
      {
        !controls && <>
          {
            playing ?
              <span className='btn-video' onClick={handlePlay}><FaPause /></span> :
              <span className='btn-video' onClick={handlePlay} ><FaPlay /></span>
          }
        </>
      }

    </>
  )
}

export default VideoDisplay
