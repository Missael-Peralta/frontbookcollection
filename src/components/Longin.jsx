import React from 'react'
import "../styles/login.css"
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
    <div className='addUser'>
        <h3>Sign in</h3>
        <form className='addUserForm'>
            <div className='inputGroup'>

                <label htmlFor='email'>Email:</label>
                <input
                type='email'
                id='email'
                autoComplete='off'
                placeholder='Enter your email'
                />

                <label htmlFor='password'>Password:</label>
                <input
                type='password'
                id='password'
                autoComplete='off'
                placeholder='Enter your password'
                />
               <button type="submit" class="btn btn-success">Sign in</button>

               <div className='login'>
                <p>Already have an account?</p>
                <Link to='sign' type="submit" class="btn btn-primary">Sign up</Link>
               </div>
            </div>
        </form>
    </div>
    </>
  )
}

export default Login