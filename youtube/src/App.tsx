import React from 'react';
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainPage from "./pages/MainPage";
import Root from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {index: true, element: <MainPage/>},
      // {path: "/search", element: <Search/>}
    ]
  }
]);

export default function App() {
  return (
    <RouterProvider router={router}/>
  );
}
