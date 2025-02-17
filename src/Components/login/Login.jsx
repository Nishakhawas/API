import React from 'react'
import { useState } from 'react'
import { useAuth } from '../Context/AuthProvider'
export default function Login() {
    const { login } = useAuth() // Get login function from AuthProvider
    const [input, setInput] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        if (input.email !== "" && input.password !== "") {
            login(input) // Call login function from AuthProvider
            console.log(input)
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
            <div className='my-10 mx-auto flex flex-col items-center justify-center  gap-4 max-w-xl h-auto bg-gray-200 p-4 rounded-md'>
                <div className='form-control '>
                    <label htmlFor="user-email ">Email:</label>
                    <input type="email"
                        id='email'
                        name='email'
                        placeholder='example@gmail.com'
                        aria-describedby='user-email'
                        aria-invalid='false'
                        className='w-96 bg-white outline-none border border-gray-400 p-2 rounded-md'
                        value={input.email}
                        onChange={handleInputChange}
                    />
                    <div id='user-email' className='text-right text-sm'>Please enter a valid email</div> 

                </div>
                <div className='form_control'>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" aria-describedby='user-password' aria-invalid='false' value={input.password} onChange={handleInputChange} className='w-96 bg-white outline-none border border-gray-400 p-2 rounded-md' />
                    <div id='user-password' className='text-right text-sm'>Your password should be more than 8 characters</div>
                </div>
                <button className='btn-submit bg-green-200 p-2 rounded-md cursor-pointer hover:bg-green-300'>Login</button>
              
            </div>
        </form>
    )
}
