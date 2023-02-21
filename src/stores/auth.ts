import axiosClient from '@/utils/axios'
import router from '@/router'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        user: JSON.parse(localStorage.getItem('user')!),
    }),

    actions: {
        async login(username: string, password: string) {
            const user = await axiosClient.post('/auth/auth-user', {
                username,
                password
            })

            console.log(user)

            if (user.data.msg) return user.data.msg

            this.user = user

            localStorage.setItem('user', JSON.stringify(user))
            setTimeout(() => {
                router.push('/')
            }, 1500)

            return user

        },
        logout() {
            this.user = null
            localStorage.removeItem('user')
            router.push('/login')
        }
    }

})