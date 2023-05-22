<script>
import { defineComponent } from "vue"
import axiosClient from "@/utils/axios"

export default defineComponent({
    props: [],
    data: () => ({
        passErr: false,
        users: [
            { full_name: '' },
            { address: '' },
            { mobile: '' },
            { username: '' },
            { password: '' },
            { cf_password: '' },
        ],
    }),
    mounted() {
    },
    methods: {
        submitForm() {
            if (this.users[0].password != this.users[0].cf_password) return this.passErr = true
            this.passErr = false;

            (async () => {
                try {
                    const { data } = await axiosClient.post('/auth/users', {
                        username: this.users[0].username,
                        password: this.users[0].password,
                        full_name: this.users[0].full_name,
                        address: this.users[0].address,
                        mobile: this.users[0].mobile
                    })
                    if (data.message) {
                        alert('สมัครเสร็จสิ้น')
                        this.$router.push('/')
                    }
                } catch (err) {
                    if (err.response.data.err == "This username already exists.") {
                        this.resetForm()
                        return alert('มีผู้ใช้นี้แล้ว')
                    }
                }
            })()
        },
        resetForm() {
            this.users = [
                { full_name: '' },
                { address: '' },
                { mobile: '' },
                { username: '' },
                { password: '' },
                { cf_password: '' },
            ]
        }
    }
})
</script>

<template>
    <div
        class="mt-20 w-full max-w-lg container mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form @submit.prevent="submitForm">
            <h5 class="text-xl mb-6 font-medium text-gray-900 dark:text-white">
                สมัครสมาชิก
            </h5>
            <div class="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label for="full_name" class="required block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        ชื่อเต็ม
                    </label>
                    <input v-model="users[0].full_name" type="text" id="full_name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="ชื่อ-สกุล" required />
                </div>
                <div>
                    <label for="address" class="required block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        ที่อยู่
                    </label>
                    <input v-model="users[0].address" type="text" id="address"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="...." required />
                </div>
                <div>
                    <label for="phone" class="required block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        เบอร์โทร
                    </label>
                    <input v-model="users[0].mobile" maxlength="10" type="tel" id="phone"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="0XX-XXX-XXXX" required />
                </div>
            </div>
            <div class="mb-6">
                <label for="username" class="required block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    ชื่อผู้ใช้
                </label>
                <input v-model="users[0].username" type="text" id="username"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="username" required />
            </div>
            <div class="mb-6">
                <label for="password" class="required block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    รหัสผ่าน
                </label>
                <input v-model="users[0].password" type="password" id="password"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="•••••••••" required />
                <p v-if="passErr" class="mt-2 text-sm text-red-600 dark:text-red-500">
                    รหัสผ่านไม่ตรงกัน
                </p>
            </div>
            <div class="mb-6">
                <label for="confirm_password" class="required block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    ยืนยันรหัสผ่าน
                </label>
                <input v-model="users[0].cf_password" type="password" id="confirm_password"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="•••••••••" required />
                <p v-if="passErr" class="mt-2 text-sm text-red-600 dark:text-red-500">
                    รหัสผ่านไม่ตรงกัน
                </p>
            </div>
            <button type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                สมัคร
            </button>
        </form>
    </div>
</template>

<style>
.required:after {
    content: " *";
    color: red;
}

.bg-gray-900 {
    --tw-bg-opacity: 0.3;
}
</style>