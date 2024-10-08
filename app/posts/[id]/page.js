"use client"
import axios from "axios";
import { useEffect, useState } from "react";

export default function({params}) {
    const id = params.id;

    const [post, setPost] = useState(null)

    useEffect(() => {
        if(id) {
            fetchPost()
        }
    }, [id])

    const fetchPost = async () => {
        const response = await axios.get(`http://localhost:5000/posts/${id}`)
        setPost(response.data)
    }

    return (
        <div>
            {post && (
                <div>
                <h1> {post.fName}{post.lName} </h1>
                <h3> {post.email}</h3>
                <h3> {post.phoneNum}</h3>
            </div>
            )}
            
        </div>
    )
}