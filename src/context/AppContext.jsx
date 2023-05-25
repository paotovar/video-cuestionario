import { createContext, useContext, useEffect, useState } from "react";
import { questions } from "../database/database";
import { toast } from "react-hot-toast";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

  const [data,setData] = useState(questions)
  const [question, setQuestion] = useState({})

  const saveVideosCompleted = (data) => {
    toast.success('Videos enviados')
  }

  const saveVideoDb = (userId, questionId,urlVideo) => {
    toast.success('Video guardado')
  }

  return (
    <AppContext.Provider value={{data,setData,question, setQuestion, saveVideosCompleted, saveVideoDb}}>
      {children}
    </AppContext.Provider>)
}

export const useAppContext = () => {
  return useContext(AppContext);
}
