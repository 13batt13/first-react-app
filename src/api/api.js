import * as axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '3a267f71-a6bd-4205-b98a-ecb11c206dd1',
  },
})

export const authApi = {
  authMe() {
    return instance.get('auth/me').then((response) => response)
  },
  login(email, password) {
    return instance
      .post('auth/login', { email, password, rememberMe: true })
      .then((response) => response)
  },
  logout() {
    return instance.delete('auth/login').then((response) => response)
  },
}

export const profileApi = {
  getProfile(id) {
    return instance.get(`profile/${id}`).then((response) => response)
  },
}
