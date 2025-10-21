import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { useDarkMode } from '../../hooks/useDarkMode';
import { LogoutIcon, SunIcon, MoonIcon } from '../shared/icons/Icon';

const Header: React.FC = () => {
    const { user, logout } = useAuth();
    const [isDarkMode, toggleDarkMode] = useDarkMode();

    return (
        <header className="flex items-center justify-between h-20 px-6 bg-transparent border-b border-gray-200 dark:border-gray-800 flex-shrink-0">
            <div>
                 <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Welcome, {user?.username}!</h2>
            </div>
            <div className="flex items-center space-x-4">
                <button
                    onClick={toggleDarkMode}
                    className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                    {isDarkMode ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
                </button>
                <button
                    onClick={logout}
                    className="flex items-center p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                    <LogoutIcon className="w-6 h-6" />
                </button>
            </div>
        </header>
    );
};

export default Header;