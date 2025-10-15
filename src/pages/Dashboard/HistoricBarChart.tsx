import { BarChart } from '@mui/x-charts/BarChart';
import chartStyles from '@styles/chart.module.scss';
import { createChartSettings } from '../../factories/chart-settings-factory';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';


function valueFormatter(value: number | null) {
    return `$${value || 0} USD`;
}

const chartSetting = createChartSettings({
    title: "Fechas",
    yLabel: "Histórico Gasto Infraestructura",
});


export const HistoricBarChart = () => {
    const { data, loading } = useSelector((state: RootState) => state.historic);

    const dataset = data.map(item => ({
        month: new Date(item.date).toLocaleString('default', { month: 'short' }),
        spend: Number(item.spend),
    }));

    if (loading) return <div>Cargando gráfico...</div>;

    return (
        <div className={chartStyles.chart}>
            <BarChart
                dataset={dataset}
                sx={{
                    [`& .MuiBarElement-root`]: {
                        rx: 6,
                    },
                }}
                series={[
                    { dataKey: 'spend', label: 'Gasto', valueFormatter, color: '#06a1f4ff' },
                ]}
                {...chartSetting}
            />
        </div>
    );
}

