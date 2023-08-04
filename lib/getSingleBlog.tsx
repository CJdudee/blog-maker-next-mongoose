import React from 'react'

export default async function getSingleBlog(blogId: string) {
  
    const res = await fetch(`/api/blog/${blogId}`)

    if (!res.ok) throw new Error('id not found') 
    console.log(res)

    return res.json()

}
