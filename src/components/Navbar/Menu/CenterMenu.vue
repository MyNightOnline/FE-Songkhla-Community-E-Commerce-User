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
        <button type="button" v-if="cartCount != 0" @click="$router.push('/cart')"
            class="relative hidden md:inline-flex items-center p-3 text-sm font-medium text-center text-white bg-blue-700 rounded-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
            <span class="sr-only">Notifications</span>
            <div
                class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
                {{ cartCount }}
            </div>
        </button>
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
                    <a href="/purchase/all"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                        การซื้อของฉัน
                    </a>
                </li>
                <li>
                    <a href="/setting"
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
import { useCartStore } from '@/stores/cart'
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
const cartCount = useCartStore().cartCount

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