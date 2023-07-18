import { publicApiRequest } from "../lib/hooks/axiosInstance";
import { ExamMarkRequestType } from "../types/exam.type";
import { AuthService } from "./auth.service";

const authService = new AuthService();

export class ExamMarkService {
  public async createExamMark(data: ExamMarkRequestType[]) {
    const request: Promise<any[]>[] = [] as Promise<any[]>[];

    data.map((exam: ExamMarkRequestType) => {
      const body = new FormData();
      body.append("studentCodeId", exam.studentCodeId as string);
      body.append("mark", exam.mark);

      request.push(
        publicApiRequest("", "multipart/form-data").post(
          "/student-code-marks",
          body
        )
      );
    });
    return await authService.laravelSanctum().then(async () => {
      const response = await Promise.all(request);
      return response;
    });
  }
}
