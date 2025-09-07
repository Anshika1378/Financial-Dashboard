import Navbar from "@/components/Navbar";
import StatCard from "@/components/SetCard";
import FilterBar from "@/components/FilterBar";
import ClientsBubble from "@/components/BubbleCart";
import SIPChart from "@/components/ShipChart";
import MISChart from "@/components/MISChart";


export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="p-6 grid grid-cols-2 gap-4">
        <StatCard title="AUM" value="₹12.19 Cr" change="+0.77% MoM" />
        <StatCard title="SIP" value="₹1.39 Lakh" change="+0% MoM" />
      </div>

      <div className="px-6">
        <FilterBar />
      </div>

      <div className="p-6 grid grid-cols-5 gap-4">
        <StatCard title="Purchases" value="₹0.00" change="0 INR" />
        <StatCard title="Redemptions" value="₹0.00" change="0 INR" />
        <StatCard title="Rejected Transactions" value="₹0.00" change="0 INR" />
        <StatCard title="SIP Rejections" value="₹0.00" change="0 INR" />
        <StatCard title="New SIP" value="₹0.00" change="0 INR" />
      </div>

      <div className="p-6 grid grid-cols-3 gap-4">
        <ClientsBubble />
        <SIPChart />
        <MISChart />
      </div>
    </main>
  );
}
