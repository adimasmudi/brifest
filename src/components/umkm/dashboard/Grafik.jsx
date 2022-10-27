import React from 'react'
import { Line } from 'react-chartjs-2'
import Chart from 'chart.js/auto'
import { CategoryScale } from 'chart.js'
Chart.register(CategoryScale)

const Grafik = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'top',
      },
      title: {
        display: false,
      },
    },
  }

  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => Math.floor(Math.random() * 100)),
        borderColor: '#41754C',
        backgroundColor: '#ffffff',
      },
    ],
  }

  return (
    <div>
      <h2 className='font-medium text-base mt-4'>Investor</h2>
      <Line data={data} options={options} height={80} />
    </div>
  )
}

export default Grafik
