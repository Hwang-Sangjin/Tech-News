import CreatePostForm from '@/components/CreatePostForm'
import React from 'react'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '../utils/auth'

const  CreatePost = async () => {
  const session = await getServerSession(authOptions)

  if(!session){
    redirect("/sign-in")
  }

  return (
    <CreatePostForm/>
  )
}

export default CreatePost