import React from 'react'

const page = () => {
  return (
    <div className='flex'>
        <div className="w-1/2 h-screen bg-slate-600">
            Hello
        </div>
        <div className="w-1/2 h-screen bg-[url(/signUp.jpg)] bg-cover">
            Sign Up
        </div>    
    </div>
  )
}

export default page