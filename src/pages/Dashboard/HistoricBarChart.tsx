import { BarChart } from '@mui/x-charts/BarChart';
import chartStyles from '@styles/chart.module.scss';
import { createChartSettings } from '../../factories/chart-settings-factory';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export const HistoricBarChart = () => {
    const { data, loading } = useSelector((state: RootState) => state.historic);

    if (loading) return <div>Cargando gráfico...</div>;

    const dataset = data
        .map(item => ({
            month: `${new Date(item.date).toLocaleString('default', { month: 'short' })}-${new Date(item.date).getFullYear()}`,
            monthw: `W${Math.ceil(new Date(item.date).getDate() / 7)}-${new Date(item.date).getFullYear()}`,
            monthd: `${new Date(item.date).getDate()}-${new Date(item.date).toLocaleString('default', { month: 'short' })}-${new Date(item.date).getFullYear()}`,
            spend: item.spend ? Number(item.spend) : 0,
        }))
        .sort((a, b) => {
            const [aMon, aYear] = a.month.split('-');
            const [bMon, bYear] = b.month.split('-');
            const aDate = new Date(`${aMon} 1, ${aYear}`);
            const bDate = new Date(`${bMon} 1, ${bYear}`);
            return aDate.getTime() - bDate.getTime();
        });

    const valueFormatter = (value: number | null) => `$${value || 0} USD`;

    return (
        <div className={chartStyles.chart}>
            <BarChart
                dataset={dataset}
                sx={{
                    [`& .MuiBarElement-root`]: {
                        rx: 2,
                    },
                }}
                series={[
                    { dataKey: 'spend', label: 'Gasto', valueFormatter, color: '#06a1f4ff' },
                ]}
                {...createChartSettings({
                    title: "Mes",
                    yLabel: "Histórico Gasto Infraestructura",
                })}
            />
        </div>
    );
};
