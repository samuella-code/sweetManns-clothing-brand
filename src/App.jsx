import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Mens from "./Pages/Mens";
import Womens from "./Pages/Womens";
import Kids from "./Pages/Kids";
import Login from "./Pages/Login";
import Accessories from "./Pages/Accessories";
import Hats from "./Pages/hats";
import Womwen2 from "./Pages/womwen2";
import Cart from "./Pages/Cart";
import Footer from "./components/Footer";
import SingleProduct from "./components/SingleProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
     
        <Home />
  
      </>
    ),
  },
  {
    path: "/mens",
    element: (
      <>
     
        <Mens />
  
      </>
    ),
  },
  {
    path: "/womens",
    element: (
      <>
     
        <Womens />
  
      </>
    ),
  },
  {
    path: "/kids",
    element: (
      <>
     
        <Kids />
  
      </>
    ),
  },
  {
    path: "/Accessories",
    element: (
      <>
     
        <Accessories />
  
      </>
    ),
  },
  {
    path: "/womwen2",
    element: (
      <>
     
        <Womwen2 />
  
      </>
    ),
  },
  {
    path: "/hats",
    element: (
      <>
     
        <Hats />
  
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
     
        <Login />
  
      </>
    ),
  },
  {
    path: "/cart",
    element: (
      <>
     
        <Cart />
  
      </>
    ),
  },
  {
    path: "/products/:productId",
    element: (
      <>
     
        <SingleProduct />
  
      </>
    ),
  },
]);

const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <RouterProvider router={router} />
      {/* <Footer /> */}
    </>
  );
};

export default App;
