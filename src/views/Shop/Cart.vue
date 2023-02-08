<script setup>
import { onMounted } from 'vue'
import {
    initAccordions,
    initCarousels,
    initCollapses,
    initDials,
    initDismisses,
    initDrawers,
    initDropdowns,
    initModals,
    initPopovers,
    initTabs,
    initTooltips
} from 'flowbite'
import { useShoppingStore } from '@/stores/shopping'
const data = useShoppingStore()

// initialize components based on data attribute selectors
onMounted(() => {
    initAccordions()
    initCarousels()
    initCollapses()
    initDials()
    initDismisses()
    initDrawers()
    initDropdowns()
    initModals()
    initPopovers()
    initTabs()
    initTooltips()
})

const test = (val, id, item) => {

    const input_num = document.querySelector(`#${id}`)
    const index = data.cartItems.findIndex(product => product.id === item.id)

    if (val > 0 && input_num.value < data.defaultItems[index].quantity) {
        input_num.value++
        data.cartItems[index].quantity += 1
        data.cartItems[index].price += data.defaultItems[index].price
        data.cartItems[index].gram += data.defaultItems[index].gram

        const checkGram = data.cartItems[index].gram
        if (checkGram > 0 && checkGram <= 20) data.cartItems[index].delivery_fee = 32
        else if (checkGram > 20 && checkGram <= 100) data.cartItems[index].delivery_fee = 37
        else if (checkGram > 100 && checkGram <= 250) data.cartItems[index].delivery_fee = 42
        else if (checkGram > 250 && checkGram <= 500) data.cartItems[index].delivery_fee = 52
        else if (checkGram > 500 && checkGram <= 1000) data.cartItems[index].delivery_fee = 67
        else if (checkGram > 1000 && checkGram <= 1500) data.cartItems[index].delivery_fee = 82
        else if (checkGram > 1500 && checkGram <= 2000) data.cartItems[index].delivery_fee = 97
        else if (checkGram > 2000 && checkGram <= 2500) data.cartItems[index].delivery_fee = 105
    }
    else if (val < 0) {
        input_num.value--
        if (input_num.value == 0) {
            return data.removeFromCart(item)
        }
        data.cartItems[index].quantity -= 1
        data.cartItems[index].price -= data.defaultItems[index].price
        data.cartItems[index].gram -= data.defaultItems[index].gram

        const checkGram = data.cartItems[index].gram
        if (data.cartItems[index].price === 0) data.cartItems[index].delivery_fee = 0
        else if (checkGram > 0 && checkGram <= 20) data.cartItems[index].delivery_fee = 32
        else if (checkGram > 20 && checkGram <= 100) data.cartItems[index].delivery_fee = 37
        else if (checkGram > 100 && checkGram <= 250) data.cartItems[index].delivery_fee = 42
        else if (checkGram > 250 && checkGram <= 500) data.cartItems[index].delivery_fee = 52
        else if (checkGram > 500 && checkGram <= 1000) data.cartItems[index].delivery_fee = 67
        else if (checkGram > 1000 && checkGram <= 1500) data.cartItems[index].delivery_fee = 82
        else if (checkGram > 1500 && checkGram <= 2000) data.cartItems[index].delivery_fee = 97
        else if (checkGram > 2000 && checkGram <= 2500) data.cartItems[index].delivery_fee = 105
    } else {
        alert('ไม่สามารถเพิ่มได้อีก')
    }

}

</script>

<template>
    <div v-if="data.cartItems.length >= 1" class="container mx-auto">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            <span class="sr-only">Image</span>
                        </th>
                        <th scope="col" class="px-6 py-3">
                            ผลิตภัณฑ์
                        </th>
                        <th scope="col" class="px-6 py-3">
                            จำนวณ
                        </th>
                        <th scope="col" class="px-6 py-3">
                            ราคา
                        </th>
                        <th scope="col" class="px-6 py-3">
                            ค่าส่ง
                        </th>
                        <th scope="col" class="px-6 py-3">

                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in data.cartItems" :key="index"
                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td class="w-32 p-4">
                            <img src="@/assets/images/product_2.jpg" alt="Apple Watch">
                        </td>
                        <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                            {{ item.name }}
                        </td>
                        <td class="px-6 py-4">
                            <div class="flex items-center space-x-3">
                                <button @click="test(-1, `first_product_${item.id}`, item)"
                                    class="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                    type="button">
                                    <span class="sr-only">Quantity button</span>
                                    <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </button>
                                <div>
                                    <input type="number" :id="`first_product_${item.id}`"
                                        class="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        :value="item.quantity" disabled required>
                                </div>
                                <button @click="test(1, `first_product_${item.id}`, item)"
                                    class="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
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
                            {{ item.price }}
                        </td>
                        <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                            {{ item.delivery_fee }}
                        </td>
                        <td class="px-6 py-4">
                            <button @click="data.removeFromCart(item)"
                                class="font-medium text-red-600 dark:text-red-500 hover:underline">
                                Remove
                            </button>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr class="font-semibold text-gray-900 dark:text-white">
                        <th class="px-6 py-3"></th>
                        <td class="px-6 py-3"></td>
                        <td class="px-6 py-3 text-base">Total</td>
                        <td class="px-6 py-3">20</td>
                        <td class="px-6 py-3">35</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>

    <div v-else class="container mx-auto w-1/2 mt-20">
        <div id="alert-border-4"
            class="flex p-4 mb-4 text-yellow-800 border-t-4 rounded-lg border-yellow-300 bg-yellow-50 dark:text-yellow-300 dark:bg-gray-800 dark:border-yellow-800"
            role="alert">
            <svg class="flex-shrink-0 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clip-rule="evenodd"></path>
            </svg>
            <div class="ml-3 text-sm font-medium">
                คุณไม่ได้เพิ่มสินค้า
                <router-link to="/" class="font-semibold underline hover:no-underline">
                    กลับไปยังหน้าแรก
                </router-link>
            </div>
        </div>
    </div>

</template>

<script>
import { defineComponent } from "vue"

export default defineComponent({
    props: [],
    data: () => ({}),
    components: {},
    methods: {}
})
</script>