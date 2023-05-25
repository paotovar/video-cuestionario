import React from 'react'
import { formatSeconds } from '../libraries/formatTime'
import { FaClock } from 'react-icons/fa';
import { useVideoContext } from '../context/VideoContext'


function TimeTracker() {
  const {animate,recordingDuration} = useVideoContext()
  return (
    <span className='time-video'>
      {formatSeconds(recordingDuration)} / 2:00
      <span className={
        animate ? 'clock clock-beat' : ' clock'
      }>
          <FaClock />
      </span>

    </span>
  )
}

export default TimeTracker
