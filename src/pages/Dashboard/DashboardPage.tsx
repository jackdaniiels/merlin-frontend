import { useSelector } from "react-redux";
import { DashboardLayout } from "./DashboardLayout";
import { DateRange } from "./DateRange";
import { Filters } from "./Filters";
import { HistoricBarChart } from "./HistoricBarChart";
import { RootState } from "../../store/store";
import { ProjectionBarChart } from "./ProjectionBarChart";
import { ProjectionPieChart } from "./ProjectionPieChart";
import { HistoricPieChart } from "./HistoricPieChart";


const DashboardPage = () => {

    const { type } = useSelector((state: RootState) => state.filters);

    const typeContentMap: Record<string, JSX.Element> = {
        'Histórico': <HistoricPieChart />,
        'Proyección': <><ProjectionPieChart /></>,
        'Histórico y Proyección': <><HistoricBarChart /> <ProjectionBarChart /></>,
    };

    return (
        <DashboardLayout>
            <DateRange />
            <Filters />
            {typeContentMap[type]}
        </DashboardLayout>
    );
}

export default DashboardPage