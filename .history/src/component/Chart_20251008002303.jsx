import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, } from "recharts";

const Chart = ({app}) => {
    return (
        <div>
            
<div className="mt-10 w-full">
  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
    Ratings Breakdown
  </h2>

  <div className="bg-white p-4 rounded-xl shadow-sm border">
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={app.ratings}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="count" fill="#8b5cf6" radius={[10, 10, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  </div>
</div>

        </div>
    );
};

export default Chart;