import type { AxiosInstance } from "axios";
import type { IUser } from "./types";

export const getUserInfo = async (client: AxiosInstance, username: string) => {
  const response = await client.get(`/users/${username}`);

  return response.data as IUser;
}
