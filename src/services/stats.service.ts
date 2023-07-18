import { publicApiRequest } from "../lib/hooks/axiosInstance";
import { AuthService } from "./auth.service";

const authService = new AuthService();
export class StatsService {
  public async getStats() {
    return await authService.laravelSanctum().then(async () => {
      return await publicApiRequest().get("/stats");
    });
  }
}
