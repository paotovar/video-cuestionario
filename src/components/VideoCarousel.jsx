import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext';

import { responsive } from '../libraries/valueslider';
import LoaderContent from './ContentLoader'

import Carousel from "react-multi-carousel";
import VideoItem from './VideoItemCard';

function VideoCarousel() {
  const { data } = useAppContext();
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false)
  }, 500)

  return (
    <Carousel
      infinite
      shouldResetAutoplay
      rewind={false}
      swipeable
      containerClass="container-carousel"
      responsive={responsive}>
      {
        loading ?
          data.map((question) => {
            return (
              <div className="video-item skeleton" key={question.id}  >
                <LoaderContent />
              </div>
            )
          }) :
          data.map((question) => {
            return (
              <VideoItem question={question} key={question.id} />
            )
          })
      }
    </Carousel>
  )
}

export default VideoCarousel
