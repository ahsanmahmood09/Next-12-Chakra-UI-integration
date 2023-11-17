import dynamic from 'next/dist/shared/lib/dynamic';

import { ChartProps } from './LineAreaChart';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function LineChart({ chartOptions, chartData }: ChartProps) {
  return (
    <Chart
      options={chartOptions}
      series={chartData}
      type='line'
      width='100%'
      height='100%'
    />
  );
}
