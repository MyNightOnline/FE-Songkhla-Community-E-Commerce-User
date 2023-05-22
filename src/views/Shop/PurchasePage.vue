<template>
    <div class="container mx-auto">

        <div
            class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <ul class="flex flex-wrap -mb-px">
                <li class="mr-2" v-for="({ title, part }, index) in tabMenu" :key="index">
                    <a :href="part" :class="addClassMenu(part)">
                        {{ title }}
                    </a>
                </li>
            </ul>
        </div>

        <router-view></router-view>

    </div>
</template>

<script lang="ts">
import { useRouter, useRoute } from 'vue-router'
import { defineComponent } from 'vue'
import { useAuthStore } from '@/stores/auth'

export default defineComponent({
    setup() {
        const tabMenu = [
            { title: 'ทั้งหมด', part: '/purchase/all' },
            { title: 'ยังไม่ได้ชำระ', part: '/purchase/unpaid' },
            { title: 'สำเร็จ', part: '/purchase/succeed' },
            { title: 'ยกเลิก', part: '/purchase/cancel' },
        ]

        return {
            tabMenu,
            useRoute
        }
    },
    methods: {
        addClassMenu(part: any) {
            if (useRoute().path == part) return 'inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500'
            else return 'inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
        }
    },
    mounted() {
        if (!useAuthStore().user) this.$router.push('/login')
    }
})
</script>
