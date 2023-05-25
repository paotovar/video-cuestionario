import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useVideoContext } from '../context/VideoContext';
import { useAppContext } from '../context/AppContext';

export function useVideoCapture() {

  const { setAnimate, recordingDuration, setStatus,setRecordingDuration} = useVideoContext()
  const {saveVideoDb} = useAppContext()
  const [stream, setStream] = useState(null);
  const [recording, setRecording] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const videoRef = useRef(null);

  useEffect(() => {
    recordingDuration >= 120 && stopRecording()
  }, [recordingDuration])

  useEffect(() => {
    setAnimate(false)
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        setStream(stream);
        const videoElement = videoRef.current;
        videoElement.srcObject = stream;
        const mediaRecorder = new MediaRecorder(stream, { mimeType: 'video/webm' });

        mediaRecorder.ondataavailable = function (e) {
          setRecordedChunks((prevChunks) => [...prevChunks, e.data]);
        };
        
        mediaRecorder.onstop = function () {
          const recordedBlob = new Blob(recordedChunks.slice(), { type: 'video/webm' });
          const videoUrl = URL.createObjectURL(recordedBlob);
        };
        setMediaRecorder(mediaRecorder);
      })
      .catch((error) => {
        console.error('Error accessing media devices.', error);
      });
  }, []);

  useEffect(() => {
    if (recordedChunks?.length > 0) {
      const recordedBlob = new Blob(recordedChunks, { type: 'video/webm' });
      const videoUrl = URL.createObjectURL(recordedBlob);
      setVideoUrl(videoUrl);
    }
  }, [recordedChunks]);

  const stopRecording = () => {
    stop()
    setRecording(!recording);
    setStatus("stop")
    mediaRecorder.stop();
    saveVideoDb("id", "video")
    console.log(recordingDuration);
  }

  const handleStartRecording = useCallback(() => {
    setAnimate(true)
    setStatus("recording")
    setVideoUrl(null);
    const mediaRecorder = new MediaRecorder(videoRef.current.srcObject, { mimeType: 'video/webm' });
    mediaRecorder.ondataavailable = function (e) {
      setRecordedChunks((prevChunks) => [...prevChunks, e.data]);
    };
    mediaRecorder.onstop = function () {
      const recordedBlob = new Blob(recordedChunks, { type: 'video/webm' });
      const videoUrl = URL.createObjectURL(recordedBlob);
      setVideoUrl(videoUrl);
    };
    setMediaRecorder(mediaRecorder);
    mediaRecorder.start();
    setRecording(true);
  }, []);

  const handleStopRecording = async () => {
    setRecordingDuration(0)
    stopRecording()
  };

  return {
    videoRef,
    stream,
    recording,
    setRecording,
    mediaRecorder,
    setMediaRecorder,
    recordedChunks,
    setRecordedChunks,
    videoUrl,
    setVideoUrl,
    handleStartRecording,
    handleStopRecording
  }

}
