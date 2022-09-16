import React, { useState } from 'react'
import { Doughnut } from 'react-chartjs-2';
import {Chart as ChartJs} from 'chart.js/auto';

export default function PieChart() {
    const [data, setData] = useState({
        datasets: [{
            data: [50, 25, 25],
            backgroundColor:[
              '#2D5BFF',
              '#6284FD',
              '#96ADFF'
            ]
        },
      ],
    });
  return (
    <div>
         <Doughnut data={data}/>
    </div>
  )
}
