import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">AjmatKathat</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto" style={{marginLeft: '2rem'}}>
                        {/* <li className="nav-item active">
                            <a className="nav-link" href="#"><i class="fa-regular fa-house-chimney"></i> Home <span className="sr-only">(current)</span></a>
                        </li> */}
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i class="fa-solid fa-house"></i> Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i class="fa-regular fa-user"></i> About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i class="fa-solid fa-tv"></i> Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i class="fa-regular fa-star"></i> Achivements</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar