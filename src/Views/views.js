import React, { Component } from 'react';
import classes from './views.module.scss';
/*import { renderRoutes } from 'react-router-config';*/

const HomePage = (props) => {
  return (
    <div>
      <h2 className={classes.home}>This is the Home page</h2>
      {/*renderRoutes(props.route.routes)*/}
    </div>);
}
const AboutPage = (props) => {
  return (
    <div>
      <h2 className={classes.about}>This is the About page</h2>
      {/*renderRoutes(props.route.routes)*/}
      </div>

  );
}
const ShopPage = (props) => {
  return (
    <div>
      <h2 className={classes.shop}>This is the Shop page</h2>
      {/*renderRoutes(props.route.routes)*/}
      </div>);
}
const ShopItemPage = (props) => {
  return (
    <div>
      <h2 className={classes.shop}>This is the Shop Item</h2>
      {/*renderRoutes(props.route.routes)*/}
      </div>);
}
const ContactPage = (props) => {
  return (
    <div>
      <h2 className={classes.contacts}>This is the Contact page</h2>
      {/*renderRoutes(props.route.routes)*/}
      </div>);
}
const ErrorPage = (props) => {
  return (
    <div>
      <h2 className={classes.error}>404 Page not found</h2>
      {/*renderRoutes(props.route.routes)*/}
      </div>);
}

export { HomePage, AboutPage, ShopPage, ShopItemPage, ContactPage, ErrorPage };