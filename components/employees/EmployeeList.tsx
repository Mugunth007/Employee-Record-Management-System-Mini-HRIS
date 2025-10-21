import React, { useState, useMemo } from 'react';
import { INITIAL_EMPLOYEES, DEPARTMENTS } from '../../constants';
import { Employee, EmployeeStatus } from '../../types';
import EmployeeTable from './EmployeeTable';
import EmployeeFormModal from './EmployeeFormModal';
import DeleteConfirmModal from './DeleteConfirmModal';
import { PlusIcon, SearchIcon, FilterIcon, ExportIcon } from '../shared/icons/Icon';
import { useAuth } from '../../context/AuthContext';

const EmployeeList: React.FC = () => {
    const { user } = useAuth();
    const [employees, setEmployees] = useState<Employee[]>(INITIAL_EMPLOYEES);
    const [isFormModalOpen, setIsFormModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
    const [employeeToDelete, setEmployeeToDelete] = useState<Employee | null>(null);
    
    const [searchTerm, setSearchTerm] = useState('');
    const [filterDepartment, setFilterDepartment] = useState('');
    const [filterStatus, setFilterStatus] = useState<EmployeeStatus | ''>('');


    const filteredEmployees = useMemo(() => {
        return employees.filter(emp => {
            const matchesSearch = emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                  emp.employeeId.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesDept = filterDepartment ? emp.department === filterDepartment : true;
            const matchesStatus = filterStatus ? emp.status === filterStatus : true;
            return matchesSearch && matchesDept && matchesStatus;
        });
    }, [employees, searchTerm, filterDepartment, filterStatus]);

    const handleAdd = () => {
        setSelectedEmployee(null);
        setIsFormModalOpen(true);
    };

    const handleEdit = (employee: Employee) => {
        setSelectedEmployee(employee);
        setIsFormModalOpen(true);
    };

    const handleDelete = (employee: Employee) => {
        setEmployeeToDelete(employee);
        setIsDeleteModalOpen(true);
    };
    
    const confirmDelete = () => {
        if (employeeToDelete) {
            setEmployees(employees.filter(emp => emp.id !== employeeToDelete.id));
            setIsDeleteModalOpen(false);
            setEmployeeToDelete(null);
        }
    };
    
    const handleSave = (employeeData: Employee) => {
        if (selectedEmployee) {
            // Update
            setEmployees(employees.map(emp => emp.id === selectedEmployee.id ? { ...employeeData, id: emp.id } : emp));
        } else {
            // Add
            setEmployees([...employees, { ...employeeData, id: (employees.length + 1).toString() }]);
        }
        setIsFormModalOpen(false);
        setSelectedEmployee(null);
    };

    const exportToCSV = () => {
        const headers = ['Employee ID', 'Name', 'Department', 'Designation', 'Salary', 'Date of Joining', 'Contact', 'Status'];
        const rows = filteredEmployees.map(emp => 
            [emp.employeeId, emp.name, emp.department, emp.designation, emp.salary, emp.dateOfJoining, emp.contact, emp.status].join(',')
        );
        const csvContent = "data:text/csv;charset=utf-8," + [headers.join(','), ...rows].join('\n');
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "employees.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Employees</h1>
                {user?.role !== 'HR User' && (
                    <button
                        onClick={handleAdd}
                        className="flex items-center bg-primary-600 text-white px-4 py-2 rounded-xl shadow-sm hover:bg-primary-700 transition-colors"
                    >
                        <PlusIcon className="w-5 h-5 mr-2" />
                        Add Employee
                    </button>
                )}
            </div>

            <div className="bg-white dark:bg-gray-800/50 p-4 rounded-xl border border-gray-200 dark:border-gray-700/50 space-y-4 md:space-y-0 md:flex md:items-center md:justify-between">
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <SearchIcon className="w-5 h-5 text-gray-400" />
                    </span>
                    <input
                        type="text"
                        placeholder="Search by name or ID..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full md:w-64 pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                </div>
                <div className="flex items-center space-x-4">
                    <FilterIcon className="w-6 h-6 text-gray-500"/>
                    <select
                        value={filterDepartment}
                        onChange={(e) => setFilterDepartment(e.target.value)}
                        className="border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 p-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                        <option value="">All Departments</option>
                        {DEPARTMENTS.map(dept => <option key={dept.id} value={dept.name}>{dept.name}</option>)}
                    </select>
                    <select
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value as EmployeeStatus | '')}
                        className="border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 p-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                        <option value="">All Statuses</option>
                        <option value="Active">Active</option>
                        <option value="On Leave">On Leave</option>
                        <option value="Resigned">Resigned</option>
                    </select>
                    <button onClick={exportToCSV} className="flex items-center text-primary-600 dark:text-primary-400 hover:underline">
                        <ExportIcon className="w-5 h-5 mr-1"/>
                        Export
                    </button>
                </div>
            </div>

            <EmployeeTable employees={filteredEmployees} onEdit={handleEdit} onDelete={handleDelete} />
            
            {isFormModalOpen && (
                <EmployeeFormModal
                    isOpen={isFormModalOpen}
                    onClose={() => setIsFormModalOpen(false)}
                    onSave={handleSave}
                    employee={selectedEmployee}
                />
            )}

            {isDeleteModalOpen && employeeToDelete && (
                 <DeleteConfirmModal
                    isOpen={isDeleteModalOpen}
                    onClose={() => setIsDeleteModalOpen(false)}
                    onConfirm={confirmDelete}
                    employeeName={employeeToDelete.name}
                 />
            )}
        </div>
    );
};

export default EmployeeList;