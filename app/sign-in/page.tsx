import SigninBtns from '@/components/SigninBtns'
import React from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

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