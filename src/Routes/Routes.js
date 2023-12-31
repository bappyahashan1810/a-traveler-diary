import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Hero from "../Components/Hero/Hero";
import Destinations from "../Components/Destinations/Destinations";
import Book from "../Components/Book/Book";
import Places from "../Components/Places/Places";
import Travel from "../Components/Travel/Travel";
import Practice from "../Components/Practice/Practice";
import Practice2 from "../Components/Practice/Practice2";
import Booking from "../Components/Booking/Booking";
import Login from "../Components/Login/Login";
import SignIn from "../Components/SignIn/SignIn";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Hero></Hero>
            },

            {
                path: '/destinations',
                element: <Destinations></Destinations>
            },
            {
                path: '/travel',
                element: <Travel></Travel>,
                loader: () => fetch('https://hotel-server-bappyahashan1810.vercel.app/places')
            },

            {
                path: '/places/:id',
                loader: ({ params }) => fetch(`https://hotel-server-delta.vercel.app/places/${params.id}`),
                element: <PrivateRoutes><Book></Book></PrivateRoutes>
            },
            {
                path: '/hotels/:id',
                element: <PrivateRoutes><Booking></Booking></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://hotel-server-bappyahashan1810.vercel.app/hotels/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            }

        ]


    },
    {
        path: '/practice',
        element: <Practice></Practice>
    },
    {
        path: '/practice2',
        element: <Practice2></Practice2>
    }
])