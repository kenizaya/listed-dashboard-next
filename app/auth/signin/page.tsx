import React from 'react'
import Logo from '../components/Logo'
import SignIn from '../components/SignIn'

const SignInPage = () => {
  return (
    <div className='flex flex-col md:flex-row h-screen'>
      <div className='bg-black flex items-center justify-center min-h-[150px] md:w-2/5'>
        <Logo className='text-5xl md:text-7xl' />
      </div>
      <SignIn />
    </div>
  )
}

export default SignInPage
