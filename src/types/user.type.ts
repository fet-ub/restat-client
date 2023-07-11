export interface IUser {
  name: string;
  email: string;
  id: number;
  status: string;
}

export enum UserType {
  ADMIN,
  HOD,
  DEAN,
  STUDENT,
  LECTURER,
  SUPPORT_STAFF,
  EXAMINER,
  COORDINATOR,
}

export interface UserResponseTypes {
  firstName: string;
  lastName: string;
  email: string;
  id: number;
  status: string;
  created_at: Date;
  updated_at: Date;
  profilePicture?: string | null;
}
