<template>
    <div @click="toShop(communityData.users_commu_id)"
        class="cursor-pointer w-4/5 sm:w-full sm:max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img class="rounded-t-lg object-center w-full h-48" :src="communityData.product_image" alt="" />
        <div class="p-5">
            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {{ communityData.product_name }}
            </h5>
            <p class="font-normal text-gray-600 dark:text-gray-400">
                <span class="font-semibold">วิสาหกิจชุมชน</span>: {{ communityData.community_name }}
            </p>
            <p class="font-normal text-gray-600 dark:text-gray-400">
                <span class="font-semibold">ประเภทกิจการ</span>: {{ communityData.category_name }}
            </p>
            <p class="mb-3 font-normal text-gray-600 dark:text-gray-400">
                <span class="font-semibold">อำเภอ</span>: {{ communityData.amp }}
            </p>
            <Rating :get-star="communityData.otop" />
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
        toShop(id) {
            this.$router.push(`/shop/${id}`)
        }
    }
})
</script>

<script setup>
import Rating from '@/components/Home/Rating.vue'
</script>