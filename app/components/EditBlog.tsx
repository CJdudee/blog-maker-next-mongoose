'use client'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function EditBlog({title, content, _id}: any) {
    const router = useRouter()

    const [editTitle, setEditTitle ] = useState(title)
    const [editContent, setEditContent ] = useState(content)

    


    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        // const target = e.currentTarget

        // const title = target.elements.namedItem('title') as HTMLInputElement
        // const content = target.elements.namedItem('content') as HTMLInputElement

        const data = {
            title: editTitle,
            content: editContent,
            _id,
        }


        try {
            const response = await fetch('/api/blog', {
                method: "PATCH",
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


    async function handleDelete(e: any) {

        const data = {
            _id
        }

        try {
            const response = await fetch('/api/blog', {
                method: 'DELETE',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            if (!response.ok) throw new Error('erro with delete')
        } catch (error) {
            
            console.log('error')
        }
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
            value={editTitle}
            onChange={e => setEditTitle(e.target.value)}
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
            value={editContent}
            onChange={e => setEditContent(e.target.value)}
            className=''
            />
        </div>
        <button type='submit'>Send</button>
        <button onClick={handleDelete}>Delte post</button>
    </form>
  )

}
