import React, { createContext } from 'react'
import { useState,useContext } from 'react'
const AuthContext = createContext()

export default function AuthProvider({children}) {
  const [user, setUser] = useState(null)
  //Function to login user
  const login = (email, password) => {
    setUser({email, password}) // store user data in state
    alert('User logged in')
  }
const loginAction = async(data)=>{
  try{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
      method:'POST',
      body:JSON.stringify(data),
      headers:{
        'Content-type':'application/json'
      }
    })
    const resData = await response.json()
    console.log(resData)
  }catch(error){
    console.log(error)
  }
}
return(
<AuthContext.Provider value={{user,login,loginAction}}>{children}</AuthContext.Provider>

)
 
}
// Custom Hook to use AuthContext
export const useAuth =() => {
  return useContext(AuthContext)}