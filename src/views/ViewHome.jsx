import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext'
import VideoSlider from '../components/VideoCarousel'
import { toast } from 'react-hot-toast'


function ViewHome() {
  const { data, saveVideosCompleted } = useAppContext()
  const [counter, setCounter] = useState(data?.filter((item) => item.video !== ''))

  const handleCompletedVideos = () => {
    saveVideosCompleted("data")
  }

  const handleIncompleteVideos = () => {
    toast.dismiss()
    toast.error('Debes grabar todos los videos')
  }

  return (
    <div className="App">

      <h1 className='home-title tracking-in-contract'>
        Video Cuestionario</h1>
      <VideoSlider />
      <div className="home-description">
        {
          data.every(question => question.video !== "") ?
            <button onClick={handleCompletedVideos} className="btn btn-success">Enviar</button> :
            <button onClick={handleIncompleteVideos} className="btn btn-disabled shake-vertical">Responde todas las preguntas</button>
        }
      </div>
    </div>
  )
}

export default ViewHome
