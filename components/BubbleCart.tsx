"use client";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { x: 100, y: 200, z: 3824, name: "Active" },
  { x: 120, y: 100, z: 541, name: "New" },
  { x: 170, y: 300, z: 60, name: "Inactive" },
  { x: 140, y: 250, z: 2, name: "Online" },
];

export default function ClientsBubble() {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-semibold">Clients</h2>
        <button className="text-sm text-red-500">Download Report</button>
      </div>
      <ScatterChart width={350} height={250}>
        <CartesianGrid />
        <XAxis dataKey="x" hide />
        <YAxis dataKey="y" hide />
        <Tooltip />
        <Legend />
        <Scatter data={data} fill="#ff0000" />
      </ScatterChart>
    </div>
  );
}
