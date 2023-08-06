import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    
    <nav className='bg-lightBlue outline outline-1  pt-4 pb-4 flex justify-evenly '>
        <Link href='/createblog' className='text-white hover:text-gray-500 text-xl' >Make new blog post</Link>
        <Link className='text-white hover:text-gray-500 text-xl' href='/'>Home</Link>
    </nav>
  )
}
