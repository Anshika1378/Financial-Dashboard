interface StatCardProps {
  title: string;
  value: string;
  change: string;
}

export default function StatCard({ title, value, change }: StatCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col justify-between">
      <h2 className="text-gray-500 text-sm">{title}</h2>
      <p className="text-2xl font-bold">{value}</p>
      <span className="text-green-600 text-sm">{change}</span>
      <button className="mt-2 bg-red-500 text-white px-3 py-1 text-sm rounded">
        View Report
      </button>
    </div>
  );
}
