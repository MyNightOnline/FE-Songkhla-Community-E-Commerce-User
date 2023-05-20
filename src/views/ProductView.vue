<template>
    <div class="container mx-auto mt-3">

        <div id="alert-additional-content-1"
            class="p-4 mb-4 text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800"
            role="alert">
            <div class="flex">
                <div>
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            class="w-5 h-5 mr-2">
                            <path
                                d="M5.223 2.25c-.497 0-.974.198-1.325.55l-1.3 1.298A3.75 3.75 0 007.5 9.75c.627.47 1.406.75 2.25.75.844 0 1.624-.28 2.25-.75.626.47 1.406.75 2.25.75.844 0 1.623-.28 2.25-.75a3.75 3.75 0 004.902-5.652l-1.3-1.299a1.875 1.875 0 00-1.325-.549H5.223z" />
                            <path fill-rule="evenodd"
                                d="M3 20.25v-8.755c1.42.674 3.08.673 4.5 0A5.234 5.234 0 009.75 12c.804 0 1.568-.182 2.25-.506a5.234 5.234 0 002.25.506c.804 0 1.567-.182 2.25-.506 1.42.674 3.08.675 4.5.001v8.755h.75a.75.75 0 010 1.5H2.25a.75.75 0 010-1.5H3zm3-6a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v3a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75v-3zm8.25-.75a.75.75 0 00-.75.75v5.25c0 .414.336.75.75.75h3a.75.75 0 00.75-.75v-5.25a.75.75 0 00-.75-.75h-3z"
                                clip-rule="evenodd" />
                        </svg>
                        <span class="sr-only">Info</span>
                        <h3 class="text-lg font-medium">กลุ่มวิสากิจชุมชนบ้านเราเอง</h3>
                    </div>
                    <div class="mt-2 mb-4 text-sm">
                    </div>
                    <div class="flex">
                        <button type="button" @click="$router.push(`/shop/${product.users_commu_id}`)"
                            class="text-white bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg aria-hidden="true" class="-ml-0.5 mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                                <path fill-rule="evenodd"
                                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            เข้าชมร้านค้า
                        </button>
                    </div>
                </div>
                <div class="flex">
                    <div class="ml-12 border-l-2">
                        <div class="ml-12">
                            <h1>รายการผลิตภัณฑ์: <span>10</span></h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="grid md:grid-cols-2 gap-4">

            <div class="grid gap-4">
                <div style="height: 300px" class="flex items-center justify-center">
                    <img class="object-contain object-center max-w-full max-h-full rounded-lg" :src="nowImg" alt="">
                </div>
                <div class="grid grid-cols-3 gap-4">
                    <div>
                        <img class="hover:border-4 hover:border-blue-400 h-auto lg:h-[160px] bg-cover bg-center cursor-pointer max-w-full rounded-lg"
                            :src="product.image_1" @click="changeImg(product.image_1)" alt="">
                    </div>
                    <div>
                        <img class="hover:border-4 hover:border-blue-400 h-auto lg:h-[160px] bg-cover bg-center cursor-pointer max-w-full rounded-lg"
                            :src="product.image_2" @click="changeImg(product.image_2)" alt="">
                    </div>
                    <div>
                        <img class="hover:border-4 hover:border-blue-400 h-auto lg:h-[160px] bg-cover bg-center cursor-pointer max-w-full rounded-lg"
                            :src="product.image_3" @click="changeImg(product.image_3)" alt="">
                    </div>
                </div>
            </div>

            <div class="grid p-4 grid-cols-1 gap-4 content-between">
                <div class="text-2xl font-semibold">
                    <h1>{{ product.name }}</h1>
                </div>
                <div class="text-xl font-semibold">
                    <h1>ราคา ฿{{ product.price }}</h1>
                </div>
                <div>
                    <h1>ราคาจัดส่ง ฿{{ product.price }}</h1>
                </div>
                <div>
                    <div class="flex items-center">
                        <label for="qtyproduct" class="mr-8">จำนวน </label>
                        <button id="decreaseBtn" class="w-10 h-10 bg-gray-200 rounded-full mr-2">-</button>
                        <input id="numberInput"
                            class="w-20 px-2 py-1 text-center text-gray-700 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="number" value="1" min="1" max="20">
                        <button id="increaseBtn" class="w-10 h-10 bg-gray-200 rounded-full ml-2">+</button>
                    </div>
                    <!-- <input type="number" name="qtyproduct" id="qtyproduct"> -->
                    <div class="mt-3">
                        มีสินค้าทั้งหมด {{ product.quantity }} ชิ้น
                        <div class="mt-2">
                            <Rating :get-star="product.otop" />
                        </div>
                    </div>
                </div>
                <div class="group-btn flex items-center">
                    <button type="button" @click="addtocart(product.users_commu_id, product)"
                        class="text-white bg-gradient-to-r inline-flex items-center from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2">
                        <svg class="w-6 h-6 mr-2 -ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                            fill="currentColor">
                            <path
                                d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                        </svg>
                        เพิ่มไปยังรถเข็น
                    </button>
                    <button type="button" @click="addtocartandgo(product.users_commu_id, product)"
                        class="text-white bg-gradient-to-r inline-flex items-center from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2">
                        <div class="h-6 flex items-center">
                            ซื้อเลย
                        </div>
                    </button>
                </div>
            </div>

        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axiosClient from "@/utils/axios"
