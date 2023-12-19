import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Posts() {
    const {slug}=useParams()
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${slug}`)
        .then((res)=>res.json())
        .then((data)=>setData(data))
    },[])
  return (
    <div>
        <h1>Posts</h1>
        <ol>
        {
            data?.map((item,index)=>(
                <li key={item.id}>
                    <Link to={`/comments/${item.id}`}><mark>{item.userId}</mark> {item.title} -- <mark>{item.id}</mark></Link>
                </li>
            ))
        }
    </ol>
    </div>
  )
}

export default Posts