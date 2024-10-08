'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useState } from 'react'
import axios from "axios";

const page = () => {
    
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:5000/posts', {title, content})
        router.push('/')
    }


  return (
    <div className="bg-[#f8f4f4] h-screen flex items-center justify-center">
      <div className="flex flex-col justify-center items-center w-[50%] bg-white">
        <h1 className="text-3xl font-normal p-4"> Create Customers </h1>

        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-4 w-[50%]">
          <div className="flex gap-4">
            <div>
              <label> Title </label>

              <input
                  type="text"
                  placeholder="Title"
                  value={title}
                  className="p-2 px-4 border border-gray-500"
                  onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            
            <div>
              <label> Content </label>
              <input
                  type="text"
                  placeholder="Content"
                  value={content}
                  className="p-2 px-4 border border-gray-500"
                  onChange={(e) => setContent(e.target.value)}
              />
            </div>  
          </div>
          
          <div className="flex gap-4">
           <button className="bg-blue-700 text-white rounded-md p-2 px-4"> CANCEL </button>
            <button className="bg-blue-700 text-white rounded-md p-2 px-4 "> SUBMIT HERE! </button>
          </div>
          
        </form>
      </div>

    </div>
  )
}

export default page
