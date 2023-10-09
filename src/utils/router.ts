import { createBrowserRouter } from "react-router-dom";
import Login from "../screens/Authentication/Login";
import Register from "../screens/Authentication/Register";
import Dashboard from "../screens/Portfolio/Dashboard";
import AboutMe from "../screens/Portfolio/About";
import ContactMe from "../screens/Portfolio/ContactMe";

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