import { API_URL } from '@/shared/constants/API_URL'
import storage, { StorageKey } from '@/shared/utils/storage'
import axiosLib, {
    AxiosError,
    type AxiosInstance,
    type AxiosResponse,
    type RawAxiosRequestHeaders,
} from 'axios'

class Axios {
    baseURL: URL = API_URL
    private instance: AxiosInstance = axiosLib.create({
        headers: {
            Accept: 'application/json',
        },
        baseURL: this.baseURL,
    })

    constructor() {
        const token = storage.get<string>(StorageKey.JWT)

        if (token) {
            this.setHeaderKey('Authorization', 'Bearer ' + token)
        }
    }

    private async query<T>(type: Type.Get | Type.Delete, url: URL): Promise<Response<T>> {
        try {
            const response = await this.instance[type](url)

            return this.handleResponse(response)
        } catch (error) {
            return this.handleError(error as AxiosError)
        }
    }

    private async queryWithData<T, D>(
        type: Type.Post | Type.Put,
        url: URL,
        data?: D,
    ): Promise<Response<T>> {
        try {
            const response = await this.instance[type](url, data)

            return this.handleResponse(response)
        } catch (error) {
            return this.handleError(error as AxiosError)
        }
    }

    private handleResponse<T>(response: AxiosResponse<T>): SuccessResponse<T> {
        const isSuccess = !!response.data

        if (isSuccess) {
            return {
                ...response,
                isSuccess: true,
            }
        } else {
            return {
                ...response,
                isSuccess: false,
            }
        }
    }

    private handleError(error: AxiosError): ErrorResponse {
        return {
            ...error,
            isSuccess: false,
        }
    }

    public get<T>(url: URL) {
        return this.query<T>(Type.Get, url)
    }

    public post<T, D>(url: URL, data: D) {
        return this.queryWithData<T, D>(Type.Post, url, data)
    }

    public put<T, D>(url: URL, data: D) {
        return this.queryWithData<T, D>(Type.Put, url, data)
    }

    public delete<T>(url: URL) {
        return this.query<T>(Type.Delete, url)
    }

    public setHeaderKey(key: HeaderKey, value: string) {
        this.instance.defaults.headers.common[key] = value
    }

    public removeHeaderKey(key: HeaderKey) {
        delete this.instance.defaults.headers.common[key]
    }
}

export const axios = new Axios()

enum Type {
    Get = 'get',
    Post = 'post',
    Put = 'put',
    Delete = 'delete',
}

export type Response<T> = SuccessResponse<T> | ErrorResponse
type SuccessResponse<T> = AxiosResponse<T> & { isSuccess: boolean }
type ErrorResponse = AxiosError & { isSuccess: false }

type HeaderKey = keyof RawAxiosRequestHeaders
type URL = string
