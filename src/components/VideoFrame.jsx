import { FiRefreshCw } from "react-icons/fi"
import VideoPlayer from "./VideoDisplay"
import { useVideoManager } from "../uses/useVideoManager"
import { useAppContext } from "../context/AppContext"
import { useState } from "react"

function VideoFrame() {
  const { question } = useAppContext()
  const { restart } = useVideoManager()
  const [showDescription, setShowDescription] = useState(false);


  return (
    <div className='video-full-container'>
      <VideoPlayer url={question?.video} controls={true} />
      <p className='question'>{question.question}</p>
        <span
        onClick={()=>restart()}
          onMouseOver={() => { setShowDescription(true) }}
          onMouseOut={() => { setShowDescription(false) }}
          className='btn-video btn-restart rotate-center-refressh'>
          <FiRefreshCw />
          </span>
        
          {showDescription && <div className="btn-description slide-right">Click para regrabar el video</div>}

    </div>
  )
}

export default VideoFrame
