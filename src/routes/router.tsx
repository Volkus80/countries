import { createBrowserRouter } from "react-router";
import { ErrorPage } from "../pages/ErrorPage";
import { Flag } from "../pages/Flag";
import { Layout } from "../components/Layout";
import { Home } from "../pages/Home";
import type { CountryFullData } from "../types/CountryFullData";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: < ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/flags/:name",
                element: <Flag />,
                loader: async ({ params }) => {
                    const data = await fetch(`https://restcountries.com/v3.1/name/${params.name}?fullText=true`);
                    if (!data.ok) throw new Error("Что-то пошло не так");
                    const res = await data.json();
                    return res as CountryFullData[];
                },
                errorElement: <ErrorPage />,

            }

        ]
    },

]
)

export { router };