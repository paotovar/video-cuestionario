
import PageHome from './views/ViewHome'
import LoaderPage from './components/LoaderPage'
import PageVideo from './views/ViewVideo'
import { Toaster } from 'react-hot-toast'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)

  if (loading) {
    setTimeout(() => {
      setLoading(false)
    }, 1500)
    return <LoaderPage />
  }

  return (
    <>
      <Routes>
        <Route path='/' element={<PageHome />} />
        <Route path='/video/:id' element={<PageVideo />} />
      </Routes>
      <Toaster />
    </>
  )
}

export default App
