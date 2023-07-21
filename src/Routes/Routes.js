import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Hero from "../Components/Hero/Hero";
import Destinations from "../Components/Destinations/Destinations";
import Book from "../Components/Book/Book";

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
                path: '/book',
                element: <Book></Book>
            }
        ]
    }
])