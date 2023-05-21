<template>
    <div class="mt-10">

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div v-if="noData"
                class="p-4 text-lg font-bold text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                role="alert">
                {{ noData }}
            </div>
            <table v-for="({ orderId, products }, index) in orders" :key="index" @click="toOrder(orderId)"
                class="mb-10 w-full text-base text-left text-gray-500 dark:text-gray-400">
                <thead class="text-base text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            <span class="sr-only">Image</span>
                        </th>
                        <th scope="col" class="px-6 py-3">
                            ชื่อผลิตภัณฑ์
                        </th>
                        <th scope="col" class="px-6 py-3">
                            ราคารวม
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="({ image_1, price, name }, index) in products" :key="index"
                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td class="w-32 p-4">
                            <img :src="image_1" alt="Apple Watch">
                        </td>
                        <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                            {{ name }}
                        </td>
                        <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                            ฿{{ price }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>


    </div>
</template>

<script lang="ts">
import axiosClient from '@/utils/axios'
import { defineComponent } from 'vue'
import { useAuthStore } from '@/stores/auth'

export default defineComponent({
    data() {
        return {
            orders: [{
                orderId: 0,
                products: [
                    {
                        id: 0,
                        order_id: 0,
                        product_id: 0,
                        quantity: 0,
                        price: 0,
                        image_1: "",
                        name: "",
                    }
                ],
            }],
            noData: '',
        }
    },
    methods: {
        toOrder(orderId: number) {
            console.log(orderId)
        },
        async fetchOrders() {
            try {
                this.orders.pop()
                const response = await axiosClient.get('/orders')
                const orders = response.data.map((order: any) => {
                    if (order.users_id == useAuthStore().user.data.users_id) {
                        return ({
                            orderId: order.order_id,
                            orderStatus: order.order_status,
                            products: [],
                        })

                    }
                })
                await Promise.all(
                    orders.map(async (order: any) => {
                        const detailResponse = await axiosClient.get(`/orders/detail/${order.orderId}`)
                        order.products = await detailResponse.data

                        await Promise.all(
                            order.products.map(async (item: any) => {
                                const product = await axiosClient.get('/products/' + item.product_id)
                                const urlImg = await product.data.image_1
                                const name = await product.data.name
                                item['image_1'] = await urlImg
                                item['name'] = await name
                            })
                        )
                    })
                )
                console.log(orders)
                this.orders = await orders.filter((el: any) => el.orderStatus == 4)
                if (this.orders.length == 0) this.noData = 'ไม่มีข้อมูล'
            } catch (error) {
                console.error(error)
            }
        },
    },
    async mounted() {
        await this.fetchOrders()
    },
})
</script>
