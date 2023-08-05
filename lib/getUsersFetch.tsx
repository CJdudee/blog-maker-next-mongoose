import React from 'react'

export default async function getUsersFetch() {
    const res = await fetch('http://localhost:3000/api/blog')

    if (!res.ok) {

        throw new Error('fa8ilt to fetch')


    }

    return res.json()
}
