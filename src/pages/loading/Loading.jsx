import React from 'react'
import ReactLoading from 'react-loading';

function Loading() {
  return (
    <div className="h-screen flex flex-row w-full place-items-center place-content-center"> 
         <ReactLoading type="cylon" color="#db2777" height="{'40%'}" width={'40%'} />
         <h1 className="text-2xl font-bold text-primary"> Loading </h1>
    </div>
  )
}

export default Loading