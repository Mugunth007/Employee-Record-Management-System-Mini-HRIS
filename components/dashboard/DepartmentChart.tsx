import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface DepartmentChartProps {
    data: { name: string; count: number }[];
}

const DepartmentChart: React.FC<DepartmentChartProps> = ({ data }) => {
    return (
        <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
                <BarChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(100, 116, 139, 0.2)" />
                    <XAxis dataKey="name" tick={{ fill: '#9ca3af' }} />
                    <YAxis tick={{ fill: '#9ca3af' }} />
                    <Tooltip 
                        contentStyle={{ 
                            backgroundColor: '#1f2937', 
                            borderColor: '#374151',
                            color: '#e5e7eb' 
                        }} 
                    />
                    <Legend />
                    <Bar dataKey="count" name="Employees" fill="#0ea5e9" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default DepartmentChart;