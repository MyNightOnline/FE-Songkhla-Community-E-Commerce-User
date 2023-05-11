import axiosClient from '@/utils/axios'
import router from '@/router'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        user: JSON.parse(localStorage.getItem('user')!),
        full_name: ''
    }),

    actions: {
        async login(username: string, password: string) {
            const user = await axiosClient.post('/auth/auth-user', {
                username,
                password
            })

            console.log(user)

            if (user.data.msg) return user.data.msg

            this.user = user.data
            this.full_name = user.data.full_name

            localStorage.setItem('user', JSON.stringify(user))
            router.push('/')

            return user

        },
        logout() {
            this.user = null
            this.full_name = ''
            localStorage.removeItem('user')
            router.go(0)
        },
        update(resDarta: any) {

            const user = localStorage.getItem('user')!
            const data = JSON.parse(user)

            console.log(resDarta.data)

            data.data.address = resDarta.data.address
            data.data.full_name = resDarta.data.full_name
            data.data.mobile = resDarta.data.mobile
            data.data.username = resDarta.data.username
            data.data.users_id = resDarta.data.users_id

            localStorage.setItem('user', JSON.stringify(data))

            router.go(0)
        }
    },

    getters: {
        getUser(state) {
            return state.full_name
        }
    }

})