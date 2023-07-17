export interface IUser {
  name: string;
  email: string;
  id: number;
  status: string;
}

export enum UserType {
  COORDINATOR,
  HOD,
  LECTURER,
  SUPPORT_STAFF,
  EXAMINER,
  ADMIN,
  DEAN,
  STUDENT,
  DEFAULT = "",
}

export interface GetUserResponseTypes {
  user: GetUserType;
  role: string[];
  faculties: Faculty[];
  departments: Department[];
}

export interface GetUserType {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  profilePicture: null;
  status: string;
  created_at: Date;
  updated_at: Date;
  faculties?: Faculty[];
  departments?: Department[];
}

//new

export interface UserResponseTypes {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  profilePicture?: null | string;
  status: string;
  created_at: Date;
  updated_at: Date;
  faculties?: Faculty[];
  departments?: Department[];
  role: string[];
}

export interface Department {
  id: number;
  facultyId: number;
  name: string;
  slug: string;
  created_at: Date;
  updated_at: Date;
  pivot: DepartmentPivot;
}

export interface DepartmentPivot {
  userId: number;
  departmentId: number;
}

export interface Faculty {
  id: number;
  name: string;
  code: number;
  slug: string;
  about: string;
  created_at: Date;
  updated_at: Date;
  pivot: FacultyPivot;
}

export interface FacultyPivot {
  userId: number;
  facultyId: number;
}
