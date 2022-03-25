import React from 'react'

function Divider(props) {
  return (
    <hr className={`gradient_bg w-8 h-2 rounded-xl drop-shadow-xl shadow-pink-600 shadow-xl ${props.style}`}/>
  )
}

export default Divider