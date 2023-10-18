import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-success">
  <a class="navbar-brand" href="#">Axios</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <Link class="nav-link" to="/">User</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/post">Post</Link>
      </li>
      
    </ul>
    
  </div>
</nav>
    </>
  )
}

export default Navbar
