import React from 'react'
import './Navbar.css'
export default function Navbar() {
    return (
        <div>
            <link href='https://fonts.googleapis.com/css?family=Bilbo Swash Caps' rel='stylesheet' />
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div className="container-fluid">
                    <b><a className="navbar-brand name" href="/">Shruti Patel</a></b>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse mx-4" id="navbarNav">
                        <ul className="navbar-nav all_links">
                            <li className="nav-item links mx-2">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item links mx-2">
                                <a className="nav-link" href="/">About</a>
                            </li>
                            <li className="nav-item links mx-2">
                                <a className="nav-link" href="/">Skills</a>
                            </li>
                            <li className="nav-item links mx-2">
                                <a className="nav-link" href="/">Projects</a>
                            </li>
                            <li className="nav-item links mx-2">
                                <a className="nav-link" href="/">Contact</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="/">Download CV</a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
