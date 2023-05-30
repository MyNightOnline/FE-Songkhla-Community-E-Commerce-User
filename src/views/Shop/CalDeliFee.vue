<template>
    <div class="container mx-auto mt-10">

        <h1 class="text-3xl mb-6">อัตราค่าจัดส่งต่อ 1 การสั่งซื้อ</h1>

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-2xl text-left text-gray-500 dark:text-gray-400">
                <thead class="text-2xl text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            น้ำหนักสินค้า (กิโลกรัม)
                        </th>
                        <th scope="col" class="px-6 py-3">
                            อัตราค่าบริการจัดส่ง (บาท)
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="({ gram, price }, index) in delivery" :key="index"
                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{ gram }}
                        </th>
                        <td class="px-6 py-4">
                            {{ price }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {

    },
    data() {
        return {
            delivery: [
                { gram: '0.00 - 1.00', price: 45 },
                { gram: '1.01 - 2.00', price: 64 },
                { gram: '2.01 - 3.00', price: 79 },
                { gram: '3.01 - 5.00', price: 104 },
                { gram: '5.01 - 10.00', price: 134 },
                { gram: '10.01 - 15.00', price: 170 },
                { gram: '15.01 - 20.00', price: 230 },
            ]
        }
    }
})
</script>
