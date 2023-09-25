
import { AUTHORIZED_ROUTES, UNAUTHORIZED_ROUTES } from "./Routes";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

const Router = () => {
    let isAuthorized = localStorage.getItem("access");
    console.log("isAuthorized", isAuthorized)
    const ROUTES = isAuthorized != null ? AUTHORIZED_ROUTES : UNAUTHORIZED_ROUTES;
    const browserRouter = createBrowserRouter(ROUTES);

    return (
        <>
            <RouterProvider router={browserRouter} />
        </>
    )

};

export default Router;
