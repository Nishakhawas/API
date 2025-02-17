import React, { createContext, use } from 'react'
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
    alert ('User logged in')
    const resData = await response.json()
    if (resData){
      setUser(resData.user)
    }
    console.log(resData)
  }catch(error){
    console.log(error)
  }
}

const logout = () => {
  setUser(null)
  alert('User logged out')
  // navigate('/login')

}
return(
<AuthContext.Provider value={{user,login,loginAction,logout}}>{children}</AuthContext.Provider>

)
 
}
// Custom Hook to use AuthContext
export const useAuth =() => {
  return useContext(AuthContext)}