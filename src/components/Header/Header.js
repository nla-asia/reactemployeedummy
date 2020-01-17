import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

class Header extends Component {

  render() {
    return <header>
      <nav className="main-nav navbar navbar-expand-lg navbar-dark bg-success">
          <Link className="navbar-brand" to="/">Employees</Link>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            
              <li className="nav-item">
                <Link className="nav-link" to='/'>Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to='/submit'>Add New Employee</Link>
              </li>
              
            </ul>
          </div>
        </nav>
    </header>;
  }

}

export default Header;