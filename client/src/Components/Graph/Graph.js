import React from 'react'
import { Line } from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'


const Graph = () => {
    const dataPlot = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "First dataset",
            data: [33, 53, 85, 41, 44, 65],
            fill: false,
            borderColor: 'Green',
          },
        ]
      };
  return (
    <div style={{width: '400px', height: '300px'}}>
        <Line data={dataPlot}/>
    </div>
  )
}

export default Graph