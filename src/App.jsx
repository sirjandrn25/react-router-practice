import React from 'react'
import Navbar from './components/Navbar'
import QuotesContainer from './components/QuotesContainer'
import AddNewQuote from './components/AddNewQuote'

import { Switch, Route, Redirect } from 'react-router-dom'
import QuoteDetail from './components/QuoteDetail'

const App = () => {
  return (
    <div className='min-h-screen w-screen flex items-center justify-center bg-teal-50'>
      <header>
        <Navbar />
      </header>
      <main>
        <div className='w-[750px] mt-10 flex flex-col justify-center items-center h-auto p-5 '>
          <Switch>
            <Route path='/' exact>
              <Redirect to='quotes' />
            </Route>
            <Route path='/quotes' exact>
              <QuotesContainer />
            </Route>
            <Route path='/add-new-quote'>
              <AddNewQuote />
            </Route>
            <Route path='/quotes/:quoteId'>
              <QuoteDetail />
            </Route>
          </Switch>
        </div>
      </main>
    </div>
  )
}

export default App
