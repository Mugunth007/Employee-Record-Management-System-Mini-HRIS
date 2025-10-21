import React from 'react';
import { Employee } from '../../types';
import { useAuth } from '../../context/AuthContext';
import { EditIcon, DeleteIcon } from '../shared/icons/Icon';

interface EmployeeTableProps {
    employees: Employee[];
    onEdit: (employee: Employee) => void;
    onDelete: (employee: Employee) => void;
}

const statusColorMap: Record<Employee['status'], string> = {
    Active: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    'On Leave': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
    Resigned: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
};


const EmployeeTable: React.FC<EmployeeTableProps> = ({ employees, onEdit, onDelete }) => {
    const { user } = useAuth();
    
    return (
        <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/50 rounded-2xl overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700/50">
                <thead className="bg-gray-50 dark:bg-gray-800/50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Name</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Department</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Salary</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
                        <th scope="col" className="relative px-6 py-3"><span className="sr-only">Actions</span></th>
                    </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800/20 divide-y divide-gray-200 dark:divide-gray-700/50">
                    {employees.map((employee) => (
                        <tr key={employee.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 h-10 w-10">
                                        {employee.profilePhoto ? (
                                            <img className="h-10 w-10 rounded-full object-cover" src={employee.profilePhoto} alt={employee.name} />
                                        ) : (
                                            <div className="h-10 w-10 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 font-bold">
                                                {employee.name.charAt(0)}
                                            </div>
                                        )}
                                    </div>
                                    <div className="ml-4">
                                        <div className="text-sm font-medium text-gray-900 dark:text-white">{employee.name}</div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">{employee.employeeId}</div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900 dark:text-white">{employee.department}</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">{employee.designation}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">${employee.salary.toLocaleString()}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColorMap[employee.status]}`}>
                                    {employee.status}
                                </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                {user?.role === 'Admin' && (
                                    <div className="flex items-center justify-end space-x-4">
                                        <button onClick={() => onEdit(employee)} className="text-primary-600 hover:text-primary-900 dark:text-primary-400 dark:hover:text-primary-200">
                                            <EditIcon className="w-5 h-5"/>
                                        </button>
                                        <button onClick={() => onDelete(employee)} className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-200">
                                            <DeleteIcon className="w-5 h-5"/>
                                        </button>
                                    </div>
                                )}
                            </td>
                        </tr>
                    ))}
                     {employees.length === 0 && (
                        <tr>
                            <td colSpan={5} className="text-center py-10 text-gray-500 dark:text-gray-400">
                                No employees found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeTable;