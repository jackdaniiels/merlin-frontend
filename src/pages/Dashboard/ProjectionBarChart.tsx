import { BarChart } from '@mui/x-charts/BarChart';
import chartStyles from '@styles/chart.module.scss';
import { createChartSettings } from '../../factories/chart-settings-factory';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';



function valueFormatter(value: number | null) {
    return `${value || 0}`;
}

const chartSetting = createChartSettings({
    title: "Fechas",
    yLabel: "Proyección Gasto Infraestructura",
});

export const ProjectionBarChart = () => {

    const { data, loading } = useSelector((state: RootState) => state.projection);

    const dataset = data.map(item => ({
        month: new Date(item.date).toLocaleString('default', { month: 'short' }),
        maxSpend: Number(item.max_spend),
        minSpend: Number(item.min_spend),
        proyectedSpend: Number(item.proyected_spend),
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
                    { dataKey: 'proyectedSpend', label: 'Gasto proyectado', valueFormatter, color: '#3fc368ff' },
                    { dataKey: 'minSpend', label: 'Mínimo proyectado', valueFormatter, color: '#EBD944' },
                    { dataKey: 'maxSpend', label: 'Máximo proyectado', valueFormatter, color: '#f3a109ff' },
                ]}
                {...chartSetting}
            />
        </div>
    );
}

