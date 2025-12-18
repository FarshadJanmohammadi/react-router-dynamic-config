import React from "react";
import { Outlet } from "react-router";

const HomeLayout = () => {
  return (
    <>
      <header>Home Header</header>
      <Outlet />
      <footer>Home Footer</footer>
    </>
  );
};

export default HomeLayout;
