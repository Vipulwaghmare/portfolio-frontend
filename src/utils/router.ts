import { lazy } from 'react';
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "",
    Component: lazy(() => import('../screens/Portfolio/Dashboard')),
  },
  {
    path: "/projects",
    Component: lazy(() => import('../screens/Portfolio/Projects')),
  },
  {
    path: "/test",
    Component: lazy(() => import('../screens/Fun')),
  },
  {
    path: "/auth",
    Component: lazy(() => import('../screens/Authentication')),
    children: [
      {
        path: 'login',
        Component: lazy(() => import('../screens/Authentication/Login')),
      },
      {
        path: 'register',
        Component: lazy(() => import('../screens/Authentication/Register'))
      },
      {
        path: 'forgot-password',
        Component: lazy(() => import('../screens/Authentication/ForgotPassword')),
      },
      {
        path: 'reset-password/:token',
        Component: lazy(() => import('../screens/Authentication/ResetPassword')),
      },
      {
        path: 'dashboard',
        Component: lazy(() => import('../screens/Authentication/Dashboard')),
      },
    ]
  },
  {
    path: "/sorting-algorithms",
    Component: lazy(() => import('../screens/Sorting')),
  },
  {
    path: "/todo",
    Component: lazy(() => import('../screens/ToDoList')),
    children: [
      {
        path: '',
        Component: lazy(() => import('../screens/ToDoList/Dashboard')),
      },
      {
        path: 'add',
        Component: lazy(() => import('../screens/ToDoList/AddTodo')),
      },
      {
        path: 'edit/:id',
        Component: lazy(() => import('../screens/ToDoList/AddTodo')),
      },
    ]
  },
  {
    path: "/shopping",
    Component: lazy(() => import('../screens/ECommerce')),
    children: [
      {
        path: '',
        Component: lazy(() => import('../screens/ECommerce/Dashboard')),
      },
      {
        path: 'cart',
        Component: lazy(() => import('../screens/ECommerce/Cart')),
      },
      {
        path: 'product',
        Component: lazy(() => import('../screens/ECommerce/ProductDetails')),
      },
    ]
  },
  {
    path: "/social",
    Component: lazy(() => import('../screens/Social')),
    children: [
      {
        path: 'login',
        Component: lazy(() => import('../screens/Social/Authentication/Login')),
      },
      {
        path: 'signup',
        Component: lazy(() => import('../screens/Social/Authentication/Signup'))
      },
      {
        path: 'dashboard',
        Component: lazy(() => import('../screens/Social/Dashboard')),
      }
    ]
  }
])
export default router;