import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { EmployeesIcon } from '../shared/icons/Icon';

const Login: React.FC = () => {
    const { login } = useAuth();

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col justify-center items-center p-4">
            <div className="max-w-md w-full mx-auto">
                <div className="text-center mb-8">
                    <EmployeesIcon className="mx-auto h-12 w-auto text-primary-600" />
                    <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">
                        Employee Record Management
                    </h2>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        Please select a role to sign in
                    </p>
                </div>

                <div className="bg-white dark:bg-gray-800 py-8 px-4 shadow-lg sm:rounded-2xl sm:px-10">
                    <div className="space-y-6">
                        <p className="text-sm text-center text-gray-700 dark:text-gray-300">
                            This is a simulated login. No password required.
                        </p>
                        <div>
                            <button
                                onClick={() => login('Admin')}
                                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                            >
                                Sign in as Admin
                            </button>
                        </div>
                        <div>
                            <button
                                onClick={() => login('HR User')}
                                className="w-full flex justify-center py-3 px-4 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm text-sm font-medium text-primary-700 dark:text-primary-300 bg-white dark:bg-gray-800 hover:bg-primary-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                            >
                                Sign in as HR User
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;