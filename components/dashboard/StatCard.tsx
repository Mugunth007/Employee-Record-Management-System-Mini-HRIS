import React from 'react';

interface StatCardProps {
    title: string;
    value: string;
    icon: React.ElementType;
    color?: 'blue' | 'green' | 'yellow';
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon: Icon, color = 'blue' }) => {
    const colorClasses = {
        blue: 'bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300',
        green: 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300',
        yellow: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-300',
    };

    return (
        <div className="bg-white dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-200 dark:border-gray-700/50 flex items-center">
            <div className={`p-4 rounded-xl ${colorClasses[color]}`}>
                <Icon className="w-8 h-8" />
            </div>
            <div className="ml-4">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{value}</p>
            </div>
        </div>
    );
};

export default StatCard;