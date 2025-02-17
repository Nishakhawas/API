import React from 'react'
import { useAuth } from './Context/AuthProvider'

export default function Dashboard() {
  const { logout} = useAuth();
  return (
    <div className='flex justify-center items-center flex-col gap-4 ' >
      <h2> Hello from dashboard </h2>   
      <div className='flex justify-center items-center gap-4'>
      <button  onClick={()=>logout()}className='btn-submit bg-green-200 p-2  rounded-md'>logout</button>
      </div>   
    </div>
  )
}
