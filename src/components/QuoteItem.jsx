import React from 'react'
import Card from './UI/Card'
import BtnLink from './UI/BtnLink'
import { useLocation } from 'react-router-dom'

const QuoteItem = (props) => {
  const location = useLocation()

  return (
    <Card className='bg-teal-300 flex flex-row justify-between items-center my-3'>
      <div className='flex flex-col'>
        <span className='text-2xl font-bold'>{props.quote.quote}</span>
        <span className='text-lg italic my-1'>{props.quote.author}</span>
      </div>
      <BtnLink
        href={`${location.pathname}/${props.quote.id}`}
        className='bg-teal-700 text-lg h-[48px] text-white font-semibold hover:bg-teal-800'>
        View Fullscreen
      </BtnLink>
    </Card>
  )
}

export default QuoteItem
