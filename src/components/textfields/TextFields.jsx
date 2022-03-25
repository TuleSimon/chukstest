import React from 'react'

function TextFields(props) {
  return (
    <input className="p-4 outline-0 border-2 rounded-lg w-full grow" 
    name={props.name} placeholder={props.placeholder} value={props.value} type={props.type}
    onChange={e => props.setValue(e.target.value)}/>
  )
}

export default TextFields