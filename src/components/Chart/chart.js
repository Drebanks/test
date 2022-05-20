import React from "react";
import { Line } from "react-chartjs-2";
import classes from "./chart.module.css";
import { Chart, registerables } from "chart.js";

const LineChart = () => {
  Chart.register(...registerables);

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Inflow",
        data: [0, 10, 500, 1000, 10000, 2000],
        backgroundColor: "#6D3CC8",
        borderColor: "#6D3CC8",
      },
      {
        label: "Outflow",
        data: [2000, 10, 900, 5000, 1000, 2000],
        backgroundColor: "#059669",
        borderColor: "#059669",
      },
    ],
  };
  return (
    <div className={classes.cont}>
      <Line
        data={data}
        option={{
          title: {
            display: true,
            text: "Months",
            fontSize: 16,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </div>
  );
};

export default LineChart;
