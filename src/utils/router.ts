import { createBrowserRouter } from "react-router-dom";
import Login from "../screens/Authentication/Login";
import Register from "../screens/Authentication/Register";
import Dashboard from "../screens/Portfolio/Dashboard";
import ForgotPassword from "../screens/Authentication/ForgotPassword";
import Projects from "../screens/Portfolio/Projects";
import EcommerceBase from "../screens/ECommerce";
import EcommerceDashboard from "../screens/ECommerce/Dashboard";
import EcommerceCart from "../screens/ECommerce/Cart";
import ProductDetails from "../screens/ECommerce/ProductDetails";
import TodoBase from "../screens/ToDoList";
import AddTodo from "../screens/ToDoList/AddTodo";
import TodoDashboard from "../screens/ToDoList/Dashboard";
import Social from "../screens/Social";
import SocialLogin from "../screens/Social/Authentication/Login";
import SocialSignup from "../screens/Social/Authentication/Signup";
import ResetPassword from "../screens/Authentication/ResetPassword";
import AuthLayout from "../screens/Authentication";
import AuthDashboard from "../screens/Authentication/Dashboard";
import SocialDashboard from "../screens/Social/Dashboard";

const router = createBrowserRouter([
  {
    path: "",
    Component: Dashboard,
  },
  {
    path: "/projects",
    Component: Projects,
  },
  {
    path: "/auth",
    Component: AuthLayout,
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
      },
      {
        path: 'reset-password/:token',
        Component: ResetPassword,
      },
      {
        path: 'dashboard',
        Component: AuthDashboard,
      },
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
        path: 'edit/:id',
        Component: AddTodo,
      },
    ]
  },
  {
    path: "/shopping",
    Component: EcommerceBase,
    children: [
      {
        path: '',
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
  {
    path: "/social",
    Component: Social,
    children: [

      {
        path: 'login',
        Component: SocialLogin,
      },
      {
        path: 'signup',
        Component: SocialSignup
      },
      {
        path: 'dashboard',
        Component: SocialDashboard,
      }
    ]
  }
])

export default router;