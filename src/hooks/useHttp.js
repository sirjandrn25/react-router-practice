import React, { useCallback, useReducer } from 'react'

const initialState = {
  loading: false,
  data: null,
  error: '',
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'sending':
      return {
        data: null,
        error: '',
        loading: true,
      }
    case 'success':
      return {
        error: '',
        status: false,
        data: action.payload,
      }
    case 'failed':
      return {
        error: action.payload,
        data: null,
        loading: false,
      }
    default:
      return state
  }
}

const useHttp = (httpRequestFunc) => {
  const [httpState, dispach] = useReducer(reducer, initialState)

  const sendHttpRequest = useCallback(
    async (config) => {
      dispach({ type: 'sending' })

      try {
        const responseData = await httpRequestFunc(config)

        dispach({ type: 'success', payload: responseData })
      } catch (error) {
        dispach({ type: 'failed', payload: error.message || 'something went wrong' })
      }
    },
    [httpRequestFunc]
  )

  return {
    ...httpState,
    sendHttpRequest,
  }
}

export default useHttp
