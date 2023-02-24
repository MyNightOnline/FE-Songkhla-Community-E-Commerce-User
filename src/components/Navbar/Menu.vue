<script setup>
import { useShoppingStore } from '@/stores/shopping'
const data = useShoppingStore()

</script>

<script>
import { defineComponent } from 'vue'

export default defineComponent({

})
</script>


<template>
    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
        <ul
            class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
                <router-link to="/" id="menu"
                    class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                    aria-current="page">
                    Home
                </router-link>
            </li>
            <li v-if="data.cartItems.length > 0">
                <router-link type="button" to="/cart" id="menu"
                    class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    Cart
                    <span
                        class="inline-flex items-center justify-center w-4 h-4 ml-2 text-xs font-semibold text-red-600 bg-blue-200 rounded-full">
                        {{ data.cartItems.length }}
                    </span>
                </router-link>
            </li>
        </ul>
    </div>
</template>