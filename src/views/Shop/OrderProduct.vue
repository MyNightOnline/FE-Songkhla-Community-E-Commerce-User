<template>
    <div class="container mx-auto p-4">
        <div class="mb-2">
            <a href="#" @click="$router.go(-1)"
                class="inline-flex items-center px-4 py-2 mr-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <svg aria-hidden="true" class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                        clip-rule="evenodd"></path>
                </svg>
                ย้อนกลับ
            </a>
        </div>

        <div class="grid md:grid-cols-2 gap-2">
            <div class="grid" v-for="({ shop_id, products }, index) in allProducts" :key="index">
                <div class="bg-gray-200 p-4 mb-4 rounded-lg grid content-around">
                    <h2 class="text-xl font-bold">{{ shop_id }}</h2>
                    <ul>
                        <li v-for="({ name, price, quantity }) in products" :key="name">
                            {{ name }} - {{ quantity }} - {{ price }}
                        </li>
                    </ul>
                    <div id="input-file-1" class="grid content-end h-32">
                        <label class="block mb-2 font-medium text-gray-900 dark:text-white"
                            for="default_size">อัปโหลดสลีป</label>
                        <input
                            class="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                            id="default_size" type="file">
                    </div>
                </div>
            </div>
        </div>

        <div class="flex justify-end">
            <button type="button"
                class="px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                สั่งสินค้า
            </button>
        </div>

    </div>
</template>
  
<script setup lang="ts">
import { onMounted } from 'vue'
import { useCartStore } from '@/stores/cart'
import router from '@/router'

let allProducts = useCartStore().cart

const handleFileUpload = (index: any, event: any) => {
    const files = event.target.files
}

onMounted(() => {
    if (useCartStore().cart.length == 0) return router.push('/')
})

</script>
  