<template>
    <div class="container mx-auto">

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

        <div v-if="allProducts.length == 0"
            class="flex p-4 mb-4 text-lg text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
            role="alert">
            <svg aria-hidden="true" class="flex-shrink-0 inline w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clip-rule="evenodd"></path>
            </svg>
            <span class="sr-only">Info</span>
            <div>
                <span class="font-medium">ไม่มีข้อมูลผลิตภัณฑ์ในตระกร้า
                    <a href="/">
                        <b><u>กลับไปหน้าแรก</u></b>
                    </a>
                    เพื่อเลือกผลิตพัณฑ์</span>
            </div>
        </div>

        <!-- Loop Products -->
        <div class="">
            <div v-for="({ shop_id, products }, index) in allProducts" :key="index">
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg mb-10">
                    <table class="w-full text-base text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-base text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    <span class="sr-only">Image</span>
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    ผลิตภัณฑ์ {{ shop_id }}
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    จำนวน
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    ราคา
                                </th>
                                <th scope="col" class="px-6 py-3">

                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="({ name, price, product_id, quantity, image_1 }, index) in products" :key="index"
                                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <div class="hidden">{{ product_id }}</div>
                                <td class="w-32 p-4">
                                    <img class="rounded-lg" :src="image_1" alt="Apple Watch">
                                </td>
                                <td style="width: 400px" class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                    {{ name }}
                                </td>
                                <td class="px-6 py-4">
                                    <div class="flex items-center space-x-3">
                                        <button @click="reduce(shop_id, product_id)"
                                            class="inline-flex items-center p-1 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                            type="button">
                                            <span class="sr-only">Quantity button</span>
                                            <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd"
                                                    d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                        </button>
                                        <div>
                                            <input type="number" id="first_product"
                                                class="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                :value="quantity" required>
                                        </div>
                                        <button @click="increase(shop_id, product_id)"
                                            class="inline-flex items-center p-1 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                            type="button">
                                            <span class="sr-only">Quantity button</span>
                                            <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd"
                                                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                    ฿{{ formatNumberToPrice(price * quantity) }}
                                </td>
                                <td class="px-6 py-4">
                                    <a href="#" @click="removeProduct(shop_id, product_id)"
                                        class="text-lg flex items-center font-medium text-red-600 dark:text-red-500 hover:underline">
                                        <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" stroke-width="1.5"
                                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0">
                                            </path>
                                        </svg>
                                        ลบ
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr class="font-semibold text-gray-900 dark:text-white">
                                <th scope="row" class="px-6 py-3 text-base">ค่าจัดส่ง</th>
                                <td class="px-6 py-3"></td>
                                <td class="px-6 py-3"></td>
                                <td class="px-6 py-3 flex items-center">
                                    ฿{{ calDeli(products) }}
                                    <a :data-tooltip-target="`tooltip-default${index}`" href="#" class="ml-1">
                                        <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor"
                                            stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z">
                                            </path>
                                        </svg>
                                        <div :id="`tooltip-default${index}`" role="tooltip"
                                            class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                                            การคำนวณค่าจัดส่ง
                                            <div class="tooltip-arrow" data-popper-arrow></div>
                                        </div>
                                    </a>
                                </td>
                            </tr>
                            <tr class="font-semibold text-gray-900 dark:text-white">
                                <th scope="row" class="px-6 py-3 text-base">รวม</th>
                                <td class="px-6 py-3"></td>
                                <td class="px-6 py-3">{{ tatalProduct(products) }}</td>
                                <td class="px-6 py-3">฿{{ calTotal(products) }}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>

            </div>
        </div>

        <div class="flex justify-end mb-12">
            <button type="button" @click="redi"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                สั่งผลิตภัณฑ์
                <svg aria-hidden="true" class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                </svg>
            </button>
        </div>

    </div>
</template>

<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
import { calDeliveryFee } from '@/assets/functions/calDeliveryFee'

const allProducts = useCartStore().cart
const removeProduct = useCartStore().deleteProduct
const increase = useCartStore().increaseQuantity
const reduce = useCartStore().reduceQuantity
console.log(allProducts)

const redi = () => {
    return window.location.href = '/cart/order-products'
}

const calDeli = (products: any) => {
    let allGrams = 0
    products.forEach((item: any) => {
        allGrams += (item.gram * item.quantity)
    })
    return calDeliveryFee(allGrams)
}

const calTotal = (products: any) => {
    let allPrices = 0
    let allGrams = 0
    products.forEach((item: any) => {
        allPrices += (item.price * item.quantity)
        allGrams += (item.gram * item.quantity)
    })
    let result = allPrices + calDeliveryFee(allGrams)
    return formatNumberToPrice(result)
}

const tatalProduct = (products: any) => {
    let allQuantity = 0
    products.forEach((item: any) => {
        allQuantity += item.quantity
    })
    return formatNumberToPrice(allQuantity)
}

const formatNumberToPrice = (number: number) => {
    return number.toLocaleString('en-US')
}

</script>