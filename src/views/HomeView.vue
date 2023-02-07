<script setup>
import { onMounted } from 'vue'
import {
  initAccordions,
  initCarousels,
  initCollapses,
  initDials,
  initDismisses,
  initDrawers,
  initDropdowns,
  initModals,
  initPopovers,
  initTabs,
  initTooltips
} from 'flowbite'
import Card from '@/components/Home/Card.vue'
import Carousel from '@/components/Home/Carousel.vue'
import FilterModal from '@/components/Home/FilterModal.vue'
import FromSearch from '@/components/Home/FromSearch.vue'

import { getAmphure } from '@/assets/functions/fetchAreaSongkhla.ts'

// initialize components based on data attribute selectors
onMounted(() => {
  initAccordions()
  initCarousels()
  initCollapses()
  initDials()
  initDismisses()
  initDrawers()
  initDropdowns()
  initModals()
  initPopovers()
  initTabs()
  initTooltips()
})
</script>

<script>
import { defineComponent } from "vue"
import axiosClient from "@/utils/axios"

export default defineComponent({
  data: () => ({
    defaultData: [],
    showData: [],
    ampAll: [],
    categoryAll: [],
  }),
  mounted() {
    this.getData()
    this.fetchData()
  },
  methods: {
    async getData() {
      const { data } = await axiosClient.get(`/commu`)
      this.defaultData = data
      this.showData = data
    },
    filterData() {
      const val_input = document.querySelector('#search').value
      let newData = this.defaultData.filter((el) => {
        if (el.name.includes(val_input) || el.amp.includes(val_input)) {
          return el
        }
      })
      this.showData = newData
    },
    async fetchData() {
      this.ampAll = getAmphure()
      const { data } = await axiosClient.get("/category")
      this.categoryAll = data
    }
  }
})
</script>

<template>

  <div class="container mx-auto">

    <!-- <Carousel /> -->

    <div class="flex justify-end">

      <FromSearch :filterData="filterData" />
      <FilterModal :ampAll="ampAll" :categoryData="categoryAll" />

    </div>

    <div class="my-6 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 justify-items-center">
      <Card v-for="(item, index) in showData" :key="index" :communityData="item" />
    </div>

  </div>

</template>