import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import PersonIcon from "@mui/icons-material/Person";
import StatsCard from "../Components/StatsCard";

const data = [
  { month: "Jan", songs: 300, users: 200 },
  { month: "Feb", songs: 450, users: 280 },
  { month: "Mar", songs: 600, users: 350 },
  { month: "Apr", songs: 700, users: 420 },
  { month: "May", songs: 900, users: 500 },
  { month: "Jun", songs: 1000, users: 560 },
  { month: "Jul", songs: 1100, users: 600 },
  { month: "Aug", songs: 1300, users: 680 },
  { month: "Sep", songs: 1400, users: 750 },
  { month: "Oct", songs: 1600, users: 820 },
  { month: "Nov", songs: 1700, users: 880 },
  { month: "Dec", songs: 1900, users: 950 },
];

const Reports = () => {
  return (
    <div className="p-6">
      {/* <h1 className="text-2xl font-semibold mb-4 mt-4 text-[#0A7692]">
        Reports
      </h1> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <StatsCard title="Total Songs" value="8,900" Icon={LibraryMusicIcon} />
        <StatsCard title="Active Users" value="4,320" Icon={PersonIcon} />
      </div>

      {/* Bar Chart */}
      <div className="bg-white rounded-lg shadow-lg p-4 h-[400px]">
        <h2 className="text-lg font-semibold mb-4 text-[#0A7692]">
          Monthly Growth Report
        </h2>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 50,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="songs" fill="#0A7692" name="Songs Uploaded" />
            <Bar dataKey="users" fill="#31c48d" name="New Users" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Reports;
