


import { StudentType } from "../../student.type";

export interface AddStudentPropType {
  form: StudentType;
  setForm: React.Dispatch<React.SetStateAction<StudentType>>;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  closeModal?:()=>void
}