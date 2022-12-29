import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "../components/Header";
import {RecoilRoot} from "recoil";

export default function Root() {
  return (
    <div className='max-w-7xl m-auto'>
      <Header/>
      <RecoilRoot>
        <Outlet/>
      </RecoilRoot>
    </div>
  );
}

