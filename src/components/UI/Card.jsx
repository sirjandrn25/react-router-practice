import React from 'react'

const Card = (props) => {
  const base_class = 'rounded-lg p-5 shadow-lg '

  return <div className={base_class + props.className}>{props.children}</div>
}

export default Card
