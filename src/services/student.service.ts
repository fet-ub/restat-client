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
