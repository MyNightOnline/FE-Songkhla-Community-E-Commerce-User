<template>
    <div
        class="mt-20 w-full max-w-lg container mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form @submit.prevent="onSubmit">
            <h5 class="text-xl mb-6 font-medium text-gray-900 dark:text-white">
                ข้อมูลบัญชี
            </h5>
            <div class="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label for="full_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        ชื่อเต็ม
                    </label>
                    <input type="text" id="full_name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        v-model="full_name" required />
                </div>
                <div>
                    <label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        ที่อยู่
                    </label>
                    <input type="text" id="address"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        v-model="address" required />
                </div>
                <div>
                    <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        เบอร์โทร
                    </label>
                    <input maxlength="10" type="tel" id="phone"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        v-model="mobile" required />
                </div>
            </div>
            <div class="mb-6">
                <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    ชื่อผู้ใช้
                </label>
                <input type="text" id="disabled-input-2" aria-label="disabled input 2"
                    class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    v-model="username" disabled readonly required />
            </div>
            <div class="mb-6">
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    รหัสผ่าน
                </label>
                <input v-model="password" type="password" id="password"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="•••••••••" />
            </div>
            <div class="mb-6">
                <label for="confirm_password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    ยืนยันรหัสผ่าน
                </label>
                <input v-model="cf_password" type="password" id="confirm_password"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="•••••••••" />
            </div>
            <button type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                บันทึก
            </button>
        </form>
    </div>
</template>


<script>
import { defineComponent } from 'vue'
import { useAuthStore } from '@/stores/auth'
import axiosClient from '@/utils/axios'
export default defineComponent({

    data: () => ({
        users_id: '',
        full_name: '',
        address: '',
        username: '',
        defaultUsername: '',
        mobile: '',
        password: '',
        cf_password: '',
    }),

    mounted() {
        const userStore = useAuthStore()
        if (!userStore.user) return this.$router.push('/login')
        else {
            this.users_id = userStore.user.data.users_id
            this.full_name = userStore.user.data.full_name
            this.address = userStore.user.data.address
            this.username = userStore.user.data.username
            this.defaultUsername = userStore.user.data.username
            this.mobile = userStore.user.data.mobile
            this.password = ''
            this.cf_password = ''
        }
    },

    methods: {

        async onSubmit() {

            if ((this.password != '' && this.cf_password != '') && (this.password != this.cf_password)) {
                alert('some password')
            } else if (this.mobile.length > 10) {
                alert('ใส่เบอร์โทร 10 ตัวเท่านั่น')
            } else {
                let putData = {
                    users_id: this.users_id,
                    username: this.defaultUsername,
                    full_name: this.full_name,
                    mobile: this.mobile,
                    address: this.address,
                    password: this.password
                }
                if (this.password == '' && this.cf_password == '') delete putData.password
                let result = await axiosClient.put(`/auth/users/${this.users_id}`, putData)
                useAuthStore().update(result.data)
            }

        },
    },

})
</script>