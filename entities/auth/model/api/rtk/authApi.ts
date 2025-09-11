// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { AuthController } from "../controllers/authController";
// import { IAuthLoginResponse, ILoginRequest } from "../dto/auth.dto";

// export const authApi = createApi({
//   reducerPath: "authApi",
//   baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
//   tagTypes: ["login"],
//   endpoints: (builder) => ({
//     login: builder.mutation<IAuthLoginResponse, ILoginRequest>({
//       invalidatesTags: () => ["login"],
//       queryFn: async (body) => {
//         try {
//           const response: IAuthLoginResponse = await AuthController.login(body);
//           return { data: response };
//         } catch (error) {
//           return { error: error as any };
//         }
//       },
//     }),
//   }),
// });

// export const login = authApi.endpoints.login.initiate;
