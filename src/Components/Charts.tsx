import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { month: "Jan", users: 200, artists: 250 },
  { month: "Feb", users: 300, artists: 80 },
  { month: "Mar", users: 150, artists: 120 },
  { month: "Apr", users: 200, artists: 140 },
  { month: "May", users: 650, artists: 200 },
  { month: "Jun", users: 600, artists: 240 },
  { month: "Jul", users: 950, artists: 260 },
  { month: "Aug", users: 1100, artists: 300 },
  { month: "Sep", users: 1300, artists: 350 },
  { month: "Oct", users: 1500, artists: 400 },
  { month: "Nov", users: 1700, artists: 460 },
  { month: "Dec", users: 1900, artists: 520 },
];

const UserArtistChart = () => {
  return (
    <div className="ml-0 sm:h-[50%] md:w-[100%] h-[400px] shadow-lg rounded-xl p-4 mt-8">
      <h2 className="text-xl font-semibold mb-3 text-gray-700">
        User & Artist Growth (2025)
      </h2>

      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="users"
            stroke="#0A7692"
            fill="#0A7692"
            fillOpacity={0.3}
          />
          <Area
            type="monotone"
            dataKey="artists"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserArtistChart;
