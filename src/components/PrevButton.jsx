import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { toast } from 'react-hot-toast'

function PrevButton() {
  const navigate = useNavigate()

  const handleBack = () => {
    toast.dismiss()
    navigate("/")
  }

  return (
    <button onClick={handleBack} className='btn btn-primary'>
      <AiOutlineArrowLeft />
      Volver
    </button>
  )
}

export default PrevButton
