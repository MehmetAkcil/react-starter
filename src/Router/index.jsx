import { createBrowserRouter, } from "react-router-dom";
import Home from "../Pages/Home";
import RootLayout from "../Components/Layouts";
import AuthFilter from "../Filters/AuthFilter";
import Profile from "../Pages/Profile";
import Login from "../Pages/Login";
import Logout from "../Pages/Profile/Logout";
import LoginFilter from "../Filters/LoginFilter";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: "/login",
                element: <LoginFilter />,
                children: [
                    {
                        path: '',
                        element: <Login />
                    }
                ]
            },
            {
                path: `/${import.meta.env.VITE_PANEL_URL}`,
                element: <AuthFilter />,
                children: [
                    {
                        path: '',
                        element: <Profile />
                    },
                    {
                        path: "logout",
                        element: <Logout />
                    }
                ]
            }
        ]
    }
]);
