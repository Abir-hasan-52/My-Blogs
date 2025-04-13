 
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Navbar from './Components/Navber/Navbar'

function App() {
 

  return (
    <>
       
      <Navbar></Navbar>
       
      {/* <Blogs> </Blogs> */}

      <div className='blogs-container flex gap-2 text-center'>
        <div className="lift-container w-[70%] border-2">
      
          <Blogs> </Blogs>
        </div>
        <div className="right-container w-[30%] border-2"> 
          <h1>Reading Time: 0</h1>
          <p>BookMarked Count : 0</p>
        </div>
         
      </div>
    </>
  )
}

export default App
