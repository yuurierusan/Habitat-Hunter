import Client from './api'

export const Register = async (data) => {
    try {
        const res = await Client.post('/register', data)
        return res.data.user
    } catch (e) {
        throw e
    }
}

export const Login = async (data) => {
    try {
        const res = await Client.post('/login', data)
        localStorage.setItem('token', res.data.token)
        return res.data.user
    } catch (e) {
        throw e
    }
}

export const CheckSession = async () => {
    try {
        const res = await Client.get('/check-session')
        return res.data.user
    } catch (e) {
        throw e
    }
}
