#!/bin/bash
echo "Creando estructura del proyecto InfraVision..."

mkdir -p src/{assets/styles,components/{charts,filters,cards,insights},pages/Dashboard,services,hooks,context,data,tests/{components,pages},utils}


touch src/{App.tsx,main.tsx,setupTests.ts,index.css}
touch src/services/{api.ts,dataParser.ts,aiSummary.ts}
touch src/hooks/{useFetchData.ts,useFilters.ts,useAiInsights.ts}
touch src/context/FiltersContext.tsx
touch src/utils/{formatCurrency.ts,calculateVariation.ts,constants.ts}
touch src/pages/Dashboard/{Dashboard.tsx,DashboardHeader.tsx,DashboardLayout.tsx}
touch src/tests/{components/MetricCard.test.tsx,pages/Dashboard.test.tsx}
touch src/components/{charts/LineChart.tsx,filters/FilterBar.tsx,cards/MetricCard.tsx,insights/AiInsightBox.tsx}

echo "Estructura creada con éxito."
