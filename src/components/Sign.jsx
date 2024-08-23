import React from 'react'
import "../styles/sign.css"
import { Link } from 'react-router-dom'

const Sign = () => {
  return (
    <>
    <div className='addUser'>
        <h3>Sign up</h3>
        <form className='addUserForm'>
            <div className='inputGroup'>
                <label htmlFor='name'>Name:</label>
                <input
                type='text'
                id='name'
                autoComplete='off'
                placeholder='Enter your name'
                />

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
               <button type="submit" class="btn btn-success">Sign up</button>

               <div className='login'>
                <p>Already have an account?</p>
                <Link to="/" type="submit" class="btn btn-primary">Login</Link>
               </div>

            </div>

        </form>

    </div>
    </>
  )
}

export default Sign