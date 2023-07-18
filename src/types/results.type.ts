export interface ResultResponseTypes {
  gpaInfo: GpaInfo[];
  gpa: number;
}

export interface GpaInfo {
  id: number;
  studentId: number;
  semesterId: number;
  courseId: number;
  mark: number;
  grade: string;
  gradePoint: string;
  created_at: Date;
  updated_at: Date;
  course: Course;
  semester: string;
}

export interface Course {
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
}

export interface Semester {
  id: number;
  semester: number;
  year: number;
  created_at: Date;
  updated_at: Date;
}
