import { publicApiRequest } from "../lib/hooks/axiosInstance";
import {
  BulkCaCaMarkRequestType,
  CaMarkRequestType,
} from "../types/caMark.type";
import { AuthService } from "./auth.service";

const authService = new AuthService();

export class CaMarkService {
  public async createCaMark(data: CaMarkRequestType[]) {
    const request: Promise<any[]>[] = [] as Promise<any[]>[];
    /* eslint-disable */
    data.map((ca: CaMarkRequestType) => {
      const body = new FormData();
      body.append("studentId", ca.studentId as string);
      body.append("courseId", ca.courseId as string);
      body.append("semesterId", ca.semesterId as string);
      body.append("mark", ca.mark);

      request.push(
        publicApiRequest("", "multipart/form-data").post("/ca-marks", body)
      );
    });
    return await authService.laravelSanctum().then(async () => {
      const response = await Promise.all(request);
      return response;
    });
  }
  public async createBulkCaMark(data: BulkCaCaMarkRequestType[]) {
    const request: Promise<any[]>[] = [] as Promise<any[]>[];

    data.map((ca: BulkCaCaMarkRequestType) => {
      const body = new FormData();
      body.append("matriculationNumber", ca.matriculationNumber as string);
      body.append("mark", ca.mark as string);
      body.append("courseId", ca.courseId as string);
      body.append("semesterId", ca.semesterId as string);

      request.push(
        publicApiRequest("", "multipart/form-data").post("/ca-marks", body)
      );
    });
    return await authService.laravelSanctum().then(async () => {
      const response = await Promise.all(request);
      return response;
    });
  }
}
