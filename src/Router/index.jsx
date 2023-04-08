import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home";
import AuthFilter from "../Filters/AuthFilter";
import Panel from "../Pages/Panel";
import Login from "../Pages/Login";
import Logout from "../Pages/Logout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/panel",
        element: <AuthFilter />,
        children: [
            {
                path: '',
                element: <Panel />
            },
            {
                path: 'logout',
                element: <Logout />
            }
        ]
    },
]);