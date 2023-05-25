import { useCallback, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { useVideoContext } from "../context/VideoContext";

export function useVideoManager() {
  const { id } = useParams()
  const {data, question, setQuestion } = useAppContext()
  const { recordingDuration, setRecordingDuration, status} = useVideoContext()

  useEffect(() => {
    setQuestion(data?.find((question) => question.id === parseInt(id)))
  }, [id, data])

  useEffect(() => {
    let intervalId;
    if (status === 'recording') {
      intervalId = setInterval(() => {
        setRecordingDuration((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [status]);

  useEffect(() => {
    const MAX_RECORDING_DURATION = 120; // 2 minutos
    if (recordingDuration === MAX_RECORDING_DURATION) {
      toast.error('Recording time exceeded 2 minutes')
    }
    if (recordingDuration > MAX_RECORDING_DURATION) {
      stop()
      toast.error('Recording time exceeded 2 minutes')
    }
  }, [recordingDuration])

  const restart = useCallback(() => {
    setRecordingDuration(0)
    setQuestion((prev) => (
      { ...prev, video: "" }
    ))
  }, [setRecordingDuration, setQuestion])
  
  const stop = useCallback(() => {
    setRecordingDuration(0)
  }, [setRecordingDuration])

  return {
    restart,
    stop,
    question
  }

}
