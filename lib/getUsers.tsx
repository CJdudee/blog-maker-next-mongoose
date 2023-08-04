import clientPromise from '@/app/context/mongodb'
import React from 'react'

export default async function getUsers() {
    const client = clientPromise
    const db = (await client).db('test') 

    const users = await db.collection('users').find().toArray()

    return users
}
