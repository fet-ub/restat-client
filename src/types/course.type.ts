import { CourseStatusType } from "../repository/constants/enums.constants";

export type courseRequestType = {
  facultyId: string;
  userId: string;
  semesterId: string;
  name: string;
  courseCode: string;
  level: string;
  status: CourseStatusType;
  creditValue: string | number;
};

// export interface CourseResponseTypes {
//   courseCode: string;
//   created_at: Date;
//   creditValue: number;
//   facultyId: number;
//   id: number;
//   level: string;
//   name: string;
//   semesterId: number;
//   status: string;
//   updated_at: Date;
//   userId: number;
// }

export interface CourseResponseTypes {
  id: number;
  facultyId: number;
  userId: number;
  semesterId: number;
  name: string;
  courseCode: string;
  level: string;
  status: string;
  creditValue: number;
  created_at: Date;
  updated_at: Date;
  user?: User;
  faculty?: Faculty;
}

export interface Faculty {
  id: number;
  name: string;
  created_at: Date;
  updated_at: Date;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  profilePicture: null;
  status: string;
  created_at: Date;
  updated_at: Date;
}
