import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  tagTypes: ["login"],
  endpoints: (builder) => ({
    login: builder.mutation<any[], void>({
      providesTags: ["login"],
      queryFn: async () => {
        try {
          const response: any[] = [];
          return { data: response };
        } catch (error) {
          return { error: error as any };
        }
      },
    }),
  }),
});

export const { useLoginMutation } = authApi;
