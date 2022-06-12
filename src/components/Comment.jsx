import React, { useCallback, useEffect } from 'react'

import { fetchCommentsByQuoteId } from '../lib/api'
import useHttp from '../hooks/useHttp'
import AddComment from './AddComment'

const Comment = ({ quoteId }) => {
  const { sendHttpRequest, loading, error, data: comments } = useHttp(fetchCommentsByQuoteId)
  useEffect(() => {
    sendHttpRequest(quoteId)
  }, [sendHttpRequest])

  const afterAddComment = useCallback(() => {
    sendHttpRequest(quoteId)
  }, [])

  let renderCommentsContent = <p className='text-red-500'>{error}</p>
  if (comments) {
    renderCommentsContent = (
      <ul className='w-full'>
        {comments.map((comment) => {
          return (
            <li className='text-xl font-medium my-3 border-b-2' key={comment.id}>
              {comment.text}
            </li>
          )
        })}
      </ul>
    )
  }
  if (loading) {
    renderCommentsContent = <p className='text-sky-500'>loading comments .......</p>
  }
  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <div className='w-full my-5 flex flex-col justify-center items-center'>
        <h1 className='text-2xl font-bold'>User Comments</h1>
        {renderCommentsContent}
      </div>
      <AddComment onAddNewComment={afterAddComment} quoteId={quoteId} />
    </div>
  )
}

export default Comment
