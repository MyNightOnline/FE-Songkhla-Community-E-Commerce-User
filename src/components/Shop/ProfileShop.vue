<script>
import { defineComponent } from "vue"

export default defineComponent({
    props: ["showData"],
    setup() {
    },
    methods: {
    }
})
</script>

<template>
    <div class="container mx-auto flex justify-center">
        <div
            class="w-4/5 px-10 max-w-2xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div class="flex flex-col items-center py-10">
                <!-- <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="./BuildingStorefront.svg" alt="Bonnie image" /> -->
                <svg class="w-20 h-20" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z">
                    </path>
                </svg>
                <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    {{ showData.name }}
                </h5>
                <span class="text-gray-500 dark:text-gray-400">
                    ที่อยู่ : {{ showData.address }}
                </span>
                <span class="text-gray-500 dark:text-gray-400">
                    รหัสทะเบียน : {{ showData.regis_code }}
                </span>
                <span class="text-gray-500 dark:text-gray-400">
                    โทรศัพท์ : {{ showData.mobile }}
                </span>
                <div class="flex mt-4 space-x-3 md:mt-6">
                    <a :href="`tel:${showData.mobile}`"
                        class="inline-flex items-center px-6 py-2 text-sm font-medium text-center text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 rounded-lg">
                        <font-awesome-icon icon="fa-solid fa-phone" class="mr-2" /> โทร
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>