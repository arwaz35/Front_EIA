import React from "react";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend } from "recharts";

export default function RTGraph({ data }) {
  return (
    <LineChart width={600} height={200} data={data}>
      <CartesianGrid strokeDasharray="10 10"></CartesianGrid>
      <XAxis type="number" dataKey="id" domain={[0, 100]}></XAxis>
      <YAxis></YAxis>
      <Legend></Legend>
      <Line type="monotone" dataKey="value" stroke="black" data={data}></Line>
      {/* <Line type="monotone" dataKey="value" stroke="red" data={data_1}></Line> */}
      {/* <Line type="monotone" dataKey="amt" stroke="blue"></Line> */}
    </LineChart>
  );
}
