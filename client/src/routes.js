/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Soft UI Dashboard React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Soft UI Dashboard React layouts

import React from "react";
import Tables from "layouts/tables";
import BookEdit from "layouts/tables/data/bookEdit"
import SignIn from "layouts/authentication/sign-in";
import Blog from "layouts/blog-table";
import BlogEdit from "./layouts/blog-table/data/blogEdit"; 
import BlogView from "./layouts/blog-table/data/blogView"
import Office from "examples/Icons/Document";
import Office2 from "examples/Icons/Settings";
import Document from "examples/Icons/Document";
import Castmeeusers from "./user/Mainroute";
import Home from "./user/home";
import Blogviewfront from "./user/BlogView"
// import {}


const routes = [
  { title: "Book & Blog", type: "title" },
  {
    type: "collapse",
    name: "Book",
    key: "tables",
    route: "/book",
    icon: <Office size="12px" />,
    component: <Tables />,
    noCollapse: true,
  },
  {
    route: "/bookedit/:id",
    component: <BookEdit/>,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Blog",
    key: "Blogs",
    route: "/blog",
    icon: <Office2 size="12px" />,
    component: <Blog />,
    noCollapse: true,
   },
   {
    route: "/blogview/:id",
    component: <BlogView />,
    noCollapse: true,
  },
  {
    route: "/blogedit/:id",
    component: <BlogEdit />,
    noCollapse: true,
  },
  {
    name: "Sign In",
    key: "sign-in",
    route: "/authentication/sign-in",
    icon: <Document size="12px" />,
    component: <SignIn />,
    noCollapse: true,
  },
  // Add more routes as needed
  {
    route: "/castmeeusers",
    component: <Castmeeusers />,
  },
  {
    route: "/home",
    component: <Home />,
  },
  {
    route: "/blogs/:Title",
    component: <Blogviewfront />,
  },
];

export default routes;
