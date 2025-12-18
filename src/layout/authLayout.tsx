import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <>
      <header>Auth Header</header>
      <Outlet />
      <footer>Auth Footer</footer>
    </>
  );
};

export default AuthLayout;
