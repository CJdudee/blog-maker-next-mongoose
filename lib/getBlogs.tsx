import clientPromise from '@/app/context/mongodb'
import React from 'react'

export default async function getBlogs() {
    const client = clientPromise
    const db = (await client).db('test') 

    const blogs = await db.collection('blogposts').find().toArray()

    return blogs
}