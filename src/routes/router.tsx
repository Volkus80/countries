import { createBrowserRouter } from "react-router";
import { Home } from "../pages/Home";
import { ErrorPage } from "../pages/ErrorPage";
import { Flag } from "../pages/Flag";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />
    },
    {
        path: "/flags/:name",
        element: <Flag />

    }
]
)

export { router };