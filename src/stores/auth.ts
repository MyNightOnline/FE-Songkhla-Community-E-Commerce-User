import axiosClient from "@/utils/axios"
import router from "@/router"
import { defineStore } from "pinia"

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    user: JSON.parse(localStorage.getItem("user")!),
    full_name: "",
  }),

  actions: {
    async login(username: string, password: string) {
      try {
        const user = await axiosClient.post("/auth/auth-user", {
          username,
          password,
        })

        if (user.data.msg) return user.data.msg

        this.user = user.data
        this.full_name = user.data.full_name

        localStorage.setItem("user", JSON.stringify(user))
        router.push("/")

        return user
      } catch (error: any) {
        alert("รหัสผ่านผิด / " + error.response.data.message)
        console.error(error.response.data.message)
      }
    },
    logout() {
      this.user = null
      this.full_name = ""
      localStorage.removeItem("user")
      localStorage.removeItem("cart")
      window.location.href = "/login"
      // router.push('/login')
    },
    update(resDarta: any) {
      const user = localStorage.getItem("user")!
      const data = JSON.parse(user)

      data.data.address = resDarta.data.address
      data.data.full_name = resDarta.data.full_name
      data.data.mobile = resDarta.data.mobile
      data.data.username = resDarta.data.username
      data.data.users_id = resDarta.data.users_id

      localStorage.setItem("user", JSON.stringify(data))

      router.go(0)
    },
  },

  getters: {
    getUser(state) {
      return state.full_name
    },
  },
})
