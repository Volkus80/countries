import { createBrowserRouter } from "react-router";
import { ErrorPage } from "../pages/ErrorPage";
import { Country } from "../pages/Coutry";
import { Layout } from "../components/Layout";
import { Home } from "../pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: < ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
                errorElement: <ErrorPage />
            },
            {
                path: "/flags/:name",
                element: <Country />,
                errorElement: <ErrorPage />
            },
            {
                path: "*",
                element: <ErrorPage />
            }

        ]
    },

]
)

export { router };