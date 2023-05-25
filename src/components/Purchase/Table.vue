<template>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div v-if="noData"
            class="p-4 text-lg font-bold text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
            {{ noData }}
        </div>
        <table v-for="({ orderId, products, orderStatus }, index) in orders" :key="index" @click="toOrder(orderId)"
            class="cursor-pointer mb-10 w-full text-base text-left text-gray-500 dark:text-gray-400">
            <thead class="text-base text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        <span>#{{ orderId }}</span>
                    </th>
                    <th style="width: 600px;" scope="col" class="px-6 py-3">
                        ชื่อผลิตภัณฑ์
                    </th>
                    <th style="width: 300px;" scope="col" class="px-6 py-3">
                        ราคารวม
                    </th>
                    <th scope="col" class="px-6 py-3">
                        สถานะ
                        <span :class="getClassOrderStatus(orderStatus)">
                            {{ getTextOrderStatus(orderStatus) }}
                        </span>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="({ image_1, name, price }, index) in products" :key="index"
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
                    <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">

                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { getClassOrderStatus, getTextOrderStatus } from './function'

export default defineComponent({
    props: [
        "orders",
        "noData"
    ],
    setup() {
        return {
            getClassOrderStatus,
            getTextOrderStatus
        }
    },
    methods: {
        toOrder(orderId: number) {
            this.$router.push('/purchase/order/' + orderId)
        },
    }
})
</script>
