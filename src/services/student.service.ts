import { publicApiRequest } from "../lib/hooks/axiosInstance";
import { StudentRequestType } from "../types/student.type";
import { AuthService } from "./auth.service";

const authService = new AuthService();

export class StudentService {
  public async createNewStudent(data: StudentRequestType) {
    const body = new FormData();
    body.append("facultyId", data.facultyId);
    body.append("departmentId", data.departmentId as string);
    body.append("firstName", data.firstName);
    body.append("lastName", data.lastName);
    body.append("email", data.email);
    body.append("gender", data.gender);
    body.append("status", data.status);
    body.append("dob", data.dob);
    body.append("placeOfBirth", data.placeOfBirth);
    body.append("region", data.region);
    body.append("address", data.address);
    body.append("country", data.country);
    body.append("phone", data.phone);
    body.append("nationalIdentification", data.nationalIdentification);
    body.append("matriculationNumber", data.matriculationNumber);
    body.append("level", data.level);
    body.append("year", data.year);
    body.append("program", data.program);
    body.append("certificateObtained", data.certificateObtained);
    body.append("yearObtained", data.yearObtained);
    body.append("guardianFirstName", data.guardianFirstName);
    body.append("guardianLastName", data.guardianLastName);
    body.append("guardianEmail", data.guardianEmail);
    body.append("guardianAddress", data.guardianAddress);
    body.append("guardianPhone", data.guardianPhone);
    // body.append("profilePicture", data.profilePicture);

    // console.log(body);

    return await authService.laravelSanctum().then(async () => {
      return await publicApiRequest("", "multipart/form-data").post(
        "/students",
        body
      );
    });
  }

  public async createBulkNewStudents(data: StudentRequestType[]) {
    const request: Promise<any[]>[] = [] as Promise<any[]>[];
    // const body = new FormData();
    /* eslint-disable */
    data.map((student: StudentRequestType) => {
      const body = new FormData();
      body.append("facultyId", student.facultyId);
      body.append("departmentId", student.departmentId as string);
      body.append("firstName", student.firstName);
      body.append("lastName", student.lastName);
      body.append("email", student.email);
      body.append("gender", student.gender);
      body.append("status", student.status);
      body.append("dob", student.dob);
      body.append("placeOfBirth", student.placeOfBirth);
      body.append("region", student.region);
      body.append("address", student.address);
      body.append("country", student.country);
      body.append("phone", student.phone);
      body.append("nationalIdentification", student.nationalIdentification);
      body.append("matriculationNumber", student.matriculationNumber);
      body.append("level", student.level);
      body.append("year", student.year);
      body.append("program", student.program);
      body.append("certificateObtained", student.certificateObtained);
      body.append("yearObtained", student.yearObtained);
      body.append("guardianFirstName", student.guardianFirstName);
      body.append("guardianLastName", student.guardianLastName);
      body.append("guardianEmail", student.guardianEmail);
      body.append("guardianAddress", student.guardianAddress);
      body.append("guardianPhone", student.guardianPhone);

      request.push(
        publicApiRequest("", "multipart/form-data").post("/students", body)
      );
    });
    return await authService.laravelSanctum().then(async () => {
      const response = await Promise.all(request);
      return response;
    });
  }

  public async getStudents() {
    return await authService.laravelSanctum().then(async () => {
      return await publicApiRequest().get("/students");
    });
  }

  public async deleteStudent(id: number) {
    return await authService.laravelSanctum().then(async () => {
      return await publicApiRequest().delete(`/students/${id}`);
    });
  }
}
