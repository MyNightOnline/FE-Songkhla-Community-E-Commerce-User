<script setup>

const props = defineProps({
    year: { type: String }
})
props.year

function test(v) {
    alert(v)
}
</script>

<template>
    <div @click="test(year)"
        class="cursor-pointer w-4/5 sm:w-full sm:max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img class="rounded-t-lg" src="@/assets/images/product_1.jpg" alt="" />
        <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                รองเท้า {{ year }}
            </h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                สินค้า ctrl + c เกรด Z
            </p>
        </div>
    </div>
</template>