import { TBaseApiResponse } from "@/types/api-response-common";

export interface IAuthLoginResponse
  extends TBaseApiResponse<IAuthLoginResponseData> {}

export interface IAuthLoginResponseData {
  userInformation: {
    id: string;
    email: string;
    fullName: string;
  };
  accessToken: string;
}

export interface ILoginRequest {
  email: string;
  password: string;
}
