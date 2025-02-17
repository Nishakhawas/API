import React from 'react'
import Login from './Components/login/Login'
import Dashboard from './Components/Dashboard'
import {   BrowserRouter ,Routes, Route } from 'react-router-dom'
import AuthProvider from './Components/Context/AuthProvider'
import PrivateRoute from './Components/PrivateRoute'
function App() {

  return (
    <div>
      
        <AuthProvider>
        <Routes>
        <Route path ='/' element={<Login/>}/>
        <Route element={<PrivateRoute/>}>
<Route path='/dashboard' element={<Dashboard/>}/>
        </Route>
  </Routes>
  </AuthProvider>
  
    </div>
  )
}

export default App
