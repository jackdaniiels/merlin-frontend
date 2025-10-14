import { BarChart } from '@mui/x-charts/BarChart';
import chartStyles from '@styles/chart.module.scss';
import { createChartSettings } from '../../factories/chart-settings-factory';

const dataset = [
    {
        vertical: "Retail",
        id: 1,
        area: "Platform",
        initiative: "Pocket Growth",
        service: "Kubernetes (GKE)",
        date: "2025-01-01T05:00:00.000Z",
        proyected_spend: 1989.52,
        max_spend: 2201.80,
        min_spend: 1582.26
    },
    {
        vertical: 2,
        id: "Retail",
        area: "Promotion",
        initiative: "Ad Targeting",
        service: "AWS Redshift",
        date: "2025-01-01T05:00:00.000Z",
        proyected_spend: 1601.65,
        max_spend: 1771.78,
        min_spend: 1337.90
    },
    {
        vertical: 3,
        id: "Fintech",
        area: "Lending",
        initiative: "Logistics Optimization",
        service: "AWS S3",
        date: "2025-01-01T05:00:00.000Z",
        proyected_spend: 291.24,
        max_spend: 322.26,
        min_spend: 237.76
    },
    {
        vertical: 4,
        id: "Fintech",
        area: "Deposits",
        initiative: "Search Relevance",
        service: "Kubernetes (GKE)",
        date: "2025-01-01T05:00:00.000Z",
        proyected_spend: 1501.95,
        max_spend: 1623.29,
        min_spend: 1128.32
    },
    {
        vertical: 5,
        id: "Fintech",
        area: "Deposits",
        initiative: "Logistics Optimization",
        service: "GCP Cloud Storage",
        date: "2025-01-01T05:00:00.000Z",
        proyected_spend: 1871.27,
        max_spend: 2045.41,
        min_spend: 1587.54
    },
    {
        vertical: 6,
        id: "Fintech",
        area: "Pocket",
        initiative: "Fraud Shield",
        service: "GCP BigQuery",
        date: "2025-01-02T05:00:00.000Z",
        proyected_spend: 2289.90,
        max_spend: 2491.21,
        min_spend: 1842.79
    },
    {
        vertical: 7,
        id: "Retail",
        area: "Delivery",
        initiative: "Checkout Revamp",
        service: "AWS Redshift",
        date: "2025-01-02T05:00:00.000Z",
        proyected_spend: 1504.45,
        max_spend: 1671.64,
        min_spend: 1152.01
    },
    {
        vertical: 8,
        id: "Fintech",
        area: "Pocket",
        initiative: "Fraud Shield",
        service: "GCP Cloud Run",
        date: "2025-01-02T05:00:00.000Z",
        proyected_spend: 885.78,
        max_spend: 987.14,
        min_spend: 724.22
    },
    {
        vertical: 9,
        id: "Retail",
        area: "Advertisement",
        initiative: "Lending Scoring",
        service: "GCP BigQuery",
        date: "2025-01-02T05:00:00.000Z",
        proyected_spend: 632.48,
        max_spend: 689.32,
        min_spend: 507.26
    },
    {
        vertical: 10,
        id: "Fintech",
        area: "Transfers",
        initiative: "Seller Onboarding 2.0",
        service: "GCP Cloud Run",
        date: "2025-01-02T05:00:00.000Z",
        proyected_spend: 951.50,
        max_spend: 1053.04,
        min_spend: 715.71
    },
];

function valueFormatter(value: number | null) {
    return `${value || 0}`;
}

const chartSetting = createChartSettings({
    title: "Fechas",
    yLabel: "Proyección Gasto Infraestructura",
});

export const ProjectionBarChart = () => {
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
                    { dataKey: 'proyected_spend', label: 'Gasto proyectado', valueFormatter, color: '#3fc368ff' },
                    { dataKey: 'min_spend', label: 'Mínimo proyectado', valueFormatter, color: '#EBD944' },
                    { dataKey: 'max_spend', label: 'Máximo proyectado', valueFormatter, color: '#f3a109ff' },
                ]}
                {...chartSetting}
            />
        </div>
    );
}

