import { NextRequest, NextResponse } from 'next/server';
import React from 'react'
import mongoose from 'mongoose';
import User from '@/models/User'
import Blogpost from '@/models/Blogpost'
import clientPromise from '@/app/context/mongodb';
import mongoRoute from '@/app/context/mongoroute';


export async function GET(request: NextRequest, response: NextResponse) {

    const client =  clientPromise
    const db = (await client).db('test') 

    const users = await db.collection('users').find().toArray()

    return NextResponse.json(users)

 
 
}

export async function PATCH(request: NextRequest, res: NextResponse) {

    const client = await mongoRoute()

    const data = await request.json()

    const { title, content, id } = data

    if (title === '' || content === '') {
        return NextResponse.json('you cant have a blank title or content')


    }

    const post = Blogpost.findById(id)

    post.title = title
    post.content = content
    post.updatedAt = new Date()

    const savedPost = post.save()

    if(savedPost) {
        NextResponse.json('post was updated')
    } else {
        NextResponse.json('didnt save')
    }
    

    
}


export async function POST(request: NextRequest, res: NextResponse) {
    

    const client = await mongoRoute()

    const data = await request.json()

    const {title, content } = data

    if (!title || !content) {
        return NextResponse.json('hey there no name')


     }

    const newData = {
        title,
        content
    }


    try {
        await Blogpost.create(newData)
        console.log('you did it')
        return NextResponse.json('passed')
    } catch (error) {
        console.log(error, 'error with send data')
    }


}