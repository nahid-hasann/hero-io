import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, } from "recharts";

const Chart = ({ app }) => {
    return (
        <div>

            <div className="mt-10 w-full">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4"> Ratings </h2>

                <div className="bg-white p-4 rounded-xl shadow-sm border">
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={app.title}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="count" fill="#00d390"/>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

        </div>
    );
};

export default Chart;