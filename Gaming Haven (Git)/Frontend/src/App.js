import { Navbar } from "./navbar";
import { Box, Container, CssBaseline, Stack, ThemeProvider, createTheme, useMediaQuery } from "@mui/material";

import { Store } from "./store";
import { Gamecontent } from "./page/gamecontent/Gamecontent";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import React from "react";
import SignIn from "./page/gamecontent/login/login.js";
import Checkout from "./page/checkout/Checkout.js";
import Cart from "./page/cart/cart.js";
import Genre from "./page/Genre/Genre.js";
import "./App.css";

import { Library } from "./Library.js";
import Dashboard from "./page/admin dashboard/dashboard.js";
import About from "./page/about.js";
import Signup from "./page/gamecontent/login/signup.js";
import { Logout } from "@mui/icons-material";
import Profile from "./page/admin dashboard/profile.js";
import {

  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import FavMain from "./favlayout.js";
import Checkoutorder from "./page/checkout/orderCheckout.js";
import { DbLibrary } from "./dblib.js";
import ErrorBoundaryWithServerError from "./servererror/servererror.js";
import Success from "./page/payment/success.js";
import Pay from "./page/payment/pay.js";


function App() {
  const queryClient = new QueryClient()
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode:'dark'
        },
      }),
    [prefersDarkMode],
  );
      const Root=()=>{
        return(
          <>  
          <ErrorBoundaryWithServerError>
        <QueryClientProvider client={queryClient}>
        <Navbar/>
        <Outlet/>
        </QueryClientProvider>
        </ErrorBoundaryWithServerError>
        </>
        )
        
      }


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
     
      children: [
        {
          path: "/",
          element: <Store/>,
        
        },
        {
          path:"/store",
          element:<Store/>
        },
        {
          path:"/content",
          element:<Gamecontent/>
        },
        {
          path:'/login',
          element:<SignIn/>
        },
        {
          path:'/logout',
          element:<Logout/>
        },
        {
          path:'/signup',
          element:<Signup/>
        },
        {
          path:'/checkout',
          element:<Checkout/>
        },
        {
          path:'/checkoutorder',
          element:<Checkoutorder/>
        },
       {
        path:'/cart',
        element:<Cart/>
       },
       {
        path:'/genre',
        element:<Genre/>
       },
       {
        path:'/fav',
        element:<FavMain/>
       },
       {
        path:'/library',
        element:<Library/>
       },
       {
        path:'/dblibrary',
        element:<DbLibrary/>
       },
       {
        path:'/dashboard',
        element:<Dashboard/>
       },
       {
        path:'/about',
        element:<About/>
       },
       {
        path:'/profile',
        element:<Profile/>
       },
       {
        path:"/success",
        element: <Success/>
      },
      {
        path:"/pay",
        element: <Pay/>
      },
       ],
    },
  ]);
  
  
  
  
  return (
    <>
     <ThemeProvider theme={theme}>
     <CssBaseline />
     <RouterProvider router={router} />
     
      </ThemeProvider>
      
    </>
  );
}

export default App;
