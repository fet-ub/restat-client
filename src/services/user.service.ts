import { publicApiRequest } from "../lib/hooks/axiosInstance";
import { userRequestType } from "../types/auth.type";
import { UserType } from "../types/user.type";
import { AuthService } from "./auth.service";

const authService = new AuthService();

export class UserService {
  public async createNewUser(data: userRequestType, userType: UserType) {
    console.log("ser service", userType);
    console.log("sd", UserType.COORDINATOR);

    if (userType === UserType.HOD) {
      const body = new FormData();
      body.append("facultyId", data.facultyId);
      body.append("departmentId", data.departmentId as string);
      body.append("firstName", data.firstName);
      body.append("lastName", data.lastName);
      body.append("email", data.email);
      // body.append(
      //   "profilePicture",'null'
      // );

      console.log(body);

      return await authService.laravelSanctum().then(async () => {
        return await publicApiRequest("", "multipart/form-data").post(
          "/hods",
          body
        );
      });
    }
    if (userType === UserType.DEAN) {
      const body = new FormData();
      body.append("facultyId", data.facultyId);
      body.append("firstName", data.firstName);
      body.append("lastName", data.lastName);
      body.append("email", data.email);
      // body.append("profilePicture",'null');
      return await authService.laravelSanctum().then(async () => {
        return await publicApiRequest("", "multipart/form-data").post(
          "/deans",
          data
        );
      });
    }
    if (userType === UserType.COORDINATOR) {
      const body = new FormData();
      body.append("facultyId", data.facultyId);
      body.append("departmentId", data.departmentId as string);
      body.append("firstName", data.firstName);
      body.append("lastName", data.lastName);
      body.append("email", data.email);
      // body.append("profilePicture",'null');
      return await authService.laravelSanctum().then(async () => {
        return await publicApiRequest("", "multipart/form-data").post(
          "/coordinators",
          data
        );
      });
    }
    if (userType === UserType.LECTURER) {
      const body = new FormData();
      body.append("facultyId", data.facultyId);
      body.append("departmentId", data.departmentId as string);
      body.append("firstName", data.firstName);
      body.append("lastName", data.lastName);
      body.append("email", data.email);
      // body.append("profilePicture",'null');
      return await authService.laravelSanctum().then(async () => {
        return await publicApiRequest("", "multipart/form-data").post(
          "/lecturers",
          data
        );
      });
    }
    if (userType === UserType.STUDENT) {
      const body = new FormData();
      body.append("facultyId", data.facultyId);
      body.append("departmentId", data.departmentId as string);
      body.append("firstName", data.firstName);
      body.append("lastName", data.lastName);
      body.append("email", data.email);
      // body.append("profilePicture",'null');
      return await authService.laravelSanctum().then(async () => {
        return await publicApiRequest("", "multipart/form-data").post(
          "/students",
          data
        );
      });
    }
    if (userType === UserType.EXAMINER) {
      const body = new FormData();
      body.append("facultyId", data.facultyId);
      body.append("departmentId", data.departmentId as string);
      body.append("firstName", data.firstName);
      body.append("lastName", data.lastName);
      body.append("email", data.email);
      // body.append("profilePicture", 'null');
      return await authService.laravelSanctum().then(async () => {
        return await publicApiRequest("", "multipart/form-data").post(
          "/examiners",
          data
        );
      });
    }
    if (userType === UserType.SUPPORT_STAFF) {
      const body = new FormData();
      body.append("facultyId", data.facultyId);
      body.append("departmentId", data.departmentId as string);
      body.append("firstName", data.firstName);
      body.append("lastName", data.lastName);
      body.append("email", data.email);
      // body.append("profilePicture",'null');
      return await authService.laravelSanctum().then(async () => {
        return await publicApiRequest("", "multipart/form-data").post(
          "/support-staffs",
          data
        );
      });
    }
  }

  public async getUsers() {
    return await authService.laravelSanctum().then(async () => {
      return await publicApiRequest().get("/users");
    });
  }
}
