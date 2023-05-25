import React from 'react'
import { ClipLoader } from 'react-spinners';

function LoaderPage() {
  return (
    <div className='loader'>
      {
      <ClipLoader size={50} color={'#f18e5c'} />}
    </div>
  )
}

export default LoaderPage

