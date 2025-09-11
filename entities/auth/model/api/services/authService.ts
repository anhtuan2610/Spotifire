import { post } from "@/shared/api/axios-config";
import { IAuthLoginResponse, ILoginRequest } from "../dto/authDto";

export class AuthService {
  static async login(body: ILoginRequest): Promise<IAuthLoginResponse> {
    try {
      const response: IAuthLoginResponse = await post({
        url: "/auth/login",
        data: body,
      });
      return response;
    } catch (error) {
      throw error;
    }
  }
}
