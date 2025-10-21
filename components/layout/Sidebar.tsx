import React from 'react';
import type { Page } from '../../App';
import { DashboardIcon, EmployeesIcon, DepartmentsIcon, ProfileIcon } from '../shared/icons/Icon';
import { useAuth } from '../../context/AuthContext';

interface SidebarProps {
    currentPage: Page;
    setCurrentPage: (page: Page) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentPage, setCurrentPage }) => {
    const { user } = useAuth();
    
    const navItems = [
        { name: 'Dashboard', icon: DashboardIcon },
        { name: 'Employees', icon: EmployeesIcon },
        { name: 'Departments', icon: DepartmentsIcon },
        { name: 'Profile', icon: ProfileIcon },
    ] as const;

    return (
        <aside className="w-64 flex-shrink-0 bg-white dark:bg-gray-900/50 border-r border-gray-200 dark:border-gray-800 hidden md:block">
            <div className="flex items-center justify-center h-20 border-b border-gray-200 dark:border-gray-800">
                <h1 className="text-2xl font-bold text-primary-600 dark:text-primary-400">HRIS</h1>
            </div>
            <nav className="mt-6">
                <ul>
                    {navItems.map((item) => (
                        <li key={item.name} className="px-6 py-2">
                            <button
                                onClick={() => setCurrentPage(item.name as Page)}
                                className={`flex items-center w-full px-4 py-2.5 rounded-lg transition-colors duration-200 ${
                                    currentPage === item.name
                                        ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-semibold'
                                        : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400'
                                }`}
                            >
                                <item.icon className="w-6 h-6 mr-3" />
                                <span className="font-medium">{item.name}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="absolute bottom-0 left-0 w-64 p-6">
                 <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                        {user?.username.charAt(0).toUpperCase()}
                    </div>
                    <div className="ml-3">
                        <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">{user?.username}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{user?.role}</p>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;