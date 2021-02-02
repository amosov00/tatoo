import axios from "axios"

const $axios = axios.create({
    baseURL: 'http://5.63.157.3/',
})

export function loginRquest(login, password) {
 return $axios.post('/login', {
     login,
     password
 })
}

export function registration(login, password, email) {
    return $axios.post('/registration', {
        login,
        password,
        email
    })
}

export function checkLogin() {
    return $axios.get('/login')
}
