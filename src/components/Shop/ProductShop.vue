<script setup>
import { useShoppingStore } from '@/stores/shopping'
const data = useShoppingStore()
</script>

<script>
import { defineComponent } from "vue"
import Rating from "./Rating.vue"
import router from '@/router'

export default defineComponent({
    props: ["showData"],
    data: () => ({
        sendData: {}
    }),
    components: { Rating },
    mounted() {
        this.sendData = {
            product_id: this.showData.id,
            product_image: this.showData.img,
            product_name: this.showData.name,
            category: this.showData.category,
            price: this.showData.price,
            otop: this.showData.otop,
        }
        console.log(this.showData)
    }
})
</script>

<template>
    <div @click="router.push(`/product/${sendData.product_id}`)"
        class="cursor-pointer bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div class="flex justify-items-center max-h-52">
            <img class="rounded-t-lg object-center w-full" :src="sendData.product_image" alt="" />
        </div>
        <!-- <a @click="toShop(sendData.product_id)" class="flex rounded-t-lg justify-center"
            :style="`background-image: ${sendData.product_image};`">
            <img class="rounded-t-lg h-[200px] w-[370px] sm:w-full" :src="sendData.product_image" alt="product image" />
        </a> -->
        <div class="p-5 sm:h-60 grid content-between">
            <div>
                <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {{ sendData.product_name }}
                </h5>
                <p class="font-normal text-gray-600 dark:text-gray-400">
                    <span class="font-semibold">ประเภทกิจการ</span>: {{ sendData.category }}
                </p>
            </div>
            <div class="flex items-center justify-between">
                <Rating :get-star="sendData.otop" />
                <h1>฿{{ sendData.price }}</h1>
            </div>
        </div>
    </div>
    <!-- <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img class="p-8 rounded-t-lg" :src="showData.img" alt="product image" />
        </a>
        <div class="px-5 pb-5">
            <h5 class="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                {{ showData.name }}
            </h5>
            <h5 v-if="showData.quantity > 0" class="text-base tracking-tight text-gray-900 dark:text-white">
                สินค้าทั้งหมด {{ showData.quantity }} ชิ้น
            </h5>
            <span v-else
                class="bg-red-100 text-red-600 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                สินค้าหมด
            </span>

            <Rating class="items-center mt-2.5 mb-5" :getStar="showData.otop" />

            <div class="flex items-center justify-between">
                <span class="text-3xl font-bold text-gray-900 dark:text-white">
                    {{ showData.price }}<span class="text-xl">บาท</span>
                </span>
                <a v-if="showData.quantity > 0" href="#" @click="data.addToCart(showData)"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    ใส่ตะกร้า
                </a>
            </div>
        </div>
    </div> -->
</template>