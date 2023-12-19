import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Users.scss'
function Users() {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=>res.json())
        .then((data)=>setData(data))
    },[])
  return (
   <div>
    <h1>users</h1>
    <ol>
        {
            data?.map((item,index)=>(
                <li key={item.id}>
                    <Link to={`/posts/${item.id}`}>{item.name}</Link>
                </li>
            ))
        }
    </ol>
   </div>
  )
}

export default Users