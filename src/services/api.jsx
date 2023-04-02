import Axios from 'axios'

export const BASE_URL = 'http://127.0.0.1:5000'

const Client = Axios.create({ baseURL: BASE_URL })

Client.request(
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
