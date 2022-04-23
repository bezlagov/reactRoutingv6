import React from "react";
import { AboutPage, ContactPage, HomePage, ShopPage } from "../Views/views";

const routes = [
  {
    path: "/",
    exact: true,
    component: HomePage
  },
  {
    path: "/about",
    component: AboutPage
  },
  {
    path: "/shop",
    component: ShopPage
  },
  {
    path: "/contacts",
    component: ContactPage
  },
];

export default routes;

