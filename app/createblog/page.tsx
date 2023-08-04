'use client'


import { useRouter } from 'next/navigation'
import React from 'react'

export default function NewUser() {

    const router = useRouter()

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const target = e.currentTarget

        const title = target.elements.namedItem('title') as HTMLInputElement
        const content = target.elements.namedItem('content') as HTMLInputElement

        const data = {
            title: title.value,
            content: content.value
        }


        try {
            const response = await fetch('/api/blog', {
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

        router.push('/')

    }

  return (
    <form onSubmit={handleSubmit} className='bg-white p-10'>
        <div className='mb-4'>
            <label className='label-form' htmlFor='title'>
                title
            </label>
            <input 
            id='title'
            type='text'
            name='title'
            required
            minLength={3}
            />
        </div>

        <div className='mb-4'>
            <label className='' htmlFor='content'>
                content
            </label>
            <input 
            id='content'
            type='content'
            name='content'
            className=''
            />
        </div>
        <button type='submit'>send</button>
    </form>
  )
}
