import { LRUCache } from "lru-cache"

export default function useCache(sieze: number, ttl: number) {
    const cache = new LRUCache<string, {}>({
        max: sieze,
        ttl: ttl
    })

    return {
        set(key: string, data: {}) {
            return cache.set(key, data)
        },
        get(key: string) {
            return cache.get(key)
        },
        has(key: string) {
            return cache.has(key)
        },
        clear() {
            return cache.clear()
        }
    }
}