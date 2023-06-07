<template>
    <div class="container mx-auto">

        <div class="mb-3">
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

        <div class="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

            <div class="lg:flex lg:justify-items-center lg:justify-between">
                <div class="">
                    <svg class="w-10 h-10 mb-2" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12">
                        </path>
                    </svg>
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            ที่อยู่จัดส่ง
                        </h5>
                        <span>{{ order.address }}</span>
                    </a>
                </div>
                <div class="grid content-between">
                    <div>
                        <p>หมายเลขพัสดุ {{ (order.tracking_number) ? order.tracking_number : '-' }}</p>
                        <p>
                            สถานะ
                            <span :class="getClassOrderStatus(order.order_status)">
                                {{ getTextOrderStatus(order.order_status) }}
                            </span>
                        </p>
                    </div>
                    <button v-if="order.order_status == 0 || order.order_status == 1" type="button"
                        @click="cancelOrder(order.order_id)"
                        class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                        ยกเลิกคำสั่งซื้อ
                    </button>
                </div>

            </div>

        </div>

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <!-- <div v-if="noData"
                class="p-4 text-lg font-bold text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                role="alert">
                {{ noData }}
            </div> -->
            <table class="mb-10 w-full text-base text-left text-gray-500 dark:text-gray-400">
                <thead class="text-base text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            <span>#{{ order.order_id }}</span>
                        </th>
                        <th style="width: 600px;" scope="col" class="px-6 py-3">
                            ชื่อผลิตภัณฑ์
                        </th>
                        <th style="width: 300px;" scope="col" class="px-6 py-3">
                            จำนวน
                        </th>
                        <th scope="col" class="px-6 py-3">
                            ราคารวม
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in orderDetails" :key="index"
                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td class="w-32 p-4">
                            <img :src="item.image_1" alt="Apple Watch">
                        </td>
                        <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                            {{ item.name }}
                        </td>
                        <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                            {{ item.quantity }}
                        </td>
                        <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                            ฿{{ item.price }}
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr class="font-semibold text-gray-900 dark:text-white">
                        <th scope="row" class="px-6 py-3"></th>
                        <td class="px-6 py-3"></td>
                        <td class="px-6 py-3 text-base">ค่าจัดส่ง</td>
                        <td class="px-6 py-3 text-lg">฿{{ order.delivery_price }}</td>
                    </tr>
                    <tr class="font-semibold text-gray-900 dark:text-white">
                        <th scope="row" class="px-6 py-3"></th>
                        <td class="px-6 py-3"></td>
                        <td class="px-6 py-3 text-base">รวม</td>
                        <td class="px-6 py-3 text-lg">฿{{ order.total }}</td>
                    </tr>
                </tfoot>
            </table>
            <div class="p-4" v-if="order.order_status == 0">

                <label for="bankinput" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    เลือกธนาคาร
                </label>
                <select id="bankinput" v-model="bank" @change="changeTextAccount"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option disabled>-- เลือกธนาคาร --</option>
                    <option v-for="({ bank_name, back_account }, index) in banks" :value="back_account" :key="index">
                        {{ bank_name }}
                    </option>
                </select>

                <div id="divAccount" class="hidden">
                    <p class="text-lg my-3 inline-flex mr-2">หมายเลขบัญชี: <span id="showTextBank">---</span></p>
                    <button type="button" id="btnCopy" @click="copyAccount"
                        class="inline-flex px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Copy
                    </button>
                </div>

                <form @submit.prevent="updateOrder()">
                    <label class="block my-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">
                        อัปโหลดสลีป
                    </label>
                    <input
                        class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                        id="file_input" type="file" required>

                    <div class="mt-3 w-full">
                        <button id="updateSlip" type="submit"
                            class="w-full focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                            อัปโหลดสลีป
                        </button>
                    </div>
                </form>

            </div>
        </div>

    </div>
</template>

<script lang="ts">
import axiosClient from '@/utils/axios'
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { getClassOrderStatus, getTextOrderStatus } from '../function'

