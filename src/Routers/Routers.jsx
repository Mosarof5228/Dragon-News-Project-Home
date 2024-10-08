import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import NewsDetails from "../Pages/NewsDetails/NewsDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Register from "../Pages/Register/Register";
import Root from "../Layout/Root";

import {
    createBrowserRouter,

} from "react-router-dom";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/public/news.json')
            },
            {
                path: '/news/:id',

                element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
                loader: () => fetch('/')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },


        ]
    },
]);