
export type EmployeeStatus = 'Active' | 'On Leave' | 'Resigned';
export type UserRole = 'Admin' | 'HR User';

export interface Department {
    id: string;
    name: string;
}

export interface Employee {
    id: string;

    name: string;
    employeeId: string;
    department: string;
    designation: string;
    salary: number;
    dateOfJoining: string;
    contact: string;
    status: EmployeeStatus;
    profilePhoto?: string; // base64 string
}

export interface User {
    username: string;
    role: UserRole;
}
