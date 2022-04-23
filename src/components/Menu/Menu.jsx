import React, { Component } from 'react';
import classes from './Menu.module.scss';
import { Link } from 'react-router-dom';

class Menu extends Component {
  render() {
    return (
        <ul className={classes.menu}>
          <Link to="/"> <li>Home</li></Link>
          <Link to="/about"><li>About</li></Link>
          <Link to="/shop"><li>Shop</li></Link>
          <Link to="/contacts"><li>Contacts</li></Link>
        </ul>

    );
  }
}

export default Menu;