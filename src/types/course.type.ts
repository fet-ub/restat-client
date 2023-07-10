import { CourseStatusType } from "../repository/constants/enums.constants";

export type courseRequestType ={
    facultyId: string,
      userId: string ,
      semesterId: string,
      name: string,
      courseCode: string,
      level: string,
      status: CourseStatusType,
      creditValue: string | number,

}


export interface CourseResponseTypes {
  courseCode: string;
  created_at: Date;
  creditValue: number;
  facultyId: number;
  id: number;
  level: string;
  name: string;
  semesterId: number;
  status: string;
  updated_at: Date;
  userId: number;
}


