 
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Navbar from './Components/Navber/Navbar'

function App() {

  const [bookMarked, setBookMarked]=useState([]);
  const [readingTime, setReadingTime]=useState(0)



  const handleBookmark = (blog) => {
    setBookMarked([...bookMarked,blog])

  }

  const markAsRead=(time,id)=>{
    const newTime =parseInt(readingTime) + parseInt(time);
    setReadingTime(newTime)
    handleRemoveBookmark(id)     
  }

  const handleRemoveBookmark=(id)=>{
    const remaining= bookMarked.filter(book=> book.id !== id)
    setBookMarked(remaining)

  }

  // console.log(readingTime)
  //   console.log(bookMarked)
  return (
    <>
       
      <Navbar></Navbar>
       
       

      <div className='blogs-container flex gap-2 text-center'>
        <div className="lift-container w-[70%] border-2">
      
          <Blogs
           handleBookmark={handleBookmark}
           markAsRead={markAsRead}
          > </Blogs>
        </div>
        <div className="right-container w-[30%] border-2"> 
          <h1>Reading Time:{readingTime}</h1>
          <p>BookMarked Count :{bookMarked.length}</p>
          {
            bookMarked.map(marked=>
              <p className='bg-cyan-500 rounded-2xl p-2 m-2 shadow text-white'>{marked.title}</p>
              )
          }
        </div>
         
      </div>
    </>
  )
}

export default App
