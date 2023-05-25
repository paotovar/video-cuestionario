import React, { useCallback, useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

export function useButtonPage() {
  const {id} = useParams()
  const { data } = useAppContext()
  const navigate = useNavigate()
  const len = useMemo(() => data?.length, [data]);
  
  const handleNext = useCallback(() => {
    if (parseInt(id) === len) return navigate('/video/1')
    navigate(`/video/${parseInt(id) + 1}`)
  }, [id, len, navigate]);

  const handleBack = useCallback(() => {
    if (parseInt(id) === 1) return navigate(`/video/${len}`)
    navigate(`/video/${parseInt(id) - 1}`)
  }, [id, len, navigate]);

  return {
    handleNext,
    handleBack,
  }
}



