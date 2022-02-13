import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const maxAmount = Math.max(
    ...props.chartPoints.map((chartPoint) => chartPoint.value)
  );
  return (
    <div className="chart">
      {props.chartPoints.map((chartPoint) => (
        <ChartBar
          key={chartPoint.label}
          value={chartPoint.value}
          label={chartPoint.label}
          max={maxAmount}
        />
      ))}
    </div>
  );
};

export default Chart;
