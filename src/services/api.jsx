import axios from 'axios'

export const BASE_URL = 'http://localhost:3001'

const Client = axios.create({ baseURL: BASE_URL })

Client.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (e) => {
        Promise.reject(e)
    }
)

export default Client
