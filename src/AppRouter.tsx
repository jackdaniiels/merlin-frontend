import {
    createBrowserRouter,
    Navigate,
} from "react-router";

import DashboardPage from "./pages/Dashboard/DashboardPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <DashboardPage />,
    },
    {
        path: "/dashboard",
        element: <DashboardPage />,
    },
    {
        path: "*",
        element: <Navigate to="/" />
    }
]);
