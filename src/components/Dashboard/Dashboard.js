import React from "react";
import {
    Area,
    AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./Dashboard.css";

const Dashboard = () => {
  const data = [
    {
      month: "Mar",
      investment: 100000,
      sell: 241,
      revenue: 10401,
    },
    {
      month: "Apr",
      investment: 200000,
      sell: 423,
      revenue: 24500,
    },
    {
      month: "May",
      investment: 500000,
      sell: 726,
      revenue: 67010,
    },
    {
      month: "Jun",
      investment: 500000,
      sell: 529,
      revenue: 40405,
    },
    {
      month: "Jul",
      investment: 600000,
      sell: 601,
      revenue: 50900,
    },
    {
      month: "Aug",
      investment: 700000,
      sell: 670,
      revenue: 61000,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-16">
      <div>
        <h2 className="text-center text-blue-500 text-xl font-bold my-10">
          Investment vs Revenue
        </h2>
        <LineChart
          width={530}
          height={350}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line dataKey="investment" stroke="#8884d8" />
          <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
        </LineChart>
      </div>

      <div>
        <h2 className="text-center text-blue-500 text-xl font-bold my-10">
          Investment vs Revenue
        </h2>
        <BarChart width={530} height={350} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="investment" fill="#8884d8" />
          <Bar dataKey="revenue" fill="#82ca9d" />
        </BarChart>
      </div>

      <div>
        <h2 className="text-center text-blue-500 text-xl font-bold my-10">
          Investment vs Revenue
        </h2>
        <PieChart width={530} height={350}>
          <Pie
            data={data}
            dataKey="investment"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={50}
            fill="#8884d8"
          />
          <Pie
            data={data}
            dataKey="revenue"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#82ca9d"
            label
          />
        </PieChart>
      </div>

      <div>
        <h2 className="text-center text-blue-500 text-xl font-bold my-10">
          Investment vs Revenue
        </h2>
        <AreaChart
          width={530}
          height={350}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <XAxis dataKey="month" />
          <YAxis />
          <Area dataKey="revenue" stroke="#8884d8" fill="#8884d8" />
          <Tooltip />
        </AreaChart>
      </div>
    </div>
  );
};

export default Dashboard;
