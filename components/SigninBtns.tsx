'use client'

import Image from 'next/image'
import React from 'react'
import { signIn } from 'next-auth/react'

const SigninBtns = () => {
  return (
    <>
        <h1 className='text-center mt-8'>
            Sign in
        </h1>
        <div className='mt-4 p-4 flex flex-col items-center justify-center gap-4'>
            <button onClick={() => signIn('github')} className='flex items-center border p-4 rounded-full gap-4 hover:bg-slate-100/25 transition'>
                <span>
                    <Image 
                        src={"/github-logo.svg"}
                        width={30}
                        height={30}
                        alt='Github'
                    />
                </span>
                Sign In with GitHub
            </button>

            <button onClick={() => signIn('google')} className='flex items-center border p-4 rounded-full gap-4 hover:bg-slate-100/25 transition'>
                <span>
                    <Image 
                        src={"/google-logo.svg"}
                        width={30}
                        height={30}
                        alt='Google'
                    />
                </span>
                Sign In with Google
            </button>
        </div>
    </>
    
  )
}

export default SigninBtns