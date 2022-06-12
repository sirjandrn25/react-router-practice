import React, { useCallback, useEffect, useRef, useState } from 'react'
import TextArea from './UI/textArea'
import Button from './UI/Button'
import useHttp from '../hooks/useHttp'
import { createCommentRequest } from '../lib/api'

const AddComment = (props) => {
  const { sendHttpRequest, error, loading, data: comment } = useHttp(createCommentRequest)

  const textRef = useRef()
  const { onAddNewComment } = props
  useEffect(() => {
    if (!loading && comment) {
      onAddNewComment()
    }
  }, [error, comment, onAddNewComment])

  const submitHandler = useCallback((e) => {
    e.preventDefault()
    console.log('submit handler')

    sendHttpRequest({ text: textRef.current.value, quote: props.quoteId })
  }, [])

  return (
    <div className='flex flex-col w-full'>
      <form action='' onSubmit={submitHandler} className='w-full mt-5'>
        <div className='w-full'>
          <textarea
            ref={textRef}
            placeholder='your comment'
            className='p-2 text-gray-500 h-[120px] w-full rounded-lg focus:outline-none focus:border-teal-300 border-2'
          />
        </div>

        <Button className='text-xl font-medium h-[45px] text-white bg-teal-700 mt-3 hover:bg-teal-800'>
          {loading ? 'loading....' : 'Add Commment'}
        </Button>
      </form>
    </div>
  )
}

export default AddComment
