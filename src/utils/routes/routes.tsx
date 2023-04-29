import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../../pages/Dashboard";
import App from "../../App";
import Login from "../../pages/Login";



export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <Dashboard/>,
  },
]);
