
import { Department, Employee } from './types';

export const DEPARTMENTS: Department[] = [
    { id: '1', name: 'Engineering' },
    { id: '2', name: 'HR' },
    { id: '3', name: 'Finance' },
    { id: '4', name: 'Marketing' },
    { id: '5', name: 'Sales' },
];

export const INITIAL_EMPLOYEES: Employee[] = [
    {
        id: '1',
        employeeId: 'EMP001',
        name: 'Alice Johnson',
        department: 'Engineering',
        designation: 'Senior Software Engineer',
        salary: 120000,
        dateOfJoining: '2020-01-15',
        contact: 'alice.j@example.com',
        status: 'Active',
        profilePhoto: `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2E4YjVjNyI+PHBhdGggZD0iTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTAgM2MxLjY2IDAgMyAxLjM0IDMgM3MtMS4zNCAzLTMgMy0zLTEuMzQtMy0zIDEuMzQtMyAzLTN6bTAgMTRjLTIuMzMgMC00LjMxLTEuMjYtNS41LTcuNzggMS40OS0xLjIzIDMuNDYtMiA1LjUtMiAyLjA0IDAgMy45OS43NyA1LjUgMi0xLjE5IDYuNTItMy4xNyA3Ljc4LTUuNSA3Ljc4eiIvPjwvc3ZnPg==`
    },
    {
        id: '2',
        employeeId: 'EMP002',
        name: 'Bob Smith',
        department: 'HR',
        designation: 'HR Manager',
        salary: 95000,
        dateOfJoining: '2019-03-22',
        contact: 'bob.s@example.com',
        status: 'Active'
    },
    {
        id: '3',
        employeeId: 'EMP003',
        name: 'Charlie Brown',
        department: 'Finance',
        designation: 'Accountant',
        salary: 80000,
        dateOfJoining: '2021-07-01',
        contact: 'charlie.b@example.com',
        status: 'On Leave'
    },
    {
        id: '4',
        employeeId: 'EMP004',
        name: 'Diana Prince',
        department: 'Engineering',
        designation: 'UI/UX Designer',
        salary: 105000,
        dateOfJoining: '2022-02-10',
        contact: 'diana.p@example.com',
        status: 'Active'
    },
    {
        id: '5',
        employeeId: 'EMP005',
        name: 'Ethan Hunt',
        department: 'Marketing',
        designation: 'Marketing Head',
        salary: 110000,
        dateOfJoining: '2018-11-05',
        contact: 'ethan.h@example.com',
        status: 'Active'
    },
    {
        id: '6',
        employeeId: 'EMP006',
        name: 'Fiona Glenanne',
        department: 'Sales',
        designation: 'Sales Executive',
        salary: 75000,
        dateOfJoining: '2023-05-20',
        contact: 'fiona.g@example.com',
        status: 'Active'
    },
    {
        id: '7',
        employeeId: 'EMP007',
        name: 'George Costanza',
        department: 'Finance',
        designation: 'Financial Analyst',
        salary: 85000,
        dateOfJoining: '2022-08-14',
        contact: 'george.c@example.com',
        status: 'Resigned'
    },
     {
        id: '8',
        employeeId: 'EMP008',
        name: 'Hannah Montana',
        department: 'Marketing',
        designation: 'Social Media Manager',
        salary: 70000,
        dateOfJoining: '2023-01-10',
        contact: 'hannah.m@example.com',
        status: 'Active',
    },
];
