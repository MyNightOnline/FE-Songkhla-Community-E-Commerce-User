<template>
    <div v-if="cartCount != 0" class="relative md:hidden">
        <button type="button" @click="$router.push('/cart')"
            class="text-white fixed mb-4 mr-4 bottom-0 right-0 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>

            <span class="sr-only">Icon description</span>
            <div
                class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
                {{ cartCount }}
            </div>
        </button>
    </div>

    <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="flex flex-wrap items-center justify-between container mx-auto p-4">
            <StartMenu />
            <CenterMenu />
            <!-- <EndMenu /> -->
        </div>
    </nav>
</template>



<script lang="ts">
import StartMenu from '@/components/Navbar/Menu/StartMenu.vue'
import CenterMenu from '@/components/Navbar/Menu/CenterMenu.vue'
// import EndMenu from '@/components/Navbar/Menu/EndMenu.vue'
import { useCartStore } from '@/stores/cart'

import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Navbar',
    // Component options here
    components: {
        StartMenu,
        CenterMenu,
        // EndMenu
    },
    setup() {
        const cartStore = useCartStore()
        return {
            cartCount: cartStore.cartCount
        }
    }
})
</script>