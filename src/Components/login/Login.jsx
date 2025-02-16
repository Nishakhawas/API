import React from 'react'
import { useState } from 'react'
import { useAuth } from '../Context/AuthProvider'
export default function Login() {
    const {loginAction} = useAuth() // Get login function from AuthProvider
const [input, setInput] = useState({
    email: '',
    password: ''})

    const handleSubmit = (e) => {
        e.preventDefault()
        if (input.email !=="" && input.password !=="") {
            loginAction(input)
            return
        }
        
            alert('Please provide a valid input')
           
    }
        
       
    const handleInputChange = (e) => {
        const { name, value } = e.target;
    
        // Update only the field that has changed (email or password)
        setInput((prevInput) => ({
          ...prevInput, // Spread the previous state
          [name]: value, // Dynamically set the key to the updated value
        }));
      };
    return (
        <form action="" onSubmit={handleSubmit} >
            <div className=''>
                <div className='form-control '>
                    <label htmlFor="user-email ">Email:</label>
                    <input type="email"
                        id='email'
                        name='email'
                        placeholder='example@gmail.com'
                        aria-describedby='user-email'
                        aria-invalid='false'
                        className='w-20'
                        value={input.email}
                        onChange={handleInputChange}
                    />
                    <div id='user-email' className='sr-only'>Please enter a valid email</div>

                </div>
                <div className='form_control'>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" aria-describedby='user-password' aria-invalid='false'  value={input.password} onChange={handleInputChange}/>
                    <div id='user-password'>Your password should be more than 8 characters</div>
                </div>
                <button className='btn-submit'>Submit</button></div>
        </form>
    )
}
