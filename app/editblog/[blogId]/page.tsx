import getSingleBlog from '@/lib/getSingleBlog'
import React from 'react'

type Params = {
    params: {
        blogId: string
    }
}

export default  async function page( { params: { blogId } }: Params) {

    const blog = await getSingleBlog(blogId)

  return (
    <div>page</div>
  )
}
