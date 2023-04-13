import Client from './api'

export const RegisterUser = async (data) => {
    try {
        const res = await Client.post('/auth/register', data)
        return res.data.user
    } catch (e) {
        throw e
    }
}

export const SignInUser = async (data) => {
    try {
        const res = await Client.post('/auth/login', data)
        localStorage.setItem('token', res.data.access_token)
        return res.data.user
    } catch (e) {
        throw e
    }
}

export const checkSession = async () => {
    try {
        const res = await Client.get('/auth/session')
        return res
    } catch (e) {
        throw e
    }
}
