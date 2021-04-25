import React from 'react';

import logo from '../assets/logo.svg';

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <a href="/" className="header__logo">
          <img src={logo} alt="eh!Todo Logo" />
          <h1 className="header__siteName">eh!Todo</h1>
        </a>
        <nav className="header__nav">
          <button>Sync Now</button>
        </nav>
      </div>
    </div>
  );
};

export default Header;