export default defineComponent({
    setup() {
        return {
            useRoute,
            getClassOrderStatus,
            getTextOrderStatus
        }
    },
    data() {
        return {
            order: {
                address: '',
                order_id: 0,
                total: 0,
                delivery_price: 0,
                tracking_number: '',
                order_status: 0,
                users_commu_id: 0,
            },
            orderDetails: [{
                "id": 64,
                "order_id": 77,
                "product_id": 14,
                "quantity": 2,
                "price": 260,
                "name": '',
                "image_1": '',
            }],
            totalOrder: {} as any,
            banks: [{
                "bank_id": 7,
                "commu_id": 24,
                "bank_name": "ธนาคารกรุงไทย",
                "back_account": "9013585906",
                "account_name": "รดิศ ลำสุณีกาญ 123"
            }],
            bank: '-- เลือกธนาคาร --'
        }
    },
    methods: {
        async getOrderById() {
            this.orderDetails.pop()
            const orderByParamsId = await axiosClient.get('/orders/' + this.$route.params.id)
            const orderDetailsByParamsId = await axiosClient.get('/orders/detail/' + this.$route.params.id)

            const dataOrder = orderByParamsId.data
            const dataOrderDetails = orderDetailsByParamsId.data

            await Promise.all(
                dataOrderDetails.map(async (order: any) => {
                    const product = await axiosClient.get('/products/' + order.product_id)
                    order['image_1'] = product.data.image_1
                    order['name'] = product.data.name
                })
            )

            this.order = dataOrder
            this.orderDetails = dataOrderDetails

            this.totalOrder = {
                order: dataOrder,
                orderDetails: dataOrderDetails
            }
        },
        async cancelOrder(order_id: any) {
            if (confirm('คุณต้องการยกเลิกคำสั่งซื้อ ?')) {
                // let order_details = await axiosClient.get('/orders/detail/' + order_id)
                // await order_details.data.forEach(async (order_detail: any) => {
                //     let getProduct = await axiosClient.get('/products/' + order_detail.product_id)
                //     let updateQty = await axiosClient.put('/products/qty/' + getProduct.data.product_id, {
                //         quantity: order_detail.quantity + getProduct.data.quantity
                //     })
                // })
                await axiosClient.put('/orders/' + order_id, {
                    order_status: 4
                })
                setTimeout(() => {
                    this.$router.go(0)
                }, 1000)
            }
        },
        async getBankByCommuId() {
            this.banks.pop()
            const banksByCommuId = await axiosClient.get('/payment/commu/' + this.order.users_commu_id)
            const dataBanks = banksByCommuId.data
            this.banks = dataBanks
        },
        changeTextAccount() {
            const inputSelect = document.getElementById('bankinput') as HTMLSelectElement
            const pShowText = document.getElementById('showTextBank') as HTMLElement
            pShowText.textContent = inputSelect.value

            const divAccount = document.getElementById('divAccount') as HTMLElement
            divAccount.classList.remove('hidden')
            divAccount.classList.add('block')

            const btnCopy = document.getElementById('btnCopy') as HTMLButtonElement
            btnCopy.textContent = 'Copy'

        },
        copyAccount() {
            const btnCopy = document.getElementById('btnCopy') as HTMLButtonElement
            btnCopy.textContent = 'coppied'

            const inputSelect = document.getElementById('bankinput') as HTMLSelectElement
            navigator.clipboard.writeText(inputSelect.value)
        },
        async updateOrder() {
            console.log('tst')
            let count = 0
            if (count == 0) {
                console.log(0)
                const detailsOrder = await axiosClient.get('/orders/detail/' + this.$route.params.id)
                const dataDetails = detailsOrder.data
                dataDetails.forEach(async (detail: any) => {
                    const getProduct = await axiosClient.get('/products/' + detail.product_id)
                    const qtyProduct = await getProduct.data.quantity
                    if (detail.quantity > qtyProduct) {
                        alert('มีผลิตภัณฑ์ไม่เพียงพอ ระบบจะยกเลิกคำสั่งซื้ออัตโนมัติ')
                        await axiosClient.put('/orders/' + this.$route.params.id, {
                            order_status: 4,
                        })
                        return this.$router.go(0)
                    } else {
                        const slipInput = document.getElementById('file_input') as HTMLInputElement
                        const fileSize = Number(slipInput.files?.length)
                        if (!fileSize) return alert('กรุณาอัปโหลดสลีป')

                        const file = slipInput.files ? slipInput.files[0] : null
                        const formData = new FormData()
                        formData.append('file', file as Blob)
                        formData.append('order_id', this.$route.params.id as any)
                        const uploadSlip = await axiosClient.post('/slippayment', formData)
                        const dataSlip = await uploadSlip.data
                        const slipId = await dataSlip.insertId
                        const order_status = 1
                        const payment_id = await slipId
                        await axiosClient.put('/orders/' + this.$route.params.id, {
                            order_status: order_status,
                            payment_id: payment_id
                        })
                        this.$router.go(0)
                    }
                })
            }
        }
    },
    async mounted() {
        await this.getOrderById()
        await this.getBankByCommuId()
    }
})
</script>
