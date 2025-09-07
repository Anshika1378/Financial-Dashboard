"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Jan", a: 0.2, b: 0.4, c: 0.1 },
  { name: "Feb", a: 0.3, b: 0.45, c: 0.15 },
  { name: "Mar", a: 0.35, b: 0.5, c: 0.2 },
  { name: "Apr", a: 0.4, b: 0.55, c: 0.25 },
  { name: "May", a: 0.45, b: 0.6, c: 0.3 },
];

export default function MISChart() {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-semibold">Monthly MIS</h2>
        <button className="text-sm text-red-500">View Report</button>
      </div>
      <LineChart width={350} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="a" stroke="#8884d8" />
        <Line type="monotone" dataKey="b" stroke="#82ca9d" />
        <Line type="monotone" dataKey="c" stroke="#ff0000" />
      </LineChart>
    </div>
  );
}
