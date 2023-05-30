<script setup>
import { useShoppingStore } from '@/stores/shopping'
import axiosClient from '@/utils/axios'

const shoppingStore = useShoppingStore()

const totalPrice = (item) => {
    let total = 0
    item.map(item => {
        total = total + item.price
    })
    return total
}

const totalDeliveryFee = (item) => {
    let total = 0
    item.map(item => {
        total = total + item.delivery_fee
    })
    return total
}

const totalAll = (item) => {
    let total = 0
    item.map(item => {
        total = total + item.price
        total = total + item.delivery_fee
    })
    return total
}

let orderDetails = {
    full_name: '',
    address: '',
    mobile: '',
    details: '',

    order_status: 0,
    users_id: 0,
    date: undefined,
    total_price: 0,
    delivery_price: 0,
    total: 0,
}

const postOrder = async () => {
    if ([
        orderDetails.full_name,
        orderDetails.address,
        orderDetails.mobile,
        orderDetails.details,
    ].some(el => el == '')) {
        return alert('โปรดกรอกข้อมูลให้ครบถ้วน')
    }

    const postOrder = await axiosClient.post('/orders', {
        "full_name": orderDetails.full_name,
        "mobile": orderDetails.mobile,
        "address": orderDetails.address,
        "details": orderDetails.details,
        "date": new Date().toLocaleString("th-TH", { timeZone: "Asia/Bangkok" }),
        "order_status": 0,
        "total_price": totalPrice(shoppingStore.cartItems),
        "delivery_price": totalDeliveryFee(shoppingStore.cartItems),
        "total": totalAll(shoppingStore.cartItems),
        "users_id": 3
    })

    shoppingStore.cartItems.map(async el => {
        const result = await axiosClient.get('/products/' + el.id)
        if (el.quantity > result.data.quantity) return console.log('error')

        const disCount = result.data.quantity - el.quantity

        await axiosClient.post('/orders/detail', {
            order_id: postOrder.data.insertId,
            product_id: el.id,
            quantity: el.quantity,
            price: el.price
        })
        await axiosClient.put('/products/qty/' + el.id, {
            quantity: disCount
        })
    })


}
</script >
<template>
    <div class="container mx-auto mt-12">
        <div class="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="bg-red-100 p-4 rounded h-96 overflow-auto">
                    <!-- <h1>รายการ</h1> -->
                    <table class="w-full text-left">
                        <thead>
                            <tr class="text-lg">
                                <th>รายการ</th>
                                <th>จำนวน</th>
                                <th>ราคารวม</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in shoppingStore.cartItems" :key="index">
                                <td>{{ index + 1 + '. ' + item.name }}</td>
                                <td>{{ item.quantity }}</td>
                                <td>฿ {{ item.price }}</td>
                            </tr>
                        </tbody>
                        <tfoot class="pt-10">
                            <tr class="font-semibold text-gray-900 dark:text-white">
                                <th class="">รวมการสั่งซื้อ</th>
                                <th class=""></th>
                                <th class="">฿ {{ totalPrice(shoppingStore.cartItems) }}</th>
                            </tr>
                            <tr class="font-semibold text-gray-900 dark:text-white">
                                <th class="">ราคาจัดส่งรวม</th>
                                <th class=""></th>
                                <th class="">฿ {{ totalDeliveryFee(shoppingStore.cartItems) }}</th>
                            </tr>
                            <tr class="font-semibold text-gray-900 dark:text-white">
                                <th class="">ยอดรวม</th>
                                <th class=""></th>
                                <th class="">฿ {{ totalAll(shoppingStore.cartItems) }}</th>
                            </tr>
                        </tfoot>
                    </table>

                </div>
                <div class="bg-red-100 p-4 rounded h-96 overflow-auto">
                    <h1 class="mb-4 text-2xl">รายละเอียดการจัดส่ง</h1>
                    <form>
                        <div class="relative z-0 w-full mb-6 group">
                            <input v-model="orderDetails.full_name" type="text" name="repeat_full_name"
                                id="floating_repeat_full_name"
                                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" " />
                            <label for="floating_repeat_full_name"
                                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                ชื่อ-สกุล</label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group">
                            <input v-model="orderDetails.address" type="text" name="floating_address" id="floating_address"
                                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" " />
                            <label for="floating_address"
                                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                ที่อยู่</label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group">
                            <input v-model="orderDetails.mobile" type="tel" name="floating_phone" id="floating_phone"
                                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" " />
                            <label for="floating_phone"
                                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                เบอร์โทรศัพท์</label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group">
                            <input v-model="orderDetails.details" type="text" name="floating_details" id="floating_details"
                                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" " />
                            <label for="floating_details"
                                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                รายละเอียด (ถึงผู้ส่ง)</label>
                        </div>

                    </form>

                </div>
            </div>
            <div class="mt-5 grid grid-cols-2 gap-4">
                <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">
                        อัพโหลดสลิป</label>
                    <input
                        class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                        aria-describedby="file_input_help" id="file_input" type="file">
                </div>
                <div>
                    <div class="flex justify-end">
                        <button type="submit" @click="postOrder"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            สั่งซื้อ</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