import { useCartStore } from '@/stores/cart'
import Rating from '@/components/Home/Rating.vue'
import router from '@/router'
import { useAuthStore } from '@/stores/auth'

interface Product {
    product_id: number
    name: string
    price: number
    quantity: number
    otop: number
    gram: number
    image_1: string
    image_2: string
    image_3: string
    users_commu_id: number
    category_id: number
}

export default defineComponent({
    components: {
        Rating
    },
    setup() {

        const userStore = useAuthStore()
        const useCartStores = useCartStore()
        const clearCart = () => useCartStores.clearCart()
        const addtocart = async (shop_id: any, product: any) => {
            if (!userStore.full_name) {
                return router.push('/login')
            }
            const useCartStores = useCartStore()
            const numberInput = document.getElementById("numberInput") as HTMLInputElement
            product = {
                product_id: product.product_id,
                name: product.name,
                quantity: parseInt(numberInput.value),
                price: product.price,
                image_1: product.image_1,
                gram: product.gram
            }
            await useCartStores.addProduct(shop_id, product)
            router.go(0)
        }
        const addtocartandgo = (shop_id: any, product: any) => {
            if (!userStore.full_name) {
                return router.push('/login')
            }
            const useCartStores = useCartStore()
            const numberInput = document.getElementById("numberInput") as HTMLInputElement
            product = {
                product_id: product.product_id,
                name: product.name,
                quantity: parseInt(numberInput.value),
                price: product.price,
                image_1: product.image_1,
                gram: product.gram
            }
            useCartStores.addProduct(shop_id, product)
            router.push('/cart')
        }

        return {
            clearCart,
            addtocart,
            addtocartandgo,
            userStore
        }
    },
    data() {
        return {
            product: {} as Product,
            maxproduct: 0,
            nowImg: '',
        }
    },
    methods: {
        async getDataProduct() {
            const product = await axiosClient.get('/products/' + this.$route.params.id)
            this.product = product.data
            this.maxproduct = this.product.quantity
            this.nowImg = this.product.image_1
        },
        changeImg(image: any) {
            this.nowImg = image
        },
    },
    mounted() {
        this.getDataProduct()


        const decreaseBtn = document.getElementById("decreaseBtn") as HTMLButtonElement
        const increaseBtn = document.getElementById("increaseBtn") as HTMLButtonElement
        const numberInput = document.getElementById("numberInput") as HTMLInputElement

        decreaseBtn.addEventListener("click", () => {
            let value = parseInt(numberInput.value)
            if (value > 1) {
                numberInput.value = (value - 1).toString()
            }
        })

        increaseBtn.addEventListener("click", () => {
            let value = parseInt(numberInput.value)
            if (value < this.maxproduct) {
                numberInput.value = (value + 1).toString()
            }
        })

        numberInput.addEventListener("input", () => {
            let value = parseInt(numberInput.value)
            let strNum = this.maxproduct
            strNum.toString()
            if (isNaN(value) || value < 1) {
                numberInput.value = "1"
            } else if (value > this.maxproduct) {
                numberInput.value = strNum.toString()
            }
        })
    },
})
</script>

