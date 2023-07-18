import { publicApiRequest } from "../lib/hooks/axiosInstance";
import { AuthService } from "./auth.service";

const authService = new AuthService();
export class ResultService {
  public async getResults() {
    return await authService.laravelSanctum().then(async () => {
      return await publicApiRequest().get("/results");
    });
  }
  //   public async deleteLecturer(id: number) {
  //     return await authService.laravelSanctum().then(async () => {
  //       return await publicApiRequest().delete(`/lecturers/${id}`);
  //     });
  //   }
}
