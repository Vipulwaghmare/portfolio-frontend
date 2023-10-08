import { createBrowserRouter } from "react-router-dom";
import Login from "../screens/Authentication/Login";
import Register from "../screens/Authentication/Register";
import Dashboard from "../screens/Portfolio/Dashboard";

const router = createBrowserRouter([
  {
    path: "",
    Component: Dashboard,
  },
  {
    path: "/auth",
    children: [
      {
        path: 'login',
        Component: Login,
      },
      {
        path: 'register',
        Component: Register
      }
    ]
  },
])

export default router;