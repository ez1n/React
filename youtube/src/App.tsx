import React from 'react';
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Videos from "./pages/Videos";
import Root from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {index: true, element: <Videos/>},
      // {path: "/search", element: <Search/>}
    ]
  }
]);

export default function App() {
  return (
    <RouterProvider router={router}/>
  );
}
