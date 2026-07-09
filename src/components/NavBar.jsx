import React from 'react'

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
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="/">Add Book</a>
        <a class="nav-link" href="/search">Search Book</a>
        <a class="nav-link" href="/delete">Delete Book</a>
        <a class="nav-link" href="/view">View Book</a>
      </div>
    </div>
  </div>
</nav>
    </div>
    </div>
  )
}

export default NavBar
