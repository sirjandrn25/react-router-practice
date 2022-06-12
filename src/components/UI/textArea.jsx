import React from 'react'

const TextArea = (props) => {
  const base_class = 'p-2 text-gray-500 rounded-lg focus:outline-none focus:border-teal-300 border-2 '
  return (
    <div className='w-full flex flex-col'>
      <label className='text-gray-600 mb-1 font-bold'>{props.label}</label>
      <textarea
        value={props.value}
        onChange={props.onChange}
        ref={props.ref}
        name=''
        id=''
        className={base_class + props.className}
        cols='30'
        rows='10'
        required={true}
      />
    </div>
  )
}

export default TextArea
