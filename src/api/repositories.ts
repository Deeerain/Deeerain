import type { AxiosInstance } from "axios"
import { type IRepository } from "./types"

export const getUserRepositories = async (client: AxiosInstance, userName: string) => {
  const response = await client.get(`/users/${userName}/repos`)

  return response.data as Array<IRepository>
}
