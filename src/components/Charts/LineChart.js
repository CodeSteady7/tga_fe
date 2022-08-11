import React from "react";
import { Bar, Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);


export default function LineChart() {
  return (
    <>
      <Bar
        data={{
          labels: ['OB', 'KTS Mi', 'KTS Ma'],
          datasets: [
            {
              label: [' Temuan'],
              data: [12, 4, 8],
              backgroundColor: ['#28DAC6'],
              borderColor: ['#28DAC6'],
              borderWidth: 3,
              barThickness: 12,
              hoverOffset: 10,
            },
          ],
        }}
        height={400}
        width={600}
        options={{

          maintainAspectRatio: true,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          title: {
            display: true,
            text: 'Power Factor',
            fontSize: 25,
          },
          legend: {
            display: true,
            position: 'bottom',
          },
        }}
      />
    </>
  )
}



