import React, { useEffect } from 'react'
import { Route, useHistory, useLocation, useParams, useRouteMatch } from 'react-router-dom'
import Card from './UI/Card'
import BtnLink from './UI/BtnLink'
import Comment from './Comment'
import { fetchSingleQuote } from '../lib/api'
import useHttp from '../hooks/useHttp'

const QuoteDetail = () => {
  const params = useParams()
  const match = useRouteMatch()
  const { quoteId } = params

  const { sendHttpRequest, loading, error, data } = useHttp(fetchSingleQuote)
  useEffect(() => {
    sendHttpRequest(quoteId)
  }, [])

  let renderContent = <p className='text-red-500'>{error}</p>
  if (data) {
    renderContent = (
      <Card className='bg-black flex flex-col w-[500px] justify-center items-center my-5'>
        <span className='text-3xl font-bold my-5 text-white w-full text-left'>{data.quote}</span>
        <span className='text-teal-400 italic text-lg text-right w-full'>{data.author}</span>
      </Card>
    )
  }
  if (loading) {
    renderContent = <p className='text-xl text-blue-600'>loading...</p>
  }

  return (
    <div>
      {renderContent}
      <BtnLink href={`${match.url}/comments`} className='bg-purple-800 text-white w-[140px]'>
        load comments
      </BtnLink>
      <Route path={`${match.url}/comments`}>
        <Comment quoteId={quoteId} />
      </Route>
    </div>
  )
}

export default QuoteDetail
