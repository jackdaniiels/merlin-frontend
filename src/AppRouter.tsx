import {
    createBrowserRouter,
    Navigate,
} from "react-router";

import DashboardPage from "./pages/Dashboard/DashboardPage";
import { ErrorPage } from "./pages/Error/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <DashboardPage />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/dashboard",
        element: <DashboardPage />,
        errorElement: <ErrorPage />,
    },
    {
        path: "*",
        element: <Navigate to="/" />
    }
]);
