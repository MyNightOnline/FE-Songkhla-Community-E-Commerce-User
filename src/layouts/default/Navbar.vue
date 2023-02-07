<script setup lang="ts">
import Brand from '@/components/Navbar/Brand.vue'
import Profile from '@/components/Navbar/Profile.vue'
import Menu from '@/components/Navbar/Menu.vue'
import { onMounted } from 'vue'
import {
    initCollapses,
    initDropdowns,
} from 'flowbite'
onMounted(() => {
    initCollapses()
    initDropdowns()
})
const user = null
</script>

<template>


    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
            <Brand />
            <Profile :user="user" />
            <Menu />
        </div>
    </nav>


</template>