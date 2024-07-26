import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Nav = () => {
const navigate=useNavigate()
const Logout=()=>{
    sessionStorage.clear()
    navigate("/")
}
  return (
    <div>

<nav class="navbar navbar-expand-lg bg-primary">
  <div class="container-fluid">
    <Link class="navbar-brand" href="#">BLOG APP</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavaltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
          <Link class="nav-link " aria-current="page" to="/create"> ADD_POST </Link>
          <Link class="nav-link" to="/viewall"> VIEW_POST </Link>
          <Link class="nav-link" to="/mypost">  MY_POST </Link>
        <li class="nav-link">
          <button className="btn btn-secondary" onClick={Logout}>Logout</button>
          </li>
      
          </div>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Nav