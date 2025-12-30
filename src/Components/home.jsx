import React from 'react'
import {useState} from "react"
function home(){
      const company="giit africa"
      const [student,setelement]=useState('alex')
      const[count,setcount]=useState(6);
      const handleClick=()=>{
            alert("it is finished")
      }
  return (
    <>
      {company} my name is {student}<br/>
      <p>You click {count} times
            <button onClick={() => setcount( count *3)}>CLICK ME</button>
      </p>
      <button onClick={handleClick}>CHECK ME</button>
      <input onChange={(e)=> console.log(e.target.value)}/>
    </>
  )
}

export default home