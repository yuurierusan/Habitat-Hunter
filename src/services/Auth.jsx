import Client from './api'

export const RegisterUser = async (data) => {
    try {
        const res = await Client.post('/register', data)
        return res.data.user
    } catch (e) {
        console.log(e)
    }
}

export const SignInUser = async (data) => {
    try {
        const res = await Client.post('/login', data)
        localStorage.setItem('token', res.data.access_token)
        return res.data.user
    } catch (e) {
        console.log(e)
    }
}

export const CheckSession = async () => {
    try {
        const res = await Client.get('/session')
        console.log(res)
        return res.data
    } catch (e) {
        console.log(e)
    }
}
