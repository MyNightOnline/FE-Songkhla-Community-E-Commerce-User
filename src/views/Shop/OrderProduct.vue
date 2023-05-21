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
                    ที่อยู่สำหรับการจัดส่ง <span class="mr-2">{{ address }}</span>
                </h1>
                <span
                    class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                    ค่าเริ่มต้น
                </span>
                <button type="button" data-modal-target="staticModal10" data-modal-toggle="staticModal10"
                    class="px-3 py-2 text-xs font-medium text-center text-white bg-amber-500 rounded-lg hover:bg-amber-500 focus:ring-4 focus:outline-none focus:ring-bg-amber-500 dark:bg-amber-500 dark:hover:bg-amber-500 dark:focus:ring-bg-amber-500">
                    แก้ไข
                </button>
                <!-- Main modal -->
                <div id="staticModal10" data-modal-backdrop="static" tabindex="-1" aria-hidden="true"
                    class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div class="relative w-full max-w-2xl max-h-full">
                        <!-- Modal content -->
                        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <!-- Modal header -->
                            <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                    ที่อยู่สำหรับการจัดส่ง
                                </h3>
                                <button type="button"
                                    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    data-modal-hide="staticModal10">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </button>
                            </div>
                            <!-- Modal body -->
                            <div class="p-6 space-y-6">

                                <div class="grid gap-4 mb-6 md:grid-cols-2">
                                    <div>
                                        <label for="first_name"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            ชื่อ-สกุล
                                        </label>
                                        <input type="text" id="first_name" v-model="full_name"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="ชื่อ-สกุล" required>
                                    </div>
                                    <div>
                                        <label for="last_name"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            หมายเลขโทรศัพท์
                                        </label>
                                        <input type="text" id="last_name" v-model="mobile"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="08X-XXXX-XXX" required>
                                    </div>
                                </div>

                                <div class="flex items-center mb-4">
                                    <input checked id="default-radio-1" type="radio" value="" name="default-radio"
                                        @click="checkRaio(1)"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="default-radio-1"
                                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                        {{ defaultAddress }}
                                        <span
                                            class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                                            ค่าเริ่มต้น
                                        </span>
                                    </label>
                                </div>
                                <div class="flex items-center">
                                    <input id="default-radio-2" type="radio" value="" name="default-radio"
                                        @click="checkRaio(2)"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="default-radio-2"
                                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                        ที่อยู่อื่น
                                    </label>
                                </div>
                                <div class="mb-6">
                                    <label for="default-input"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        ระบุ*
                                    </label>
                                    <input type="text" id="disabled-input" disabled v-model="anotherAddress"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                </div>

                                <div class="border-t-2"></div>

                                <div>

                                    <label for="message"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        รายละเอียด
                                    </label>
                                    <textarea id="message" rows="4" v-model="details"
                                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="เขียนรายละเอียดของคุณ (ทางเลือก)"></textarea>

                                </div>

                            </div>
                            <!-- Modal footer -->
                            <div
                                class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                <button data-modal-hide="staticModal10" type="button" @click="saveAddress"
                                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    บันทึก
                                </button>
                                <button data-modal-hide="staticModal10" type="button"
                                    class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                                    ปิด
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
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

                        <label for="countries" class="block mb-2 font-medium text-gray-900 dark:text-white">
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
                                <input @input="inputPlusNoPay()"
                                    class="block w-full mb-5 text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                    :id="`default_size-${index}`" type="file" required>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex justify-end">
            <button type="button" data-modal-target="popup-modal" data-modal-toggle="popup-modal"
                class="px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                สั่งผลิตภัณฑ์
            </button>
        </div>
        <div id="popup-modal" tabindex="-1" data-modal-backdrop="popup-modal"
            class="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative w-full max-w-md max-h-full">
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button type="button"
                        class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                        data-modal-hide="popup-modal">
                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                    <div class="p-6 text-center">
                        <svg aria-hidden="true" class="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200" fill="none"
                            stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            <p class="text-red-500">{{ textNoPay }}</p>
                            {{ 'คุณต้องการสั่งผลิตภัณฑ์ ?' }}
                        </h3>
                        <button data-modal-hide="popup-modal" type="button" @click="onSubmitForm"
                            class="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                            {{ checkNoPay() }}
                        </button>
                        <button data-modal-hide="popup-modal" type="button"
                            class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                            ไม่
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
  
<script setup lang="ts">
import { onMounted } from 'vue'
import { useCartStore } from '@/stores/cart'
import { useAuthStore } from '@/stores/auth'
import { calDeliveryFee } from '@/assets/functions/calDeliveryFee'
import router from '@/router'

import {
    initModals,
} from 'flowbite'

let allProducts = useCartStore().cart
// console.log(allProducts)

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
    initModals()
    if (useCartStore().cart.length == 0) return router.push('/')

    // console.log(allProducts)
})

</script>

<script lang="ts">
import { defineComponent } from 'vue'
import axiosClient from '@/utils/axios'

