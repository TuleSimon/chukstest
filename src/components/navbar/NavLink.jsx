import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

function NavLink(props) {

    let resolved = useResolvedPath(props.to);
    let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link className={`min-w-20 font-bold ${match ? "bg-primary text-white": "text-black"} 
    font-weight-700 hover:bg-primary hover:text-white text-sm md:text-md p-1 md:px-4 px-2 rounded truncate`} 
    to={props.to}>
      {props.title}</Link>
  )
}

export default NavLink