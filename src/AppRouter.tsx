import {
    createBrowserRouter,
    Navigate,
} from "react-router";
import { lazy, Suspense } from 'react';
import { Spinner } from "./pages/Dashboard/Spinner";

const DashboardPage = lazy(() => import('./pages/Dashboard/DashboardPage'));
const ErrorPage = lazy(() => import('./pages/Error/ErrorPage'));

export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Suspense fallback={<Spinner />}>
                <DashboardPage />
            </Suspense>
        ),
        errorElement: (
            <Suspense fallback={<Spinner />}>
                <ErrorPage />
            </Suspense>
        ),
    },
    {
        path: "*",
        element: <Navigate to="/" />,
    },
]);
