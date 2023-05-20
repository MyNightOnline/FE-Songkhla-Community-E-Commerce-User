<template>
    <div class="container mx-auto p-4">
        <div class="mb-2 flex justify-between">
            <div>
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
            <div class="flex items-center">
                <h1 class="text-lg">
                    ที่อยู่สำหรับการจัดส่ง <span class="mr-2">146/5 หมู่ 1</span>
                </h1>
                <span
                    class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                    ค่าเริ่มต้น
                </span>
                <button type="button"
                    class="px-3 py-2 text-xs font-medium text-center text-white bg-amber-500 rounded-lg hover:bg-amber-500 focus:ring-4 focus:outline-none focus:ring-bg-amber-500 dark:bg-amber-500 dark:hover:bg-amber-500 dark:focus:ring-bg-amber-500">
                    แก้ไข
                </button>
            </div>
        </div>

        <div class="grid gap-2">
            <div class="grid" v-for="({ shop_name, products, banks }, index) in allProducts" :key="index">
                <div class="bg-gray-200 p-4 mb-4 rounded-lg grid content-between">
                    <div class="grid">
                        <h2 class="text-xl font-bold mb-3">{{ shop_name }}</h2>
                        <div class="relative overflow-x-auto rounded-lg bg-white">
                            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead
                                    class="text-gray-700 text-lg uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">
                                            ชื่อผลิตภัณฑ์
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            จำนวน
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            ราคา
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="({ name, price, quantity }) in products" :key="name"
                                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row"
                                            class="px-6 py-4 text-basic text-lg font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            <p class="truncate overflow-hidden">
                                                {{ name }}
                                            </p>
                                        </th>
                                        <td class="px-6 py-4">
                                            {{ quantity }}
                                        </td>
                                        <td class="px-6 py-4">
                                            {{ price * quantity }}
                                        </td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr class="font-semibold text-gray-900 dark:text-white">
                                        <th scope="row" class="px-6 py-3 text-base">ค่าจัดส่ง</th>
                                        <td class="px-6 py-3"></td>
                                        <td class="px-6 py-3 flex items-center">
                                            ฿{{ calDeli(products) }}
                                            <a :data-tooltip-target="`tooltip-default${index}`" href="#" class="ml-1">
                                                <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor"
                                                    stroke-width="1.5" viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
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
                                    <tr class="font-semibold text-2xl text-gray-900 dark:text-white">
                                        <th scope="row" class="px-6 py-3 text-base">รวม</th>
                                        <td class="px-6 py-3">{{ tatalProduct(products) }}</td>
                                        <td class="px-6 py-3">฿{{ calTotal(products) }}</td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                    <div id="input-file-1" class="mt-3">

                        <label for="countries" class="required block mb-2 font-medium text-gray-900 dark:text-white">
                            เลือกธนาคาร
                        </label>
                        <select :id="`countries-${index}`" @change="handleSelect(index)"
                            class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected disabled>--- เลือกธนาคาร ---</option>
                            <option v-for="({ bank_name, back_account }, index2) in banks" :key="index2"
                                :value="back_account">{{ bank_name }}
                            </option>
                        </select>
                        <div :id="`grid-select-${index}`" class="hidden md:grid-cols-2 gap-4 items-center">
                            <div>
                                <div class="my-3 flex cursor-pointer justify-center" @click="copyHandle(index)">
                                    <h1 class="text-3xl flex items-center" :id="`showTxt-${index}`">
                                    </h1>
                                    <button type="button" :id="`showBtn-${index}`" @click="copyHandle(index)"
                                        class="ml-3 px-3 py-2 text-xs font-medium hidden items-center text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Copy
                                    </button>
                                </div>
                            </div>
                            <div>
                                <label class="block mb-2 font-medium text-gray-900 dark:text-white"
                                    for="default_size">อัปโหลดสลีป</label>
                                <input
                                    class="block w-full mb-5 text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                    id="default_size" type="file" required>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex justify-end">
            <button type="button"
                class="px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                สั่งผลิตภัณฑ์
            </button>
        </div>

    </div>
</template>
  
<script setup lang="ts">
import { onMounted } from 'vue'
import { useCartStore } from '@/stores/cart'
import { calDeliveryFee } from '@/assets/functions/calDeliveryFee'
import router from '@/router'

let allProducts = useCartStore().cart
console.log(allProducts)

const calDeli = (products: any) => {
    let allGrams = 0
    products.forEach(async (item: any) => {
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

onMounted(async () => {
    if (useCartStore().cart.length == 0) return router.push('/')

    // console.log(allProducts)

    allProducts.forEach(async (item: any) => {
        // console.log('**** Data for order *****')
        // console.log(`Shop ID: ${item.shop_id}`)
        // item.products.forEach((product: any) => {
        //     console.log(`Product ID: ${product.product_id}`)
        //     console.log(`Product Name: ${product.name}`)
        //     console.log(`Product QTY: ${product.quantity}`)
        //     console.log(`Product DELIVERY PRICE: ${calDeli(item.products)}`)
        //     console.log(`Product ALL PRICE: ${calTotal(item.products)}`)
        // })

    })

})

</script>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data() {
        return {

        }
    },
    methods: {
        handleSelect(index: number) {
            const e = document.getElementById(`countries-${index}`) as HTMLSelectElement
            const e2 = document.getElementById(`showTxt-${index}`) as HTMLSelectElement
            const eBtn = document.getElementById(`showBtn-${index}`) as HTMLElement

            const eBtn2 = document.getElementById(`grid-select-${index}`) as HTMLElement

            var value = e.value

            navigator.clipboard.writeText(value)

            e2.textContent = `หมายเลขบัญชี ${value}`
            e2.classList.remove('hidden')
            e2.classList.add('flex')

            eBtn.classList.add('inline-flex')
            eBtn.classList.remove('hidden')

            eBtn2.classList.remove('hidden')
            eBtn2.classList.add('grid')
        },
        copyHandle(index: number) {
            let allProducts = useCartStore().cart
            allProducts.forEach((i: any, iIndex) => {
                const eBtn = document.getElementById(`showBtn-${iIndex}`) as HTMLElement
                eBtn.textContent = 'Copy'
            })
            const e = document.getElementById(`countries-${index}`) as HTMLSelectElement
            var value = e.value
            navigator.clipboard.writeText(value)

            const eBtn = document.getElementById(`showBtn-${index}`) as HTMLElement
            eBtn.textContent = 'coppied'
        }
    },
    mounted() {

    }
})
</script>

<style>
.required:after {
    content: " *";
    color: red;
}
</style>