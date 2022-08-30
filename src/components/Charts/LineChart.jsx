import React from "react";
import {Line,Bar} from 'react-chartjs-2'
import '../Charts/Linechart.css'
import Chart from 'chart.js/auto';
import {CategoryScale} from 'chart.js'; 
Chart.register(CategoryScale);

function LineChart({data,country}){
  if(!data){
    return "loading"
  }

  const datay = {
    labels: data.map((e)=>(e.date)),
    datasets: [
      {
        label: "Infected",
        data: data.map((e)=>(e.confirmed)),
        fill: true,
        borderColor: "rgb(25, 0, 255)"
      },
      {
        label: "Deaths",
        data: data.map((e)=>(e.deaths)),
        fill: true,
        borderColor: "rgb(255, 0, 0)",
      }
    ]
};
  const barchart={
    labels: ['Infected','Recovered','Deaths'],
    datasets: [
      {
        label: "People",
        data: [country.confirmed.value,country.recovered.value,country.deaths.value],   
        backgroundColor: ["aqua", "green", "red"],
        borderColor: ["aqua", "green", "red"],
        borderWidth: 0.5,
      },
    ],
};
  return (
    <>
      <div className="chart">
        <Bar data={barchart}></Bar>
        
      </div>      
        <Line data={datay}></Line>
     
    
    </>
    );
};
  
        
export default LineChart;