'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { signIn } from 'next-auth/react'
import { LoginInButton, GoogleSignInButton } from '../Button/authButton'


export default function LogInForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const router = useRouter()

  const isValidEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+[A-Z]{2,}$/i
    return emailRegex.test(email)
  }
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    // console.log('handleSubmit')

    if (!email || !password) {
      setError('All fields are required!')
      return
    }
    if (!isValidEmail(email)) {
      setError('Email is invalid!')
      return
    }
    if (!password || password.length < 8) {
      setError('Password in invalid!')
      return
    }

    try {
      const singInRes = await signIn('credentials', {
        email,
        password,
        redirect: false,
      })
      // console.log(singInRes)
      if (singInRes?.error) {
        setError('Invalid credentials')
        return
      }
      router.replace('/profile')
    } catch (error) {
      console.log('Error during logIn', error)
    }
  }

  return (
    <>
      <form className="text-blue_text text-end" autoComplete="off" onSubmit={handleSubmit}>
        <label className="flex w-full h-9 mb-4">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            name="email"
            placeholder="Email"
            required
            className="w-full text-medium font-normal placeholder:text-blue_text outline-none outline-transparent border-b border-blue_text hover:border-orange hover:text-orange"
          />
        </label>
        <label className="flex w-full h-9">
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            placeholder="Password"
            required
            className="w-full bg-transparent text-medium font-normal placeholder:text-blue_text outline-none border-b border-blue_text  hover:border-orange hover:text-orange"
          />
        </label>
        <span className="text-xs font-light text-grey_text text-end">Forgot password?</span>
        <div className="flex justify-center items-center">
          <LoginInButton handleClick={handleSubmit}/>
          {/* <LoginInButton /> */}
        </div>
        {error && <div className="text-error text-xs font-bold text-start">{error}</div>}
        <div className="flex justify-between items-center gap-3 w-full">
          <div className="h-px bg-blue_text w-full"></div>
          <span className="text-xs">OR</span>
          <div className="h-px bg-blue_text w-full"></div>
        </div>
      </form>
      <div className="flex justify-center items-center my-3 gap-6">
        <GoogleSignInButton title={'Log In with Google'} />
      </div>
    </>
  )
}