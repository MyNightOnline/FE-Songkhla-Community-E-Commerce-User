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
  },
  methods: {
    async getData() {
      this.ampAll = getAmphure()
      this.categoryAll = await axiosClient.get("/category").data
      
      let { data } = await axiosClient.get('/products')
      data.filter(async (product) => {
        return this.defaultData.push({
          product_name: product.name,
          product_image: product.product_image,
          otop: product.otop,
          users_commu_id: product.users_commu_id,
          category_id: product.category_id,
          amp: community.amp
        })
      })
      this.showData = this.defaultData
      console.log(this.defaultData)
      // const { data } = await axiosClient.get(`/commu`)
      // this.defaultData = data

      // const productsData = await axiosClient.get('/products')
      // const categoryData = await axiosClient.get('/category')

      // this.defaultData.filter(el => {
      //   el = { ...el, items: [] }
      //   productsData.data.filter(el2 => {
      //     if ((el.users_commu_id === el2.users_commu_id)) {
      //       categoryData.data.filter(el3 => {
      //         if (el2.category_id === el3.category_id) {
      //           el.items.push({
      //             name: el2.name,
      //             otop: el2.otop,
      //             category: el3.name
      //           })
      //         }
      //       })

      //       this.showData.push(el)
      //     }
      //   })
      // })
      // this.showData = [...new Set(this.showData)]
      // this.defaultData = this.showData
    },
    filterData() {
      const val_input = document.querySelector('#search').value
      let newDataIn = this.defaultData.filter((el) => {
        if (
          el.product_name.includes(val_input) ||
          el.amp.includes(val_input) ||
          el.items[0].category.includes(val_input)) {
          return el
        }
      })
      this.showData = newDataIn
    },
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