import React, { useEffect, useState } from 'react'
import Button from './UI/Button'
import QuoteItem from './QuoteItem'
import { useHistory, useLocation } from 'react-router-dom'
import { fetchAllQuotes } from '../lib/api'
import useHttp from '../hooks/useHttp'

const data = [
  {
    id: 1,
    quote: 'this work !',
    user: 'sirjan',
  },
  {
    id: 2,
    quote: 'what is project',
    user: 'suraj',
  },
  {
    id: 3,
    quote: 'thomas go home',
    user: 'kumar',
  },
]

const sortQuotesHandler = (quotes, asc) => {
  if (asc) {
    return quotes.sort((a, b) => {
      return a.id - b.id
    })
  } else {
    return quotes.sort((a, b) => {
      return b.id - a.id
    })
  }
}

const QuotesContainer = () => {
  const { loading, sendHttpRequest, error, data: quotes } = useHttp(fetchAllQuotes)
  useEffect(() => {
    sendHttpRequest()
  }, [])

  const location = useLocation()
  const usp = new URLSearchParams(location.search)
  const history = useHistory()

  // console.log(location)

  const isAscending = usp.get('sort') === 'asc'

  const sortQuotes = sortQuotesHandler(quotes ? quotes : [], isAscending)
  // console.log(sortQuotes)
  const handleSort = () => {
    history.push({
      pathname: location.pathname,
      search: `?sort=${isAscending ? 'desc' : 'asc'}`,
    })
    // history.push(`${location.pathname}?sort=${isAscending ? 'desc' : 'asc'}`)
  }
  let renderContent = <p className='text-red-500'>{error}</p>
  if (loading) {
    renderContent = <p className='text-blue-500'>loading ......</p>
  }
  if (sortQuotes.length) {
    renderContent = sortQuotes.map((quote) => {
      return <QuoteItem quote={quote} key={quote.id} />
    })
  }

  return (
    <div className='w-[750px] flex flex-col h-auto p-5 '>
      <Button
        onClick={handleSort}
        className='border-2 border-teal-500 text-teal-400 w-[180px] h-[50px] text-lg font-bold hover:bg-teal-400 hover:text-white'>
        Sort {isAscending ? 'Descending' : ' Ascending'}
      </Button>
      <hr className='bg-teal-500 border-2 my-3 border-teal-300' />

      <div className='w-full'>{renderContent}</div>
    </div>
  )
}

export default QuotesContainer
