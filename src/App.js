import logo from './logo.svg'
import './App.css'
import Dashboard from './components/Dashboard/dashboard'
import Preferences from './components/Preferences/Preferences'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './components/Login/Login'
import React, { useState } from 'react'

function App() {
  const [token, setToken] = useState()
  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className='wrapper'>
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path='/dashboard'>
            <Dashboard />
          </Route>
          <Route path='/preferences'>
            <Preferences />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
