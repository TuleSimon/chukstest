import React from 'react'

function BigButton(props) {
  return (
    <button disabled={props.disabled} onClick={props.onClick} className={`text-xl bg-primary h-16 text-white font-bold hover:bg-secondary transition-all  
    duration-1000 rounded px-4 mt-4 hover:translate-y-2 drop-shadow-2xl shadow-pink-600 shadow-2xl disabled:bg-gray-500 disabled:cursor-not-allowed
    hover:bg-primary ${props.styles && props.styles}
    `}>{props.children}</button>
  )
}

export default BigButton