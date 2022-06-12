import { comments_api, quotes_api } from './urls'

export const fetchAllQuotes = async () => {
  const response = await fetch(quotes_api)
  if (!response.ok) {
    throw new Error('Could not fetch quotes')
  }
  return await response.json()
}

export const createQuoteRequest = async (data) => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }
  const response = await fetch(quotes_api, config)
  if (!response.ok) {
    throw new Error('Could not create quote')
  }
  return await response.json()
}

export const fetchSingleQuote = async (id) => {
  const response = await fetch(`${quotes_api}/${id}`)
  if (!response.ok) {
    throw new Error('Could not fetch quote')
  }
  return await response.json()
}

export const fetchCommentsByQuoteId = async (quote_id) => {
  const response = await fetch(`${comments_api}?quote=${quote_id}`)
  if (!response.ok) {
    throw new Error('Could not fetch comments')
  }
  return await response.json()
}

export const createCommentRequest = async (data) => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }
  console.log(config)

  const response = await fetch(comments_api, config)
  if (!response.ok) {
    throw new Error('Could not create comment')
  }
  return await response.json()
}
