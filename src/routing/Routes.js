import { ElementType, lazy, Suspense } from "react";
// import Layout from "../../components/Layout/Layout";
import { Navigate, Outlet } from "react-router-dom";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

// import { connectorAdminPrefix, insightsAdminRoutingPrefix } from "./constants";

// export const Loadable = (Component: ElementType) => () => {
//   return (
//     <Suspense>
//       <Component />
//     </Suspense>
//   );
// };

//Admin Components
// const Login = lazy(() => import("../pages/Login"));
// const MasterView = lazy(() => import("../pages/Masterview")));

export const AUTHORIZED_ROUTES = [
  {
    path: "/",
    element: (
        <Outlet />
    ),
    children: [
      {
        path: "/",
        element: <Navigate to="dashboard" />,
      },
      {
        path: "*",
        element: <Navigate to="dashboard" />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
];

export const UNAUTHORIZED_ROUTES = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "*",
    element: <Login />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
];
