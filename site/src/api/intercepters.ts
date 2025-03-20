import type { InternalAxiosRequestConfig, AxiosResponse } from 'axios'
import useCache from './cache'

const cache = useCache(100, 1000 * 60)

export const saveToCacheIntercepter = (response: AxiosResponse<any, any>) => {
    const url = response.config.url as string

    cache.set(url, response.data)
    return response
}

export const loadDataFromCacheIntercepter = (config: InternalAxiosRequestConfig<any>) => {
    const url = config.url as string
    const isCached = cache.has(url)

    if (isCached) {
        return {...config, adapter: () => Promise.resolve({data: cache.get(url), status: 200, statusText: 'OK', headers: {}, config})}
    }

    return config
}