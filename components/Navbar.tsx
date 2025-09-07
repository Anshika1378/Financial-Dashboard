"use client";
import Link from "next/link";

const menuItems = [
  "Home",
  "CRM",
  "Utilities",
  "Insurance",
  "Assets",
  "Mutual",
  "Research",
  "Transact Online",
  "Goal GPS",
  "Financial Planning",
  "Wealth Report",
  "Other",
];

export default function Navbar() {
  return (
    <nav className="bg-red-600 text-white px-6 py-3 flex justify-between items-center shadow">
      <div className="flex space-x-6 overflow-x-auto">
        {menuItems.map((item) => (
          <Link key={item} href="#" className="hover:underline whitespace-nowrap">
            {item}
          </Link>
        ))}
      </div>
      <button className="bg-white text-red-600 px-3 py-1 rounded-md">
        Logout
      </button>
    </nav>
  );
}
