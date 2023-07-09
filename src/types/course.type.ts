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