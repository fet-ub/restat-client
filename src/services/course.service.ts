import { courseRequestType } from "../types/course.type";
import { publicApiRequest } from "../lib/hooks/axiosInstance";
import { AuthService } from "./auth.service";

const authService = new AuthService();
export class CourseService {
  public async createNewCourse(data: courseRequestType) {
    return await authService.laravelSanctum().then(async () => {
      return await publicApiRequest().post("/courses", data);
    });
  }
  public async getCourses() {
    return await authService.laravelSanctum().then(async () => {
      return await publicApiRequest().get("/courses");
    });
  }
  public async deleteCourse(id: number) {
    return await authService.laravelSanctum().then(async () => {
      return await publicApiRequest().delete(`/courses/${id}`);
    });
  }
}
