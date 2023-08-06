import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className='bg-amber-400 text-start p-2 pl-6 flex justify-evenly'>
        <Link href='/createblog' className='text-black hover:text-gray-500' >Make new blog post</Link>
        <Link className='text-black hover:text-gray-500' href='/'>Home</Link>
    </nav>
  )
}
