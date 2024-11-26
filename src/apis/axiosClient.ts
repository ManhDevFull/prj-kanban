import axios from 'axios'
import queryString from 'query-string'
import { localDataNames } from '../constants/appInfos'

const baseURL = 'http://192.168.0.101:3001'

const getAccessToken = ()=>{
    const res = localStorage.getItem(localDataNames.authData);
    if (res) {
		const auth = JSON.parse(res);
		return auth && auth.token ? auth.token : '';
	} else {
		return '';
	}
}

const axiosClient = axios.create({
    baseURL,
    paramsSerializer: (params) => queryString.stringify(params),
})

axiosClient.interceptors.request.use(async (config: any) => {
    const accessToken = getAccessToken()
    config.headers = {
        Authorization:  accessToken ? `Bearer ${accessToken}` : '',
        Accept: 'application/json',
        ...config.headers,
    }
    return { ...config, data: config.data ?? null };
})
axiosClient.interceptors.response.use(res => {
    if(res.data && res.status >= 200 && res.status < 300)
        return res.data
    else
        return Promise.reject(res.data)
}, error => {
    const {response} = error
    return Promise.reject(response.data)
})
export default axiosClient