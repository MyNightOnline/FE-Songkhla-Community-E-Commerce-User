<template>
    <div class="mt-10">

        <TablePurchase :orders="orders" :noData="noData" />

    </div>
</template>

<script lang="ts">
import axiosClient from '@/utils/axios'
import { defineComponent } from 'vue'
import { useAuthStore } from '@/stores/auth'
import TablePurchase from './Table.vue'

export default defineComponent({
    components: {
        TablePurchase
    },
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
        async fetchOrders() {
            try {
                this.orders.pop()
                const response = await axiosClient.get('/orders')
                const sortedData = response.data.sort((a: any, b: any) => b.order_id - a.order_id)
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
                this.orders = await orders.filter((el: any) => el.orderStatus == 3)
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
