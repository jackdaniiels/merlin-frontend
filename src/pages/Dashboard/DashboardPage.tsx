import { useFetchData } from "../../hooks/useFetchData";
import { getHistoricalData, getProjectionData } from "../../services/api";

const DashboardPage = () => {
    const { data: historicalData, loading: loadH, error: errH } = useFetchData(getHistoricalData);
    const { data: projectionData, loading: loadP, error: errP } = useFetchData(getProjectionData);

    console.log('data', historicalData, projectionData)

    if (loadH || loadP) return <p>Cargando datos...</p>;
    if (errH || errP) return <p>Error: {errH || errP}</p>;

    return (
        <div>
            <h1>InfraVision Dashboard</h1>
            {/* <pre>{JSON.stringify(historicalData?.data, null, 2)}</pre> */}
            <pre>{JSON.stringify(projectionData?.data, null, 2)}</pre>
        </div>
    );
}

export default DashboardPage