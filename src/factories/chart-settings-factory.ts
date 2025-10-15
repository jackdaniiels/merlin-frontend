interface ChartSettingOptions {
    title?: string;
    xKey?: string;
    height?: number;
    yLabel?: string;
    labelColor?: string;
    tickColor?: string;
    categoryGapRatio?: number;
    barGapRatio?: number;
}

export const createChartSettings = ({
    title = "Gráfico",
    xKey = "month",
    height = 260,
    yLabel = "Valor",
    labelColor = "#666",
    tickColor = "#999",
    categoryGapRatio = 0.7,
    barGapRatio = 0.1,
}: ChartSettingOptions = {}) => ({
    height,
    yAxis: [
        {
            label: `${yLabel} (USD)`,
            labelStyle: { fill: labelColor, fontSize: 12 },
            tickLabelStyle: { fill: tickColor, fontSize: 11 },
        },
    ],
    xAxis: [
        {
            dataKey: xKey,
            label: title,
            labelStyle: { fill: labelColor, fontSize: 12 },
            tickLabelStyle: { fill: tickColor, fontSize: 11 },
            categoryGapRatio,
            barGapRatio,
        },
    ]
});
