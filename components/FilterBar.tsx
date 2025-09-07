"use client";

const filters = ["3 Days", "7 Days", "10 Days", "30 Days"];

export default function FilterBar() {
  return (
    <div className="flex space-x-4 my-4">
      {filters.map((f) => (
        <button
          key={f}
          className="px-4 py-2 rounded-md border bg-white shadow hover:bg-red-500 hover:text-white transition"
        >
          {f}
        </button>
      ))}
    </div>
  );
}
