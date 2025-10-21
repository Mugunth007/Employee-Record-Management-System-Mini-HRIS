import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { ProfileIcon } from '../shared/icons/Icon';

const Profile: React.FC = () => {
    const { user } = useAuth();

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Profile</h1>
            <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/50 p-8 rounded-2xl max-w-lg mx-auto">
                <div className="flex flex-col items-center">
                    <div className="w-24 h-24 bg-primary-500 rounded-full flex items-center justify-center text-white text-4xl font-bold mb-4">
                        {user?.username.charAt(0).toUpperCase()}
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">{user?.username}</h2>
                    <p className="text-md text-gray-500 dark:text-gray-400">{user?.role}</p>
                    
                    <div className="mt-8 border-t border-gray-200 dark:border-gray-700 w-full pt-6 text-center">
                        <p className="text-gray-600 dark:text-gray-400">This is a placeholder profile page. In a full-featured application, you could manage your account settings, password, and preferences here.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;