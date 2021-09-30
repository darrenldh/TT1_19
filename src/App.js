import './App.css'
import Dashboard from './components/Dashboard/main'
import Login from './components/Login/Login'
import React, {useState} from 'react'

function App() {
    const [token, setToken] = useState()

    if (!token) {
        return <Login setToken={setToken}/>
    }

    return (
        <div className='wrapper'>
            <h1>Application</h1>
            <Dashboard/>
        </div>
    )
}

export default App
