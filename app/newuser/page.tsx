'use client'

import { Router } from 'next/router'
import React from 'react'

export default function NewUser() {

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const target = e.currentTarget

        const username = target.elements.namedItem('username') as HTMLInputElement
        const password = target.elements.namedItem('password') as HTMLInputElement

        const data = {
            username: username.value,
            password: password.value
        }


        try {
            const response = await fetch('/api/contact', {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            if (!response.ok) {
                throw new Error('error with post')
            }
        } catch (error) {
            console.log('problem with post')
        }

        

    }

  return (
    <form onSubmit={handleSubmit} className='bg-white p-10'>
        <div className='mb-4'>
            <label className='label-form' htmlFor='username'>
                username
            </label>
            <input 
            id='username'
            type='text'
            name='username'
            required
            minLength={3}
            />
        </div>

        <div className='mb-4'>
            <label className='' htmlFor='password'>
                Password
            </label>
            <input 
            id='password'
            type='password'
            name='password'
            className=''
            />
        </div>
        <button type='submit'>send</button>
    </form>
  )
}
