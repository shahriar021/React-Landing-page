import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Web", "App", "SQA"],
  ["2014", 1000, 400, 200],
  ["2017", 1170, 460, 250],
  ["2019", 660, 1120, 300],
  ["2023", 1030, 940, 350],
];

export const options = {
  chart: {
    title: "Our Performance",
    subtitle: "Web dev, App dev, and SQA: 2014-2023",
  },
};

export function Barchart() {
  return (
    <Chart
      chartType="Bar"
      max-width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
