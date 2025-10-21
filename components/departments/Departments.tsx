import React from 'react';
import { DepartmentsIcon } from '../shared/icons/Icon';
import { DEPARTMENTS } from '../../constants';

const Departments: React.FC = () => {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Departments</h1>
            <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/50 p-6 rounded-2xl">
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Manage Departments</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                    In a full application, this section would allow admins to add, edit, and delete departments.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {DEPARTMENTS.map(dept => (
                        <div key={dept.id} className="flex items-center p-4 bg-gray-100 dark:bg-gray-800 rounded-xl">
                            <DepartmentsIcon className="w-6 h-6 mr-3 text-primary-500"/>
                            <span className="font-medium">{dept.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Departments;