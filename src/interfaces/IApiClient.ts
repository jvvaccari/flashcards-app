/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosRequestConfig, AxiosResponse } from 'axios';

export default interface IApiClient {
    execute<T = any, D = unknown>(
        config: AxiosRequestConfig<D>,
    ): Promise<AxiosResponse<T, D>>;

    get<T = any, D = unknown>(
        url: string,
        config?: AxiosRequestConfig<D>,
    ): Promise<AxiosResponse<T, D>>;

    post<T = any, D = unknown>(
        url: string,
        data?: D,
        config?: AxiosRequestConfig<D>,
    ): Promise<AxiosResponse<T, D>>;

    put<T = any, D = unknown>(
        url: string,
        data?: D,
        config?: AxiosRequestConfig<D>,
    ): Promise<AxiosResponse<T, D>>;

    delete<T = any, D = unknown>(
        url: string,
        config?: AxiosRequestConfig<D>,
    ): Promise<AxiosResponse<T, D>>;

    patch<T = any, D = unknown>(
        url: string,
        data?: Partial<D>,
        config?: AxiosRequestConfig<D>,
    ): Promise<AxiosResponse<T, Partial<D>>>;
}
