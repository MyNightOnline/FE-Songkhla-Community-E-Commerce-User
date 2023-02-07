<template>
    <div
        class="cursor-pointer w-4/5 sm:w-full sm:max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img class="rounded-t-lg" src="@/assets/images/product_1.jpg" alt="" />
        <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {{ communityData.name }}
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
                อำเภอ: {{ communityData.amp }}
            </p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                ประเภทกิจการ: เครื่องจักสาน
            </p>
            <Rating />
        </div>
    </div>
</template>

<script>
import { defineComponent } from "vue"

export default defineComponent({
    props: [
        "communityData"
    ],
    data: () => ({
    }),
    mounted() {
    },
    methods: {
    }
})
</script>

<script setup>
import Rating from '@/components/Home/Rating.vue'
</script>