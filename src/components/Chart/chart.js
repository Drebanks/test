import React from "react";
import { Line } from "react-chartjs-2";
import classes from "./chart.module.css";
import { Chart, registerables } from "chart.js";

const LineChart = () => {
  Chart.register(...registerables);

  const data = {
    labels: ["MAR 2021, MAR 2021, MAR 2021, MAR 2021, MAR 2021, MAR 2021"],
    datasets: [
      {
        label: "For Month of march (M)",
        data: ["0, 10, 500, 1000, 10000"],
        backgroundColor: ["red, green"]
      },
      {
          label: "For Month of march (M)",
          data: ["0, 10, 500, 1000, 10000"],
      }
    ],
  };
  return (
    <div className={classes.cont}>
      <Line data={data} />
    </div>
  );
};

export default LineChart;
