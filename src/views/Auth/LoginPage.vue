<template>
    <div
        class="mt-20 w-full max-w-sm container mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form class="space-y-6" @submit.prevent="onSubmit">
            <h5 class="text-xl font-medium text-gray-900 dark:text-white">
                เข้าสู่ระบบ
            </h5>
            <div>
                <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    ชื่อผู้ใช้
                </label>
                <input v-model="username" type="username" name="username" id="username"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="ชื่อผู้ใช้" required>
            </div>
            <div>
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    รหัสผ่าน
                </label>
                <input v-model="password" type="password" name="password" id="password" placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required>
            </div>
            <div class="flex items-start">
                <div class="flex items-start">
                    <div class="flex items-center h-5">
                        <input id="remember" type="checkbox" value=""
                            class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                            required>
                    </div>
                    <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        จดจำฉัน
                    </label>
                </div>
                <a href="#" class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">
                    ลืมรหัสผ่าน?
                </a>
            </div>
            <button type="submit"
                class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                ลงชื่อเข้าใช้
            </button>
            <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                ยังไม่ได้ลงทะเบียน?
                <router-link to="/signup" class="text-blue-700 hover:underline dark:text-blue-500">
                    สร้างบัญชี
                </router-link>
            </div>
        </form>
    </div>
</template>
<script>
import { useAuthStore } from '@/stores/auth'
export default {

    data: () => ({
        username: '',
        password: '',
    }),

    methods: {

        async onSubmit() {
            console.log('hi')

            const authStore = useAuthStore()
            const result = await authStore.login(this.username, this.password)

            setTimeout(() => {
                if (result == "Password or username is incorrect.") this.err = result
            }, 2000)

        },
    },

}
</script>