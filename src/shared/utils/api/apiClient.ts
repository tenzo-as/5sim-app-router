import { API_URL } from '@/shared/constants/API_URL'
import storage, { StorageKey } from '@/shared/utils/storage'
import axios from 'axios'

export const apiClient = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})

apiClient.interceptors.request.use(
    config => {
        const token = storage.get(StorageKey.Token)

        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }

        return config
    },
    error => Promise.reject(error),
)

apiClient.interceptors.response.use()
