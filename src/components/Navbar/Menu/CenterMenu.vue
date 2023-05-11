<template>
    <div v-if="!userStore.full_name" class="flex items-center md:order-2">
        <a href="/login"
            class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
            เข้าสู่ระบบ
        </a>
        <a href="/signup"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            สมัครสมาชิก
        </a>
    </div>
    <div v-else class="flex items-center md:order-2">
        <button type="button"
            class="flex mx-3 text-sm bg-white rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom">
            <span class="sr-only">Open user menu</span>
            <img class="w-8 h-8 rounded-full" src="./UserCircle.svg" alt="user photo">
        </button>
        <!-- Dropdown menu -->
        <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
            id="user-dropdown">
            <div class="px-4 py-3">
                <span class="block text-sm text-gray-900 dark:text-white">
                    {{ userStore.full_name }}
                </span>
                <!-- <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span> -->
            </div>
            <ul class="py-2" aria-labelledby="user-menu-button">
                <li>
                    <a href="#"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                        ตั้งค่า
                    </a>
                </li>
                <li>
                    <a href="#" @click="logout"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                        ออกจากระบบ
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import { onMounted } from 'vue'
import {
    initCollapses,
    initDropdowns,
} from 'flowbite'

onMounted(() => {
    initCollapses()
    initDropdowns()
})

const userStore = useAuthStore()

const logout = () => {
    return useAuthStore().logout()
}

</script>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({
    name: 'CenterMenu',
    // Component options here
})
</script>