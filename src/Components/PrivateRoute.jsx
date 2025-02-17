import React from 'react'
import { useAuth } from './Context/AuthProvider'
import {Outlet, Navigate} from 'react-router-dom'
export default function PrivateRoute() {
   
    const user = useAuth()
    if(!user)
        return<Navigate to='/login'/> // Redirect to login page if user is not logged in

    
  return (
    <div>
      <Outlet/>
    </div>
  )
}
