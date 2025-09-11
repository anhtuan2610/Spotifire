import { IAuthLoginResponse, ILoginRequest } from "../dto/authDto";
import { AuthService } from "../services/authService";

export class AuthController {
  static async login(body: ILoginRequest): Promise<IAuthLoginResponse> {
    try {
      const response: IAuthLoginResponse = await AuthService.login(body);
      return response;
    } catch (error) {
      throw error;
    }
  }
}
