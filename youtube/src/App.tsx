import React from 'react';
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Videos from "./pages/Videos";
import Root from "./pages/Root";
import Watch from "./pages/Watch";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {index: true, element: <Videos/>},
      {path: "/search", element: <Videos/>},
      {path: "/watch", element: <Watch/>}
    ]
  }
]);

export default function App() {
  return (
    <RouterProvider router={router}/>
  );
}
