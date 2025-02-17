import React, { createContext } from 'react'
import { useState,useContext } from 'react'
import { useNavigate } from 'react-router-dom'


const AuthContext = createContext()

export default function AuthProvider({children}) {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  //Function to login user
  const login = (email, password) => {
    setUser({email, password}) // store user data in state
    localStorage.setItem('user', JSON.stringify({email,password})) // store user data in local storage
    navigate('/dashboard')

    alert('User logged in')
  }
// const loginAction = async(data)=>{

//   try{
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
//       method:'POST',
//       body:JSON.stringify(data),
//       headers:{
//         'Content-type':'application/json'
//       },
     
//     })
//     alert ('User logged in')
//     const resData = await response.json()
//     if (resData){
//       setUser(resData)
//       // navigate('/dashboard')
//     }
   
//     console.log(resData)
//   }catch(error){
//     console.log(error)
//   }
// }

const logout = () => {
  setUser(null)
  alert('User logged out')
  navigate('/')

}
return(
<AuthContext.Provider value={{user,login,logout}}>{children}</AuthContext.Provider>

)
 
}
// Custom Hook to use AuthContext
export const useAuth =() => {
  return useContext(AuthContext)}