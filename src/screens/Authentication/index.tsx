import { Outlet } from "react-router-dom";

const AuthLayout: React.FC = () => {
  return (
    <>
      {/* <header>Authentication</header> */}
      <Outlet />
    </>
  );
};

export default AuthLayout;
