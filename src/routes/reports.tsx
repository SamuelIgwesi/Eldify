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
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import PersonIcon from "@mui/icons-material/Person";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import InsightsIcon from "@mui/icons-material/Insights";
import StatsCard from "../Components/StatsCard";

const COLORS = ["#0A7692", "#31c48d", "#f59e0b", "#e11d48"];

const monthlyData = [
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

const genreData = [
  { name: "Afrobeat", value: 400 },
  { name: "Gospel", value: 300 },
  { name: "Pop", value: 300 },
  { name: "Hip-hop", value: 200 },
];

const activeData = [
  { day: "Mon", active: 200 },
  { day: "Tue", active: 400 },
  { day: "Wed", active: 600 },
  { day: "Thu", active: 500 },
  { day: "Fri", active: 700 },
  { day: "Sat", active: 800 },
  { day: "Sun", active: 650 },
];

const Reports = () => {
  return (
    <div className="p-6 space-y-6 sm:space-y-8">
      <h1 className="mt-4 text-3xl font-semibold text-[#0A7692]">Reports</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
        <StatsCard title="Total Songs" value="8,900" Icon={LibraryMusicIcon} />
        <StatsCard title="Active Users" value="4,320" Icon={PersonIcon} />
        <StatsCard title="Growth Rate" value="12.4%" Icon={TrendingUpIcon} />
        <StatsCard title="Engagement Index" value="89%" Icon={InsightsIcon} />
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-6">
        <div className="bg-white rounded-lg shadow-lg p-4 h-[380px] sm:h-[400px]">
          <h2 className="text-lg font-semibold mb-4 text-[#0A7692]">
            Monthly Upload & User Growth
          </h2>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthlyData}>
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

        <div className="bg-white rounded-lg shadow-lg p-4 h-[380px] sm:h-[400px]">
          <h2 className="text-lg font-semibold mb-4 text-[#0A7692]">
            Weekly Active Users Trend
          </h2>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={activeData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="active"
                stroke="#31c48d"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-6">
        <div className="bg-white rounded-lg shadow-lg p-4 h-[380px] sm:h-[400px] flex flex-col items-center justify-center">
          <h2 className="text-lg font-semibold mb-4 text-[#0A7692]">
            Genre Distribution
          </h2>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={genreData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name }) => name}
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
              >
                {genreData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between">
          <h2 className="text-lg font-semibold mb-4 text-[#0A7692]">
            Key Insights
          </h2>
          <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
            <li>🎵 Afrobeat songs dominate uploads (40%).</li>
            <li>👥 User engagement peaks on weekends.</li>
            <li>📈 Monthly uploads increased by 25% since last quarter.</li>
            <li>💡 Top artists contribute 60% of total streams.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Reports;
