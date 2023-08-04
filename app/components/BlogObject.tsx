import React from 'react'

export default function BlogObject({title, content, createdAt }: any) {

    const madeAt = new Date(createdAt).toLocaleDateString('en-us', {weekday: "long", year: 'numeric', month: 'short', day: 'numeric'} )
    console.log(madeAt)
  return (
    <div className='bg-amber-500 text-center p-10 rounded-md'>
        <h2 className='text-2xl text-start mb-5 '>{title}</h2>
        <div className='outline p-10'>

        <p>{content}</p>
        <p>{madeAt}</p>
        </div>
    </div>
  )
}
