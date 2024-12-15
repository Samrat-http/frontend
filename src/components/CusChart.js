// components/BarChart.js
import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Import Chart.js

const CusChart = ({ data }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');

    // Format the data for Chart.js
    const chartData = {
      labels: data.map(item => item.name), // Extract names for labels
      datasets: [
        {
          label: 'Total Revenue',
          data: data.map(item => item.value), // Extract values for data
          backgroundColor: 'rgba(75, 192, 192, 0.4)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };

    // Create a new Chart instance
    const chart = new Chart(ctx, {
      type: 'bar', // Specify the chart type
      data: chartData,
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    // Cleanup function to destroy the chart instance
    return () => {
      chart.destroy();
    };
  }, [data]); // Re-run effect when data changes

  return <canvas ref={canvasRef} />;
};

export default CusChart;
