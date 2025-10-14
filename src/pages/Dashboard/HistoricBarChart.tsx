import { BarChart } from '@mui/x-charts/BarChart';
import chartStyles from '@styles/chart.module.scss';
import { createChartSettings } from '../../factories/chart-settings-factory';

const dataset = [
    {
        london: 59,
        paris: 57,
        newYork: 86,
        seoul: 21,
        month: 'Jan',
    },
    {
        london: 50,
        paris: 52,
        newYork: 78,
        seoul: 28,
        month: 'Feb',
    },
    {
        london: 47,
        paris: 53,
        newYork: 106,
        seoul: 41,
        month: 'Mar',
    }
];

function valueFormatter(value: number | null) {
    return `$${value || 0} USD`;
}

const chartSetting = createChartSettings({
    title: "Fechas",
    yLabel: "Histórico Gasto Infraestructura",
});


export const HistoricBarChart = () => {
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
                    { dataKey: 'london', label: 'Gasto', valueFormatter, color: '#06a1f4ff' },
                    { dataKey: 'paris', label: 'Gasto proyectado', valueFormatter, color: '#3fc368ff' },
                    { dataKey: 'newYork', label: 'Mínimo proyectado', valueFormatter, color: '#EBD944' },
                    { dataKey: 'seoul', label: 'Máximo proyectado', valueFormatter, color: '#f3a109ff' },
                ]}
                {...chartSetting}
            />
        </div>
    );
}

