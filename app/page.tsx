import User from '@/models/User'
import Image from 'next/image'
import React from 'react'
import mongoRoute from './context/mongoroute'

import getBlogs from '@/lib/getBlogs'
import BlogObject from './components/BlogObject'
import getUsersFetch from '@/lib/getBlogsFetch'

//make sure to use await 

export default async function Home() {

const blogs = getBlogs()

const blogsArray = await blogs

// const blogsArray = await getUsersFetch()

// console.log(blogsArray)
// add props to get fresh data ????
//console.log(blogsArray)

  return (
    <div className='p-10 2xl:grid grid-cols-2 gap-5 '>
        {blogsArray.map((b: any): any => {
          return (
            <BlogObject key={b._id} {...b} />
          )
        })}
    </div>
  )
}

//serverComponentsExternalPackages: ['mongoose']
