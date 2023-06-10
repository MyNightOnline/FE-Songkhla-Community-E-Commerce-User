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
            orders: [] as any,
            noData: ''
        }
    },
    methods: {
        async fetchOrders() {
            try {
                const userId = useAuthStore().user.data.users_id
                const response = await axiosClient.get(`/orders/user/${userId}`)
                const sortedData = response.data.sort((a: any, b: any) => b.order_id - a.order_id)
                const orders = response.data.map(async (order: any) => {
                    const detailResponse = await axiosClient.get(`/orders/detail/${order.order_id}`)
                    const products = await Promise.all(
                        detailResponse.data.map(async (item: any) => {
                            const productResponse = await axiosClient.get(`/products/${item.product_id}`)
                            const product = productResponse.data
                            return {
                                id: item.id,
                                order_id: item.order_id,
                                product_id: item.product_id,
                                quantity: item.quantity,
                                price: item.price,
                                image_1: product.image_1,
                                name: product.name
                            }
                        })
                    )
                    return {
                        orderId: order.order_id,
                        orderStatus: order.order_status,
                        users_id: order.users_id,
                        products
                    }
                })
                this.orders = await Promise.all(orders)
                if (this.orders.length === 0) {
                    this.noData = 'ไม่มีข้อมูล'
                }
            } catch (error) {
                console.error(error)
            }
        }
    },
    async mounted() {
        await this.fetchOrders()
    }
})
</script>
  