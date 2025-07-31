import axios, { type AxiosInstance } from "axios";
import type { IRepository } from "./types";
import { loadDataFromCacheIntercepter, saveToCacheIntercepter } from "./intercepters";


const getUserRepositories = async (client: AxiosInstance, userName: string) => {
    const response = await client.get(`/users/${userName}/repos`)

    return response.data as Array<IRepository>
}

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
            return getUserRepositories(client, username)
        }
    }
}