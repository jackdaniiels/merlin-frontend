import { useSelector } from "react-redux";
import { DashboardLayout } from "./DashboardLayout";
// import { DateRange } from "./DateRange";
import { Filters } from "./Filters";
import { RootState } from "../../store/store";
import { lazy, Suspense } from "react";
import { Spinner } from "./Spinner";


const LazyProjectionBarChart = lazy(() => import('./ProjectionBarChart'));
const LazyHistoricBarChart = lazy(() => import('./HistoricBarChart'));

const DashboardPage = () => {

    const { type } = useSelector((state: RootState) => state.filters);

    const typeContentMap: Record<string, JSX.Element> = {
        'Histórico': <Suspense fallback={<Spinner />}><LazyHistoricBarChart /></Suspense>,
        'Proyección': <Suspense fallback={<Spinner />}><LazyProjectionBarChart /></Suspense>,
        'Histórico y Proyección': <Suspense fallback={<Spinner />}><LazyHistoricBarChart /> <LazyProjectionBarChart /></Suspense>,
    };

    return (
        <DashboardLayout>
            {/* <DateRange /> */}
            <Filters />
            {typeContentMap[type]}
        </DashboardLayout>
    );
}

export default DashboardPage