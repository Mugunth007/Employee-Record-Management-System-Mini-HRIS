import React, { useState, useEffect, ChangeEvent } from 'react';
import { Employee, EmployeeStatus } from '../../types';
import { DEPARTMENTS } from '../../constants';

interface EmployeeFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (employee: Employee) => void;
    employee: Employee | null;
}

const initialFormState: Omit<Employee, 'id'> = {
    name: '',
    employeeId: '',
    department: DEPARTMENTS[0]?.name || '',
    designation: '',
    salary: 0,
    dateOfJoining: '',
    contact: '',
    status: 'Active',
    profilePhoto: '',
};

const EmployeeFormModal: React.FC<EmployeeFormModalProps> = ({ isOpen, onClose, onSave, employee }) => {
    const [formData, setFormData] = useState<Omit<Employee, 'id'>>(initialFormState);

    useEffect(() => {
        if (employee) {
            setFormData(employee);
        } else {
            setFormData(initialFormState);
        }
    }, [employee, isOpen]);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: name === 'salary' ? parseFloat(value) : value }));
    };
    
    const handlePhotoChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (event) => {
                if (event.target && typeof event.target.result === 'string') {
                    setFormData(prev => ({ ...prev, profilePhoto: event.target.result as string }));
                }
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(formData as Employee);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">{employee ? 'Edit Employee' : 'Add Employee'}</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="flex items-center space-x-6">
                        {formData.profilePhoto ? (
                             <img className="h-24 w-24 rounded-full object-cover" src={formData.profilePhoto} alt="Profile" />
                        ) : (
                             <div className="h-24 w-24 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                                 <span className="text-3xl text-gray-500">?</span>
                            </div>
                        )}
                        <div>
                            <label htmlFor="photo-upload" className="cursor-pointer bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-xl hover:bg-primary-200">
                                Upload Photo
                            </label>
                            <input id="photo-upload" type="file" accept="image/*" onChange={handlePhotoChange} className="hidden" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500" />
                        </div>
                        <div>
                            <label htmlFor="employeeId" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Employee ID</label>
                            <input type="text" name="employeeId" value={formData.employeeId} onChange={handleChange} required className="mt-1 block w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500" />
                        </div>
                         <div>
                            <label htmlFor="department" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Department</label>
                            <select name="department" value={formData.department} onChange={handleChange} className="mt-1 block w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500">
                                {DEPARTMENTS.map(dept => <option key={dept.id} value={dept.name}>{dept.name}</option>)}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="designation" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Designation</label>
                            <input type="text" name="designation" value={formData.designation} onChange={handleChange} required className="mt-1 block w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500" />
                        </div>
                         <div>
                            <label htmlFor="salary" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Salary</label>
                            <input type="number" name="salary" value={formData.salary} onChange={handleChange} required className="mt-1 block w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500" />
                        </div>
                        <div>
                            <label htmlFor="dateOfJoining" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Date of Joining</label>
                            <input type="date" name="dateOfJoining" value={formData.dateOfJoining} onChange={handleChange} required className="mt-1 block w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500" />
                        </div>
                        <div>
                            <label htmlFor="contact" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Contact</label>
                            <input type="text" name="contact" value={formData.contact} onChange={handleChange} required className="mt-1 block w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500" />
                        </div>
                        <div>
                            <label htmlFor="status" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Status</label>
                            <select name="status" value={formData.status} onChange={handleChange} className="mt-1 block w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500">
                                <option value="Active">Active</option>
                                <option value="On Leave">On Leave</option>
                                <option value="Resigned">Resigned</option>
                            </select>
                        </div>
                    </div>
                    
                    <div className="flex justify-end space-x-4 pt-6">
                        <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl hover:bg-gray-300">Cancel</button>
                        <button type="submit" className="px-4 py-2 bg-primary-600 text-white rounded-xl hover:bg-primary-700">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EmployeeFormModal;