import React from 'react'
import VideoButtons from '../components/VideoButtons'
import ButtonBack from '../components/PrevButton'
import VideoRtc from '../components/VideoRtc'
import Timing from '../components/TimeTracker'
import VideoCard from '../components/VideoFrame'
import { useVideoManager } from '../uses/useVideoManager'

function ViewVideo() {
  const {
    question,
    animate,
    recordingDuration,
    restart,
    stop,
    setAnimate,
    setStatus
  } = useVideoManager()
  console.log(question);
  return (
    <div className='page-video-container blur-in-expand'>
      <ButtonBack />
      {
        question?.video !== "" ?
          <VideoCard question={question} restart={restart} />
          :
          <div className='video-full-container'>
            <VideoRtc recordingDuration={recordingDuration} question={question} setStatus={setStatus} stop={stop} setAnimate={setAnimate} />
            <Timing animate={animate} recordingDuration={recordingDuration} />
          </div>
      }
      <VideoButtons />
    </div >
  )
}

export default ViewVideo
