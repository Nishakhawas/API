import React from 'react'
import Login from './Components/login/Login'
import Dashboard from './Components/Dashboard'
import { Router,Routes, Route } from 'react-router-dom'
import AuthProvider from './Components/Context/AuthProvider'
function App() {

  return (
    <div>
      <Router>
        <AuthProvider>
        <Routes>
        <Route path ='/login' element={<Login/>}/>
         <Dashboard/>
 
  </Routes>
  </AuthProvider>
  </Router>
    </div>
  )
}

export default App
