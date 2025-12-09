import axios from "axios";
import { loadDataFromCacheIntercepter, saveToCacheIntercepter } from "./intercepters";


import { getUserInfo } from "./users.ts";
import { getUserRepositories } from "./repositories.ts";

export default function useApi(useCache = false) {
  const client = axios.create({
    baseURL: 'https://api.github.com/',
  })
  if (useCache) {
    client.interceptors.request.use(loadDataFromCacheIntercepter)
    client.interceptors.response.use(saveToCacheIntercepter)
  }
  return {
    GetUserRepositories(username: string) {
      return getUserRepositories(client, username);
    },
    GetUserInfo(username: string) {
      return getUserInfo(client, username);
    }
  }
}
