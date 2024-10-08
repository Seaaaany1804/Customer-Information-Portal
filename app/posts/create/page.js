'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useState } from 'react'
import axios from "axios";

const page = () => {
    
    const [fName, setfName] = useState('')
    const [lName, setlName] = useState('')
    const [email, setEmail] = useState('')
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:5000/posts', {fName, lName, email})
        router.push('/')
    }


  return (
    <div className="bg-[#f8f4f4] h-screen flex items-center justify-center">
      <div className="flex flex-col justify-center items-center w-[50%] bg-white">
        <h1 className="text-3xl font-normal p-4"> Create Customers </h1>

        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-4 w-[60%]">
          <div className="flex gap-4 w-[100%]">
            <div className="flex flex-col w-[100%]">
              <label> First Name </label>

              <input
                  type="text"
                  placeholder="ex. Christian"
                  value={fName}
                  className="p-2 px-4 border border-gray-500"
                  onChange={(e) => setfName(e.target.value)}
              />
            </div>
            
            <div className="flex flex-col w-[100%]">
              <label> Last Name </label>
              <input
                  type="text"
                  placeholder="ex. Espinoza"
                  value={lName}
                  className="p-2 px-4 border border-gray-500"
                  onChange={(e) => setlName(e.target.value)}
              />
            </div>   
          </div>

          <div className="flex flex-col w-[100%]">
              <label> Email Address </label>
              <input
                  type="text"
                  placeholder="ex. example@xyz.com"
                  value={email}
                  className="p-2 px-4 border border-gray-500"
                  onChange={(e) => setEmail(e.target.value)}
              />
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
