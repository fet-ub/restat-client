import { publicApiRequest } from "../lib/hooks/axiosInstance";
import { userRequestType } from "../types/auth.type";
import { UserType } from "../types/user.type";
import { AuthService } from "./auth.service";

const authService = new AuthService();

export class StudentService {
  public async createNewUser(data: userRequestType, userType: UserType) {
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
}
