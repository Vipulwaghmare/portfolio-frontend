import { Outlet, useNavigate } from "react-router-dom";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import { IconButton } from "@mui/material";
import "./index.scss";

const AuthLayout = () => {
  const navigate = useNavigate();
  return (
    <>
      <header className="auth-header">
        <IconButton onClick={() => navigate("/projects")}>
          <SpaceDashboardIcon style={{ color: "white" }} />
        </IconButton>
        Authentication
      </header>
      <Outlet />
    </>
  );
};

export default AuthLayout;
