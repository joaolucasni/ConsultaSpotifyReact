import React from 'react';
import '../styles/Login.css';

export const Login = () => {
  return (
    <div className='Body'>
    <div className='wrapper'> 
        <form action=''>
            <h1>Login</h1>
            <div className='input-box'>
                <input type="text" placeholder='Username' required/>
            </div>
            <div className='input-box'>
                <input type='password' placeholder='Password' required/>
            </div>

            <button className= "button" type='submit'>Login</button>
            <button className = "button" type='submit'>Register</button>

        </form>
    </div>
    </div>
  )
}



export default Login