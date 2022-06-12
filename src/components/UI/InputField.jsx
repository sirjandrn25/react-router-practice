import React from 'react'

const InputField = (props) => {
  return (
    <div className='flex flex-col w-full my-3'>
      <label className='text-gray-600 mb-1 font-bold'>{props.label}</label>
      <input
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        className='p-2 text-gray-500 rounded-lg focus:outline-none focus:border-teal-300 border-2'
        required={true}
      />
    </div>
  )
}

export default InputField
