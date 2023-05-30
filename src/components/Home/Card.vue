<template>
    <div @click="toShop(communityData.product_id)"
        class="cursor-pointer bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <!-- <div class="flex justify-items-center max-h-52">
            <img class="rounded-t-lg object-center w-full" :src="communityData.product_image" alt="" />
        </div> -->
        <a @click="toShop(communityData.product_id)" class="flex rounded-t-lg justify-center"
            :style="`background-image: ${communityData.product_image};`">
            <img class="rounded-t-lg h-[250px] w-[370px] sm:w-full" :src="communityData.product_image"
                alt="product image" />
        </a>
        <div class="p-5 sm:h-60 grid content-between">
            <div>
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
            </div>
            <div class="flex items-center justify-between">
                <Rating :get-star="communityData.otop" />
                <h1>฿{{ communityData.price }}</h1>
            </div>
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
            this.$router.push(`/product/${id}`)
        },
    }
})
</script>

<script setup>
import Rating from '@/components/Home/Rating.vue'
</script>