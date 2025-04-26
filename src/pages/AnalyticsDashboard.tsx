// src/pages/AnalyticsDashboard.tsx
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, LineChart, Line, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';
import { Incident } from '../types/Incident';

const COLORS = ['#f87171', '#facc15', '#34d399', '#60a5fa', '#a78bfa'];

const AnalyticsDashboard = ({ incidents }: { incidents: Incident[] }) => {
  // Count incidents per severity
  const severityData = ['Low', 'Medium', 'High'].map((sev) => ({
    name: sev,
    count: incidents.filter((i) => i.severity === sev).length,
  }));

  // Count incidents per status for PieChart
  const statusCounts: Record<string, number> = {};
  incidents.forEach((i) => {
    statusCounts[i.status] = (statusCounts[i.status] || 0) + 1;
  });
  const statusData = Object.keys(statusCounts).map((key) => ({
    name: key,
    value: statusCounts[key],
  }));

  // Group incidents by date (line chart)
  const dateMap: Record<string, number> = {};
  incidents.forEach((i) => {
    const date = new Date(i.reported_at).toISOString().split('T')[0];
    dateMap[date] = (dateMap[date] || 0) + 1;
  });
  const trendData = Object.entries(dateMap).map(([date, count]) => ({ date, count }));

  return (
    <div className="p-6 space-y-10">
      <h1 className="text-2xl font-bold text-center">Analytics Dashboard</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-lg font-semibold mb-2">Incident Count by Severity</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={severityData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#60a5fa" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Distribution by Status</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={statusData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name }) => name}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {statusData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="lg:col-span-2">
          <h2 className="text-lg font-semibold mb-2">Incident Trends Over Time</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={trendData}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <Line type="monotone" dataKey="count" stroke="#34d399" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
