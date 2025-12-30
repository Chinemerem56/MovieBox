import React from'react'
import { Link } from 'react-router-dom'

function NotFound(){
      return(
<div>
            <h1>404</h1>
            <h3> Page not Found</h3>
            <p> the page you are looking for is not found</p>
            <Link to='/'>Click me</Link>
            <Link to='/redirect'>Redirect form</Link>
            </div>
      )

}
export default NotFound 