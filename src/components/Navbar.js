import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark bg-gradient fixed-top">
            <Link className="navbar-brand text-danger" to="/"><strong className='bg-white rounded-pill'>FastNews</strong></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link text-white" to="/">Home<span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white" to="/business">Business</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white" to="/entertainment">Entertainment</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white" to="/general">General</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white" to="/health">Health</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white" to="/science">Science</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white" to="/sports">Sports</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white" to="/technology">Technology</Link>
                </li>
                </ul>
            </div>
        </nav>
      </div>
    )
}
