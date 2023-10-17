import { createBrowserRouter } from "react-router-dom";
import Login from "../screens/Authentication/Login";
import Register from "../screens/Authentication/Register";
import Dashboard from "../screens/Portfolio/Dashboard";
import AboutMe from "../screens/Portfolio/About";
import ContactMe from "../screens/Portfolio/ContactMe";
import ForgotPassword from "../screens/Authentication/ForgotPassword";
import Projects from "../screens/Portfolio/Projects";

const router = createBrowserRouter([
  {
    path: "",
    Component: Dashboard,
  },
  {
    path: "/about",
    Component: AboutMe,
  },
  {
    path: "/contact-me",
    Component: ContactMe,
  },
  {
    path: "/projects",
    Component: Projects,
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
      },
      {
        path: 'forgot-password',
        Component: ForgotPassword,
      }
    ]
  },
])

export default router;