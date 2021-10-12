import React from 'react'

const Navbar = ({ brand }) => {
	return (
		<nav className="navbar navbar-dark bg-dark shadow-sm">
      <div className="container-fluid">
        <a href="/" className="navbar-brand">{brand}</a>
        <div className="d-flex">
          <a className="btn btn-outline-success" type="submit" href="https://github.com/rpalaciosg/kc_backend_nodejs_web7" target="_blank">API Repository</a>
        </div>
      </div>
    </nav>
	)
}

export default Navbar

