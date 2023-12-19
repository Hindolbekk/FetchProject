import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Comments() {
    const {slug}=useParams()
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${slug}`)
        .then((res)=>res.json())
        .then((data)=>setData(data))
    },[])
  return (
    <div>
        <h1>comments</h1>
        <ol>
        {
            data?.map((item,index)=>(
                <li key={item.id}>
                   <mark>{item.postId}</mark> {item.body} -- <mark>{item.id}</mark>
                </li>
            ))
        }
    </ol>
    </div>
    
  )
}

export default Comments