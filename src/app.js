import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Home from "./components/Home";
import { createBrowserRouter,RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
/**
 *      **Header**
 * -> Logo
 * -> Nav Items
 *      **Body**
 *
 *
 *      **Footer**
 * -> Copyrights etc
 *
 *
 *
 */

const AppLayOut = () => {
  return (
    <div className="app">
      <Header/>
      <Outlet/>
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <AppLayOut />,
    children:[
      {
        path:"/",
        element : <Body />
      },
      {
        path:"/home",
        element : <Body />
      },
      {
        path: "/about",
        element:<About />
      },
      {
        path: "/contact",
        element:<Contact />
      },
      {
        path: "/cart",
        element:<Cart />
      },
      {
        path:"/home",
        element : <Home />
      },
      {
        path: "/about",
        element:<About />
      },
      {
        path:"/restaurants/:resId",
        element : <RestaurantMenu />
      }
    ],
    errorElement: <Error />
  },
  
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
