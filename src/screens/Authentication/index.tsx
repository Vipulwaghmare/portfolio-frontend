import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <>
      {/* <header>Authentication</header> */}
      <Outlet />
    </>
  );
};

export default AuthLayout;
