import React from 'react'

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <button  className="navbar-brand" ></button>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
        
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
          </li>
        
        <form className="d-flex" role="search">
          
          <button className="btn btn-outline-success" type="submit">Sign in</button>
          <button className="btn btn-outline-success" type="submit">Sign up</button>
        </form>
      </div>
    </div>
  </nav></div>
  )
}

export default Navbar