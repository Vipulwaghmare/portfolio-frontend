import { createBrowserRouter } from "react-router-dom";
import Login from "../screens/Authentication/Login";
import Register from "../screens/Authentication/Register";
import Dashboard from "../screens/Portfolio/Dashboard";
import AboutMe from "../screens/Portfolio/About";
import ContactMe from "../screens/Portfolio/ContactMe";
import ForgotPassword from "../screens/Authentication/ForgotPassword";
import Projects from "../screens/Portfolio/Projects";
import EcommerceBase from "../screens/ECommerce";
import EcommerceDashboard from "../screens/ECommerce/Dashboard";
import EcommerceCart from "../screens/ECommerce/Cart";
import ProductDetails from "../screens/ECommerce/ProductDetails";
import TodoBase from "../screens/ToDoList";
import AddTodo from "../screens/ToDoList/AddTodo";
import EditTodo from "../screens/ToDoList/EditTodo";
import TodoDashboard from "../screens/ToDoList/Dashboard";

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
  {
    path: "/todo",
    Component: TodoBase,
    children: [
      {
        path: '',
        Component: TodoDashboard,
      },
      {
        path: 'add',
        Component: AddTodo,
      },
      {
        path: 'edit',
        Component: AddTodo,
      },
    ]
  },
  {
    path: "/shopping",
    Component: EcommerceBase,
    children: [
      {
        path: 'dashboard',
        Component: EcommerceDashboard,
      },
      {
        path: 'cart',
        Component: EcommerceCart,
      },
      {
        path: 'product',
        Component: ProductDetails,
      },
    ]
  },
])

export default router;