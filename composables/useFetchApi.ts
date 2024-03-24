import axios, { type AxiosRequestConfig } from 'axios'
import { useAxios } from '@vueuse/integrations/useAxios'

export default async function useFetchApi(url: string, options: AxiosRequestConfig<any>): Promise<any> {
    const config = useRuntimeConfig();

    const instance = axios.create({
        baseURL: `${config.public.baseURL}/${config.public.apiVersion}`
    })

    return useAxios(url, options, instance);
}