import React, { useState } from 'react';

const Nav = (props) => {
      const [isLoggedIn, setIsLoggedIn] = useState(props.isLoggedIn)
    
      return (
        <nav id="nav-bar">
        <div id="logo">
        <a href="/">Home</a>
        </div>
        <ul id="nav-items">
          {isLoggedIn ? (
            <>
              <li className="nav-item">
                <a href="/">Sign Out</a>
              </li>
              <li className="nav-item">
                <a href="/user">Profile</a>
                {/* <Link to="/user" activeClassName="link">Profile</Link> */}
              </li>
            </>
          ) : (
            <li className="nav-item">
              <a href="/sign-up">Sign Up</a>
            </li>
          )}
        </ul>
      </nav>
    );
}

export default Nav;
