import React from 'react';
import StatCard from './StatCard';
import DepartmentChart from './DepartmentChart';
import GrowthChart from './GrowthChart';
import { INITIAL_EMPLOYEES } from '../../constants';
import { EmployeesIcon, DepartmentsIcon } from '../shared/icons/Icon';
import { Employee } from '../../types';

const Dashboard: React.FC = () => {
    // In a real app, this data would come from a context or a hook like `useEmployees`
    const employees: Employee[] = INITIAL_EMPLOYEES;
    const totalEmployees = employees.length;
    const activeEmployees = employees.filter(e => e.status === 'Active').length;
    const onLeave = employees.filter(e => e.status === 'On Leave').length;
    
    // Calculate department distribution
    const departmentCounts = employees.reduce((acc, employee) => {
        acc[employee.department] = (acc[employee.department] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);

    const departmentData = Object.keys(departmentCounts).map(name => ({
        name,
        count: departmentCounts[name],
    }));

    // Calculate employee growth trend (mock data for visualization)
    const growthData = [
        { name: '2020', count: employees.filter(e => new Date(e.dateOfJoining).getFullYear() <= 2020).length },
        { name: '2021', count: employees.filter(e => new Date(e.dateOfJoining).getFullYear() <= 2021).length },
        { name: '2022', count: employees.filter(e => new Date(e.dateOfJoining).getFullYear() <= 2022).length },
        { name: '2023', count: employees.filter(e => new Date(e.dateOfJoining).getFullYear() <= 2023).length },
        { name: '2024', count: totalEmployees },
    ];


    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <StatCard title="Total Employees" value={totalEmployees.toString()} icon={EmployeesIcon} />
                <StatCard title="Active Employees" value={activeEmployees.toString()} icon={EmployeesIcon} color="green" />
                <StatCard title="On Leave" value={onLeave.toString()} icon={EmployeesIcon} color="yellow" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                 <div className="bg-white dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-200 dark:border-gray-700/50">
                    <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Department Distribution</h2>
                    <DepartmentChart data={departmentData} />
                </div>
                 <div className="bg-white dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-200 dark:border-gray-700/50">
                    <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Employee Growth</h2>
                    <GrowthChart data={growthData} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;