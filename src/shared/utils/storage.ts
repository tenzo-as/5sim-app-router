import { isClient } from '@/shared/utils/isClient'

export enum StorageKey {
    Token = 'token',
    Theme = 'theme',
    Service = 'service',
    LastService = 'lastService',
    Country = 'country',
    LastCountry = 'lastCountry',
    ActiveOperator = 'operator',
}

export const StorageEventKey = 'local-storage'

class Storage {
    constructor() {}

    public get<T>(key: StorageKey): T | null {
        if (!isClient) return null

        return JSON.parse(localStorage.getItem(key) ?? 'null')
    }

    public set<T>(key: StorageKey, value: T | null) {
        if (!isClient) return

        localStorage.setItem(key, JSON.stringify(value))
    }

    public remove(key: StorageKey) {
        if (!isClient) return

        localStorage.removeItem(key)
    }
}

export const storage = new Storage()

export default storage
