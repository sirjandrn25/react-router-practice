import React from 'react'

const Button = (props) => {
  const base_class = 'px-3 py-1 rounded-lg '
  return (
    <button onClick={props.onClick} className={base_class + props.className}>
      {props.children}
    </button>
  )
}

export default Button
