import React, { useEffect } from 'react'
import './App.css'
import Header from './Header'
import Home from './Home.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Checkout from './Checkout'
import Payment from './Payment'
import Login from './Login'
import { auth } from './firebase'
import { useStateValue } from './StateProvider'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const promise = loadStripe(
  'pk_test_51J6DhISElxca3KOypKCgKCeloNBUqnFKTvtaxWAoSf9siDPToAufptjLQzBFCQMNATQi90BfiUG09oJh67r8EHio00OUUIEEQ6'
)

function App() {
  const [{}, dispatch] = useStateValue()

  useEffect(() => {
    // will only run once when app component runs
    auth.onAuthStateChanged((authUser) => {
      console.log('The user is >>', authUser)

      if (authUser) {
        // user logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      } else {
        //user logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
  }, [])

  return (
    //BEM
    <Router>
      <div className='app'>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
