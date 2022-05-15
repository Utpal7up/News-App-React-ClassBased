import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Utpal News</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-4 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-Link mx-2" style={{textDecoration:'none', color: 'white'}} to="/">Home</Link>
              </li>
              <li className="nav-item"><Link className="nav-Link mx-2" style={{textDecoration:'none', color:'white'}} to="/Business">Business</Link></li>
              <li className="nav-item"><Link className="nav-Link mx-2" style={{textDecoration:'none', color:'white'}} to="/Entertainment">Entertainment</Link></li>
              <li className="nav-item"><Link className="nav-Link mx-2" style={{textDecoration:'none', color:'white'}} to="/Health">Health</Link></li>
              <li className="nav-item"><Link className="nav-Link mx-2" style={{textDecoration:'none', color:'white'}} to="/Science">Science</Link></li>
              <li className="nav-item"><Link className="nav-Link mx-2" style={{textDecoration:'none', color:'white'}} to="/Sports">Sports</Link></li>
              <li className="nav-item"><Link className="nav-Link mx-2" style={{textDecoration:'none', color:'white'}} to="/Technology">Technology</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
