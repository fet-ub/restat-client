import { publicApiRequest } from "../lib/hooks/axiosInstance";
import { LoginRequestType, LoginResponseType } from "../types/auth.type";

export class AuthService {
  public async laravelSanctum() {
    return await publicApiRequest().get(
      "http://localhost:8000/sanctum/csrf-cookie"
    );
  }

  public async loginUser(data: LoginRequestType) {
    return await this.laravelSanctum().then(async () => {
      return await publicApiRequest().post<LoginResponseType>("/login", data);
    });
  }
}
