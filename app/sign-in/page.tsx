import SigninBtns from '@/components/SigninBtns'
import React from 'react'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '../utils/auth'

const Signin = async () => {
  const session = await getServerSession(authOptions)

  if(session){
    redirect('/dashboard')
  }

  return (
    <SigninBtns/>
    
  )
}

export default Signin