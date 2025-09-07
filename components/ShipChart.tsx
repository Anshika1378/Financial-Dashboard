"use client";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Mar", sip: 2.0, trend: 1.5 },
  { name: "Apr", sip: 2.2, trend: 1.6 },
  { name: "May", sip: 2.4, trend: 1.7 },
  { name: "Jun", sip: 2.0, trend: 1.8 },
];

export default function SIPChart() {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-semibold">SIP Business Chart</h2>
        <button className="text-sm text-red-500">View Report</button>
      </div>
      <ComposedChart width={350} height={250} data={data}>
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="sip" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="trend" stroke="#ff7300" />
      </ComposedChart>
    </div>
  );
}
