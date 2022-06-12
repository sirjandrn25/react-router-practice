import React, { useState } from 'react'
import Button from './UI/Button'
import Card from './UI/Card'
import InputField from './UI/InputField'
import TextArea from './UI/textArea'
import { createQuoteRequest } from '../lib/api'
import useHttp from '../hooks/useHttp'
import { useHistory } from 'react-router-dom'

const AddNewQuote = () => {
  const { sendHttpRequest, loading, error, data } = useHttp(createQuoteRequest)
  const history = useHistory()
  const [author, setAuthor] = useState('')
  const [quote, setQuote] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()

    sendHttpRequest(
      createQuoteRequest({
        author,
        quote,
        id: Math.floor(Math.random() * 1000),
      })
    )
  }
  if (!loading && data) {
    history.push('/quotes')
  }

  const quoteChangeHandler = (e) => {
    setQuote(e.target.value)
  }
  const authorChangeHandler = (e) => {
    setAuthor(e.target.value)
  }

  return (
    <Card className='bg-white w-full'>
      <form onSubmit={submitHandler} action='' className='w-full'>
        <InputField onChange={authorChangeHandler} value={author} type='text' label='Author' required={true} />
        <TextArea onChange={quoteChangeHandler} value={quote} label='Text' className='h-[200px]' required={true} />

        <Button className='bg-teal-700 my-3 hover:bg-teal-800 font-bold text-lg h-[45px] text-white'>
          {loading ? 'sending...' : 'Add Quote'}
        </Button>
      </form>
      {!loading && error && <p className='text-red-500'>{error}</p>}
    </Card>
  )
}

export default AddNewQuote
