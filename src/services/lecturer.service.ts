import { publicApiRequest } from "../lib/hooks/axiosInstance";
import { AuthService } from "./auth.service";

const authService = new AuthService();
export class LecturerService {
  public async getLecturers() {
    return await authService.laravelSanctum().then(async () => {
      return await publicApiRequest().get("/lecturers");
    });
  }
  public async deleteLecturer(id: number) {
    return await authService.laravelSanctum().then(async () => {
      return await publicApiRequest().delete(`/lecturers/${id}`);
    });
  }
}
