import React from "react";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend } from "recharts";

export default function Graph({ data }) {
  return (
    <LineChart width={600} height={200} data={data}>
      <CartesianGrid strokeDasharray="10 10"></CartesianGrid>
      <XAxis type="number" dataKey="id"></XAxis>
      <YAxis></YAxis>
      <Legend></Legend>
      <Line type="monotone" dataKey="value" stroke="black"></Line>
      {/* <Line type="monotone" dataKey="pv" stroke="red"></Line> */}
      {/* <Line type="monotone" dataKey="amt" stroke="blue"></Line> */}
    </LineChart>
  );
}
