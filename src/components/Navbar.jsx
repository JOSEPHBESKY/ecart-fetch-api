import React from 'react'

const Navbar = () => {
    return (
        <div><nav class="navbar navbar-expand-lg bg-white py-3 shadow-sm">
            <div class="container">
                <a class="navbar-brand fw-bold fs-1" href="#">EKART<i className="fa fa-home me-1"></i></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Products</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contect</a>
                        </li>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </ul>
                    <div className='buttons'>
                        <a href='' className='btn btn-outline-dark'><i className="fa fa-sign-in me-1"></i>Login</a>
                        <a href='' className='btn btn-outline-dark'><i className="fa fa-user-plus me-1"></i>Register</a>
                        <a href='' className='btn btn-outline-dark'><i className="fa fa-shopping-cart me-1"></i>Cart (0)</a>
                    </div>
                </div>
            </div>
        </nav></div>
    )
}

export default Navbar