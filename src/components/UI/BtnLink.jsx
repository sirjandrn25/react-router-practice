import React from 'react'
import { Link } from 'react-router-dom'

const BtnLink = (props) => {
  const base_class = 'px-3 py-1 flex items-center  rounded-lg '
  return (
    <Link to={props.href} className={base_class + props.className}>
      {props.children}
    </Link>
  )
}

export default BtnLink
