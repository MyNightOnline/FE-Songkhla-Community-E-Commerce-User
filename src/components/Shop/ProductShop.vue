<script setup>
import { useShoppingStore } from '@/stores/shopping'
const data = useShoppingStore()
</script>

<script>
import { defineComponent } from "vue"
import Rating from "./Rating.vue"

export default defineComponent({
    props: ["showData"],
    data: () => ({}),
    components: { Rating },
    methods: {
    }
})
</script>

<template>

    <div
        class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img class="p-8 rounded-t-lg" :src="showData.img" alt="product image" />
        </a>
        <div class="px-5 pb-5">
            <h5 class="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                {{ showData.name }}
            </h5>
            <h5 class="text-base tracking-tight text-gray-900 dark:text-white">
                สินค้าทั้งหมด {{ showData.quantity }} ชิ้น
            </h5>

            <Rating class="items-center mt-2.5 mb-5" :getStar="showData.otop" />

            <div class="flex items-center justify-between">
                <span class="text-3xl font-bold text-gray-900 dark:text-white">
                    {{ showData.price }}<span class="text-xl">บาท</span>
                </span>
                <a href="#" @click="data.addToCart(showData)"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    ใส่ตะกร้า
                </a>
            </div>
        </div>
    </div>


</template>