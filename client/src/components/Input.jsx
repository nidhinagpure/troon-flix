import React from 'react'

function Input({placeholder, onChange, type, value,size="md", lable=""}) {

       const SIZE_CLASSES = {
        sm:"text-sm py-1 px-2  rounded-sm mb-4",
        md:"text-md py-2 px-2 rounded-md mb-4 ",
        lg:"text-lg py-3 px-6 rounded-lg mb-4"
       }



  return (
    <>
    {lable ? <lable>{lable}</lable>:null}
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
        size={size}
      }}
      className={`text-md border-2 border-gray-300 w-full cursor-pointer ${SIZE_CLASSES[size]}`}

    
    />
    
    </>
  )
}

export default Input