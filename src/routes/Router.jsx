import HomeLayout from "../components/layout/HomeLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Business from "../pages/Business"
import Services from "../pages/Services";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/business",
                element: <Business />,
            },
            {
                path: "/services",
                element: <Services />,
            }
        ],
    },
]);

