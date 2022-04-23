import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import {  HomePage, AboutPage, ShopPage, ShopItemPage, ContactPage, ErrorPage } from '../../Views/views';


class RoutingDom extends Component {
  render() {
    return (
      <div>
        <h2>Routing dom v6</h2>
       
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/shop" exact element={<ShopPage />} />
          <Route path="/shop/:itemId" element={<ShopItemPage />} />
          <Route path="/contacts" element={<ContactPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        </div>
    );
  }
}

export default RoutingDom;

