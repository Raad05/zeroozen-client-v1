import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home/Home";
import Main from "../layouts/Main/Main";
import Tech from "../Components/Tech/Tech/Tech";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/tech',
                element: <Tech></Tech>,
            }
        ]
    }
]);