export default defineComponent({
    data() {
        return {
            full_name: '',
            mobile: '',
            address: '',
            defaultAddress: '',
            details: '',
            anotherAddress: '',
            noPay: 0,
            textNoPay: '',
        }
    },
    methods: {
        checkNoPay() {
            const allProducts = useCartStore().cart
            this.noPay = 0
            allProducts.forEach((item: any, index: number) => {
                const fileInput = document.getElementById(`default_size-${index}`) as HTMLInputElement
                if (fileInput && fileInput.files && fileInput.files.length > 0) {
                    // console.log('A file has been selected')
                    this.noPay++
                }
                // else {
                //     console.log('No file selected')
                // }
            })
            if ((allProducts.length - this.noPay) != 0) {
                return 'ฉันต้องการชำระเงินภายหลัง !'
            } else {
                return 'ใช่ฉันต้องการสั่ง'
            }
        },
        inputPlusNoPay() {
            const allProducts = useCartStore().cart
            this.noPay = 0
            allProducts.forEach((item: any, index: number) => {
                const fileInput = document.getElementById(`default_size-${index}`) as HTMLInputElement
                if (fileInput && fileInput.files && fileInput.files.length > 0) {
                    // console.log('A file has been selected')
                    this.noPay++
                }
                // else {
                //     console.log('No file selected')
                // }
            })
            if ((allProducts.length - this.noPay) != 0) {
                this.textNoPay = 'คุณยังไม่ได้โอนเงิน !!'
            } else {
                this.textNoPay = ''
            }
        },
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
        },
        checkRaio(id: any) {
            const inputRaio = document.getElementById(`default-radio-${id}`) as HTMLInputElement
            const disableInput = document.getElementById(`disabled-input`) as HTMLInputElement
            if (id == 2) disableInput.disabled = false
            else disableInput.disabled = true
        },
        saveAddress() {
            // const disableInput = document.getElementById(`disabled-input`) as HTMLInputElement
            // if (id == 2) disableInput.disabled = false
            const inputRaio2 = document.getElementById(`default-radio-2`) as HTMLInputElement
            if (inputRaio2.checked) {
                this.address = this.anotherAddress
            } else {
                this.address = this.defaultAddress
            }
        },
        async onSubmitForm() {
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
                return result
            }

            const totalPrice = (products: any) => {
                let allPrices = 0
                products.forEach((item: any) => {
                    allPrices += (item.price * item.quantity)
                })
                return allPrices
            }

            let allProducts = useCartStore().cart
            allProducts.forEach(async (item: any, index: number) => {
                console.log('post order details ...')
                const today = new Date()
                const year = today.getFullYear()
                const month = String(today.getMonth() + 1).padStart(2, '0')
                const day = String(today.getDate()).padStart(2, '0')
                const todayDate = `${year}-${month}-${day}`

                let order_status = 0
                let slipInsertId = 0
                let inputFile = document.getElementById(`default_size-${index}`) as HTMLInputElement
                let fileSize = Number(inputFile.files?.length)
                if (fileSize > 0) {
                    order_status = 1
                    let file: File | null = null
                    const formData = new FormData()
                    if (inputFile.files && inputFile.files.length > 0) {
                        file = inputFile.files[0]
                        formData.append('file', file)
                    }
                    const postSlip = await axiosClient.post('/slippayment', formData)
                    slipInsertId = await postSlip.data.insertId
                }

                let dataPost: {
                    full_name: string,
                    mobile: string,
                    address: string,
                    details: string,
                    date: string,
                    order_status: number,
                    total_price: number,
                    delivery_price: number,
                    total: number,
                    users_id: string,
                    users_commu_id: string,
                    payment_id?: number // Make payment_id property optional
                } = {
                    full_name: this.full_name,
                    mobile: this.mobile,
                    address: this.address,
                    details: this.details,
                    date: todayDate,
                    order_status: order_status,
                    total_price: totalPrice(item.products),
                    delivery_price: calDeli(item.products),
                    total: calTotal(item.products),
                    users_id: useAuthStore().user.data.users_id,
                    users_commu_id: item.shop_id,
                    payment_id: slipInsertId // Include payment_id property
                }

                if (fileSize == 0) {
                    // Conditionally remove payment_id property
                    delete dataPost.payment_id
                }

                const resultPost = await axiosClient.post('/orders', dataPost)
                const orderId = await resultPost.data.insertId
                item.products.forEach(async (product: any, index: number) => {
                    const getProduct = await axiosClient.get('/products/' + product.product_id)
                    const qtyProduct = await getProduct.data.quantity
                    console.log('qtyProduct - product.quantity')
                    console.log(qtyProduct - product.quantity)
                    const updateQtyProduct = await axiosClient.put('/products/qty/' + product.product_id, {
                        "quantity": qtyProduct - product.quantity
                    })
                    const resultPost = await axiosClient.post('/orders/detail', {
                        "order_id": orderId,
                        "product_id": product.product_id,
                        "quantity": product.quantity,
                        "price": product.price * product.quantity
                    })
                })

            })

            useCartStore().clearCart()
            setTimeout(() => {
                location.href = '/'
            }, 1000)
        }
    },
    mounted() {

        this.address = useAuthStore().user.data.address
        this.defaultAddress = useAuthStore().user.data.address
        this.mobile = useAuthStore().user.data.mobile
        this.full_name = useAuthStore().user.data.full_name

        this.inputPlusNoPay()
    }
})
</script>

<style>
.required:after {
    content: " *";
    color: red;
}

.bg-gray-900 {
    --tw-bg-opacity: 0.3;
}
</style>