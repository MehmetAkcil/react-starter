import {createBrowserRouter,} from "react-router-dom";
import Login from "../Pages/Login";
import NotFound from "../Pages/404";
import AccountCheck from "../Middleware/AccountCheck";
import Layout from "../Layout";
import LoginCheck from "../Middleware/LoginCheck";
import Home from "../Pages/Home";


export const router = createBrowserRouter([
    {
        path: '',
        element: <LoginCheck/>,
        children: [
            {
                path: '/',
                element: <Login/>
            },
            {
                path: '/login',
                element: <Login/>
            }
        ]
    },
    {
        path: '',
        element: <AccountCheck/>,
        children: [
            {
                path: '',
                element: <Layout />,
                children: [
                    {
                        path: '/home',
                        element: <Home/>
                    },
                    {
                        path: '*',
                        element: <NotFound/>
                    }
                ]
            }
        ]
    }
]);
