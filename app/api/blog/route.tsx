import { NextRequest, NextResponse } from 'next/server';
import React from 'react'
import mongoose from 'mongoose';
import User from '@/models/User'
import Blogpost from '@/models/Blogpost'
import clientPromise from '@/app/context/mongodb';
import mongoRoute from '@/app/context/mongoroute';
import getUsers from '@/lib/getUsers';


export async function GET(request: NextRequest, response: NextResponse) {

    // const client =  clientPromise
    // const db = (await client).db('test') 

    // const users = await db.collection('users').find().toArray()

    const users = getUsers()

    return NextResponse.json(users)

 
 
}

export async function PATCH(request: NextRequest, res: NextResponse) {

    const client = await mongoRoute()

    const data = await request.json()

    const { title, content, _id } = data

    if (title === '' || content === '') {
        return NextResponse.json('you cant have a blank title or content')


    }

    const post = await Blogpost.findById(_id).exec()

    
    if(!post) return NextResponse.json('error with bullshit this is all bullshit')


    // const reqData = {
    //     title,
    //     content
    // }

    // const updatedPost = await Blogpost.updateOne({_id, reqData })

    post.title = title
    post.content = content

     const savedPost = await post.save()

    if(savedPost) {
        return NextResponse.json('post was updated')
    } else {
        return NextResponse.json('didnt save')
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


export async function DELETE(request: NextRequest) {

    const client = await mongoRoute()

    const data = await request.json()

    const {_id} = data

    if (!_id) return NextResponse.json('no id')

    try {
        
        const deletedPost = await Blogpost.findOneAndDelete(_id).exec()
        
        return NextResponse.json('post is deleted')
    } catch (error) {
        return NextResponse.json('post was not deleted')
    }
}