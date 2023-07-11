export interface StudentType {
  firstName: string;
  lastName: string;
  gender: string;
  status: string;
  dob: string;
  placeOfBirth: string;
  region: string;
  address: string;
  country: string;
  phone: string;
  nationalIdentification: string;
  email: string;
  matriculationNumber: string;
  level: string;
  year: string;
  departmentId: string;
  program: string;
  certificateObtained: string;
  yearObtained: string;
  guardianFirstName: string;
  guardianLastName: string;
  guardianEmail: string;
  guardianAddress: string;
  guardianPhone: string;
}

export interface StudentRequestType extends StudentType {
  userId: string;
  profilePicture: string;
  facultyId: string;
}
