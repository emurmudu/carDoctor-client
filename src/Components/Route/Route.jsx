import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Login from "../Users/Login";
import SignUp from "../Users/SignUp";
import About from "../Pages/About";
import Services from "../Pages/Services";
import CheckOut from "../Pages/CheckOut";
import BookService from "../../BookService/BookService";
import Booking from "../../Booking/Booking";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: 'services',
                element: <Services></Services>
            },
            {
                path: '/book/:id',
                element: <BookService></BookService>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },

            {
                path: '/bookings',
                element: <PrivateRoute><Booking></Booking></PrivateRoute>
            }
        ]
    },
]);

export default router;