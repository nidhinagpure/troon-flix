import React from 'react'
import {BookmarkX as BookmarkXIcon} from "lucide-react"

function Model({title, isOpen, onClose, children}) {
   
    if(!isOpen){
       return null;
    }

  return (
    <div className='bg-gray-400/70 fixed top-0 left-0 w-full min-h-screen flex justify-center items-center'>
        <div className=' relative bg-white p-10 rounded-md '>
          <span className=' absolute top-5 right-4 bg-gray-300 rounded-full p-2'onClick={onClose}> <BookmarkXIcon className='h-6 w-6 cursor-pointer'/> </span>
          {children}

        </div>
    </div>
  )
}

export default Model