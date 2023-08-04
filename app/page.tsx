import User from '@/models/User'
import Image from 'next/image'
import React from 'react'
import mongoRoute from './context/mongoroute'
import getUsers from '@/lib/getUsers'
import getBlogs from '@/lib/getBlogs'
import BlogObject from './components/BlogObject'

//make sure to use await 

export default async function Home() {

const blogs =  getBlogs()

const blogsArray = await blogs

console.log(blogsArray)

  return (
    <div className='p-10 text-2xl'>hey
        {blogsArray.map((b): any => {
          return (
            <BlogObject key={b._id} {...b} />
          )
        })}
    </div>
  )
}

//serverComponentsExternalPackages: ['mongoose']
