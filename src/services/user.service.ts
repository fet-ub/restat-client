import { publicApiRequest } from "../lib/hooks/axiosInstance";
import { userRequestType } from "../types/auth.type";
import { UserType } from "../types/user.type";
import { AuthService } from "./auth.service";

const authService = new AuthService();

export class UserService {
  public async createNewUser(data: userRequestType, userType: UserType) {
    if (Number(userType) === Number(UserType.HOD)) {
      const body = new FormData();
      body.append("facultyId", data.facultyId);
      body.append("departmentId", data.departmentId as string);
      body.append("firstName", data.firstName);
      body.append("lastName", data.lastName);
      body.append("email", data.email);
      // body.append(
      //   "profilePicture",'null'
      // );

      return await authService.laravelSanctum().then(async () => {
        return await publicApiRequest("", "multipart/form-data").post(
          "/hods",
          body
        );
      });
    }
    if (Number(userType) === UserType.DEAN) {
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
    if (Number(userType) === UserType.COORDINATOR) {
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
    if (Number(userType) === UserType.LECTURER) {
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
    if (Number(userType) === UserType.STUDENT) {
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
    if (Number(userType) === UserType.EXAMINER) {
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
    if (Number(userType) === UserType.SUPPORT_STAFF) {
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

  public async deleteUser(id: number, userType: UserType) {
    if (Number(userType) === UserType.LECTURER) {
      return await authService.laravelSanctum().then(async () => {
        return await publicApiRequest().delete(`/students/${id}`);
      });
    }
    if (Number(userType) === UserType.SUPPORT_STAFF) {
      return await authService.laravelSanctum().then(async () => {
        return await publicApiRequest().delete(`/support-staffs/${id}`);
      });
    }
    if (Number(userType) === UserType.EXAMINER) {
      return await authService.laravelSanctum().then(async () => {
        return await publicApiRequest().delete(`/examiners/${id}`);
      });
    }
    if (Number(userType) === UserType.COORDINATOR) {
      return await authService.laravelSanctum().then(async () => {
        return await publicApiRequest().delete(`/coordinators/${id}`);
      });
    }
    if (Number(userType) === UserType.DEAN) {
      return await authService.laravelSanctum().then(async () => {
        return await publicApiRequest().delete(`/deans/${id}`);
      });
    }
  }
}
