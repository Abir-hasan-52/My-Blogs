import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({handleBookmark,markAsRead}) => {

    const [blogs, setBlogs]=useState([])

    useEffect(()=>{
        fetch('blogs.json')
        .then(res=> res.json())
        .then(data=>setBlogs(data))
    },[])
    // console.log(blogs)

    return (
        <div>
            <h1 className='text-3xl'>available : {blogs.length}</h1>

            <div className="All-blogs grid grid-cols-[1fr_1fr] ">
                {
                    blogs.map(blog=><Blog
                         key={blog.id}
                         handleBookmark={handleBookmark}
                         markAsRead={markAsRead}
                         blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;