import React from 'react';
import { useNavigate } from 'react-router-dom';
import VideoPlayer from './VideoDisplay';
import { PlayCircleOutline } from '@mui/icons-material';

function VideoItemCard({ question }) {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/video/${id}`);
  };

  return (
    <div className="video-item" onClick={() => handleClick(question.id)}>
      <picture className="video-item-container">
        {question.video.length > 0 ? (
          <VideoPlayer url={question?.video} />
        ) : (
          <PlayCircleOutline className="video-placeholder" style={{ fontSize: '5rem' }}/>
        )}
      </picture>
      <p className="video-question">
        <span className="question-bold"># {question?.id} </span>
        {question.question}
      </p>
    </div>
  );
}

export default VideoItemCard;



