export interface CaMarkRequestType {
  studentId: number | string;
  courseId: number | string;
  semesterId: number | string;
  mark: string;
}

export interface BulkCaCaMarkRequestType {
  matriculationNumber: string;
  mark: string;
}
