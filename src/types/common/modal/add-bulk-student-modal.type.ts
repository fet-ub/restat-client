

export interface AddBulkStudentModalPropType{
    fileName?:any;
    setFileName?:any;
    selectedFile?:any;
    setSelectedFile?:any;
    studentsTableData?:any
    setStudentsTableData?:any;
  
}



export interface studentType {
  firstname: string;
  lastname: string;
  gender: string;
  status: string;
  dob: string;
  email:string;
  phone:string;
  place_of_birth: string;
  region: string;
  address: string;
  country: string;
  national_identification: string | number;
  matricule_number: string;
  level: string | number;
  year: string | number;
  faculty: string;
  department: string;
  program: string;
  certificate_obtained: string;
  year_obtained: string;
  guardian_firstname: string;
  guardian_lastname: string;
  guardian_email: string;
  guardian_address: string;
  guardian_phone: string | number;
}