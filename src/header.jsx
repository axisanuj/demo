import React from 'react'

function header() {
  return (
    <div className='h-screen z-10 w-full relative pointer-events-none'>
      <div className="header w-full p-7">
        <h1 className='text-lg text-center opacity-60'>Documents.</h1>
      </div>
      <h1 className='font-bold opacity-50 text-[10vw] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>DOCS.</h1>
    </div>
  )
}

export default header