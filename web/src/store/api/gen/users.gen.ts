import { baseApi as api } from "../baseApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    userControllerGetUsers: build.query<
      UserControllerGetUsersResponse,
      UserControllerGetUsersArgs
    >({
      query: () => ({ url: `/users` }),
    }),
    userControllerCreateUser: build.mutation<
      UserControllerCreateUserResponse,
      UserControllerCreateUserArgs
    >({
      query: (queryArg) => ({
        url: `/users`,
        method: "POST",
        body: queryArg.createUserDto,
      }),
    }),
    userControllerGetUser: build.query<
      UserControllerGetUserResponse,
      UserControllerGetUserArgs
    >({
      query: (queryArg) => ({ url: `/users/${queryArg.id}` }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as enhancedApi };
export type UserControllerGetUsersResponse = unknown;
export type UserControllerGetUsersArgs = void;
export type UserControllerCreateUserResponse = unknown;
export type UserControllerCreateUserArgs = {
  createUserDto: CreateUserDto;
};
export type UserControllerGetUserResponse = unknown;
export type UserControllerGetUserArgs = {
  id: number;
};
export type CreateUserDto = {};
export const {
  useUserControllerGetUsersQuery,
  useUserControllerCreateUserMutation,
  useUserControllerGetUserQuery,
} = injectedRtkApi;
