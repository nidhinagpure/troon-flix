import React from 'react'

function Model({title, isOpen, onClose}) {
   
    if(!isOpen){
       return null;
    }

  return (
    <div className='bg-gray-400/70 fixed top-0 left-0 w-full min-h-screen flex justify-center items-center'>
        <div className=' relative bg-white p-10 rounded-md '>
          <span className=' absolute top-2 right-2'onClick={onClose} >❌</span>

        </div>
    </div>
  )
}

export default Model