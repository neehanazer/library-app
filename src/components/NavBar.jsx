import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Library app</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
       <div class="nav justify-content-end">
        <Link class="nav-link active" aria-current="page" to="/">Add Book</Link>
        <Link class="nav-link" to="/delete">Delete Book</Link>
        <Link class="nav-link" to="/search">Search Book</Link>
        <Link class="nav-link" to="/view">View Book</Link>
      </div>
    </div>
  </div>
</nav>
    </div>
    </div>
  )
}

export default NavBar
