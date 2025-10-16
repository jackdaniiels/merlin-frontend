import { BarChart } from '@mui/x-charts/BarChart';
import chartStyles from '@styles/chart.module.scss';
import { createChartSettings } from '../../factories/chart-settings-factory';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Spinner } from './Spinner';
import { DateRange } from './DateRange';

const ProjectionBarChart = () => {
    const { data, loading } = useSelector((state: RootState) => state.projection);

    if (loading) return <Spinner />;

    const dataset = data
        .map(item => ({

            month: `${new Date(item.date).toLocaleString('default', { month: 'short' })}-${new Date(item.date).getFullYear()}`,
            proyectedSpend: item.proyected_spend ? Number(item.proyected_spend) : 0,
            minSpend: item.min_spend ? Number(item.min_spend) : 0,
            maxSpend: item.max_spend ? Number(item.max_spend) : 0,
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
        <>
            <DateRange min='2025-01-01' max='2025-06-30' />
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
                    {...createChartSettings({
                        title: "Mes",
                        yLabel: "Proyección Gasto Infraestructura",
                    })}
                />
            </div>
        </>
    );
};

export default ProjectionBarChart;