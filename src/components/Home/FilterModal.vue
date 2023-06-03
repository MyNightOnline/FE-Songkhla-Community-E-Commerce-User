<script setup>
import Rating from '../Flowbite/Rating.vue'

</script>
<script>
import { defineComponent } from "vue"

export default defineComponent({
    props: [
        "ampAll",
        "categoryData",
        "filterData",
        "filterDataSearch",
    ],
    data: () => ({

    }),
    mounted() {
    },
    methods: {
        resetData() {
            document.getElementById('amp').value = ""
            document.getElementById('category').value = ""
            document.getElementById("bordered-radio-0").checked = true
        },
    }
})
</script>
<template>
    <!-- Modal toggle -->
    <button data-modal-target="defaultModal" data-modal-toggle="defaultModal"
        class="mt-6 ml-3 text-blue-700 border px-4 border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
        type="button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
            <path
                d="M18.75 12.75h1.5a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5zM12 6a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 6zM12 18a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 18zM3.75 6.75h1.5a.75.75 0 100-1.5h-1.5a.75.75 0 000 1.5zM5.25 18.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zM3 12a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 013 12zM9 3.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM12.75 12a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM9 15.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
        </svg>

    </button>

    <!-- Main modal -->
    <div id="defaultModal" tabindex="-1" aria-hidden="true"
        class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
        <div class="relative w-full h-full max-w-2xl md:h-auto">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <!-- Modal header -->
                <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                        ตัวกรอง
                    </h3>
                    <button type="button"
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="defaultModal">
                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                <!-- Modal body -->
                <div class="p-6 space-y-6">
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                            <input checked id="bordered-radio-0" @change="resetData" type="radio" value=""
                                name="bordered-radio"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="bordered-radio-0"
                                class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                ทั้งหมด
                            </label>
                        </div>
                        <div class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                            <input id="bordered-radio-6" type="radio" value="" name="bordered-radio"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="bordered-radio-6"
                                class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                ทั่วไป
                            </label>
                        </div>
                        <div class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                            <input id="bordered-radio-1" type="radio" value="" name="bordered-radio"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="bordered-radio-1"
                                class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                <Rating :getStar="1" />
                            </label>
                        </div>
                        <div class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                            <input id="bordered-radio-2" type="radio" value="" name="bordered-radio"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="bordered-radio-2"
                                class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                <Rating :getStar="2" />
                            </label>
                        </div>
                        <div class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                            <input id="bordered-radio-3" type="radio" value="" name="bordered-radio"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="bordered-radio-3"
                                class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                <Rating :getStar="3" />
                            </label>
                        </div>
                        <div class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                            <input id="bordered-radio-4" type="radio" value="" name="bordered-radio"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="bordered-radio-4"
                                class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                <Rating :getStar="4" />
                            </label>
                        </div>
                        <div class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                            <input id="bordered-radio-5" type="radio" value="" name="bordered-radio"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="bordered-radio-5"
                                class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                <Rating :getStar="5" />
                            </label>
                        </div>
                    </div>

                    <div class="border-t-2 py-4">
                        <div class="grid grid-cols-2 gap-2">
                            <div class="flex">
                                <select id="amp"
                                    class="bg-gray-50 overflow-auto border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value="" selected>--- เลือกอำเภอ ---</option>
                                    <option v-for="(item, index) in ampAll" :key="index" :value="item.name_th">
                                        {{ item.name_th }}
                                    </option>
                                </select>
                            </div>
                            <div class="flex">
                                <select id="category"
                                    class="bg-gray-50 overflow-y-auto border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option class="" value="" selected>--- เลือกประเภท ---</option>
                                    <option class="" v-for="(item, index) in categoryData" :key="index" :value="item.name">
                                        {{ item.name }}
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>

                </div>
                <!-- Modal footer -->
                <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button data-modal-hide="defaultModal" type="button" @click="filterData"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        ตกลง
                    </button>
                    <button type="button" @click="resetData"
                        class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:focus:ring-yellow-900">
                        รีเซ็ท
                    </button>
                    <button data-modal-hide="defaultModal" type="button"
                        class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                        ปิด
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.bg-gray-900 {
    --tw-bg-opacity: 0.3
}
</style>