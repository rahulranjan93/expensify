import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <h1 className="header__title">
          <NavLink to="/" className="navlink__header" exact={true}>
            Expensify
          </NavLink>
        </h1>
      </div>
    </div>
  </header>
);

export default Header;
