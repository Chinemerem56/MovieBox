import React from "react"
import{useEffect, useState } from "react";
import{useNavigate} from "react-router-dom";

const style={
      color:"white",
      textAlign:"center",
      fontSize:"50px",
      fontFamily:"sans-serif",
      marginTop:"250px"
};
function Redirect(props) {
      const  [count , setCount]= useState(10);
      let sid;
      let navigate=useNavigate();

      function countdown(){

            setCount(( count) => {
                  if( count == 0) return navigate("/");
                        else return count - 1;
            }); 
      }
      useEffect(function () {
            //mounting
            sid=setInterval(countdown, 1000);
            return()=>{
                  //unmounting
                  clearInterval(sid);
            }
      },[]);
      return(
            <>
            <div>
                  <h3 style={style}>page redirect in {count}</h3>
                  </div></>
      )
}
export  default Redirect 
