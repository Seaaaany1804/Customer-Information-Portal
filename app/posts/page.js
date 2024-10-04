"use client"
import Link from "next/link";
import { useState, useEffect } from "react"
import axios from "axios";

export default function Posts() {
    const [posts, setPosts] = useState([])
    const fetchPosts = async () => {
        const response = await axios.get('http://localhost:5000/posts')
        setPosts(response.data)
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <div>
            <div>
                <h1> Customers </h1>
                <Link href="/posts/create"> Create New Customers</Link>
            </div>

            <table>
                <thead>
                    <tr>
                        <th> ID </th>
                        <th> Title </th>
                        <th> Content </th>
                        <th> Action </th>
                    </tr>
                </thead>

                <tbody>
                    {
                        posts.map((post) => (
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.content}</td>
                                <td>
                                    <button> View </button>
                                    <button> Edit </button>
                                    <button> Delete </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}