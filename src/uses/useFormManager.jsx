import React, { useCallback, useState } from 'react'
import { useAppContext } from '../context/AppContext'

export function useFormManager() {

  const { data: dataContext, setData } = useAppContext()
  const [show, setShow] = useState(false)
  const [inputId, setInputId] = useState()


  const handleInputId = useCallback((id) => {
    console.log(id);
    setInputId(id)
  }, [setInputId])

  const handleClick = () => {
    setShow(!show)
  }

  const handleAddQuestion  = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)
    if (!data?.question?.length) return toast.error("Completa la pregunta")
    const newQuestion = { ...data, id: dataContext.length + 1, video: "" }
    setData((prev) => {
      return [...prev, newQuestion]
    })
    setShow(!show)
  }

  const handleChange = (e) => {
    console.log(inputId);
    setData((prev) => {
      let dataChange = prev.find((item) => item.id === parseInt(inputId))
      const newDataChange = { ...dataChange, question: e.target.value }
      const newPrev = prev.filter((item) => {
        return item.id !== parseInt(inputId)
      })
      return [...newPrev, newDataChange]
    })
  }

  return {
    handleInputId,
    handleChange,
    handleClick,
    handleAddQuestion ,
    show
  }
}

