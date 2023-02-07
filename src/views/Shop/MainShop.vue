<script setup>
import ProfileShop from '@/components/Shop/ProfileShop.vue'
import ProductShop from '@/components/Shop/ProductShop.vue'
</script>
<template>

    <ProfileShop />
    <div class="container mx-auto">
        <div class="my-6 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 justify-items-center">
            <ProductShop />
            <ProductShop />
            <ProductShop />
            <ProductShop />
            <ProductShop />
            <ProductShop />
            <ProductShop />
            <ProductShop />
            <ProductShop />
            <ProductShop />
            <ProductShop />
        </div>
    </div>

</template>
