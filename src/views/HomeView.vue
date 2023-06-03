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

      let { data } = await axiosClient.get('/products')
      let community = await axiosClient.get('/commu')
      let category = await axiosClient.get("/category")
      this.categoryAll = category.data

      data.filter(async (product) => {
        community.data.map(commu => {
          if ((product.users_commu_id == commu.users_commu_id) && commu.confirm_status == 1 && (product.quantity > 0)) {
            category.data.map(type => {
              if (product.category_id == type.category_id) {
                return this.defaultData.push({
                  product_id: product.product_id,
                  product_name: product.name,
                  product_image: product.image_1,
                  otop: product.otop,
                  users_commu_id: product.users_commu_id,
                  category_id: product.category_id,
                  community_name: commu.name,
                  amp: commu.amp,
                  category_name: type.name,
                  price: product.price
                })
              }
            })
          }
        })
      })
      this.showData = this.defaultData
    },
    filterData() {

      const input_radio = document.getElementsByName('bordered-radio')
      let check_amp = document.getElementById('amp').value
      let check_category = document.getElementById('category').value

      let newDataIn

      if (input_radio[0].checked == true) {
        console.log('1 checked')
        newDataIn = this.defaultData.filter((el) => {
          if (check_amp == '' && check_category == '') return newDataIn = this.defaultData
          else if ((check_amp) && (check_category == '')) return el.amp == check_amp
          else if (check_category && (check_amp == '')) return el.category_name == check_category
          else if (check_category && check_amp) return el.category_name == check_category && el.amp == check_amp
        })
      } else {
        console.log('not 1 checked')
        let _index
        input_radio.forEach((item, index) => {
          if (item.checked == true) {
            if (index == 1) {
              index = 6
              newDataIn = this.defaultData.filter((el) => {
                return el.otop == 0
              })
            } else {
              index = index - 1
            }
            return _index = index
          }
        })
        console.log(_index)
        if (_index != 6) {
          newDataIn = this.defaultData.filter((el) => {
            if (check_amp == '' && check_category == '') return newDataIn = this.defaultData && el.otop == _index
            else if ((check_amp) && (check_category == '')) return el.amp == check_amp && el.otop == _index
            else if (check_category && (check_amp == '')) return el.category_name == check_category && el.otop == _index
            else if (check_category && check_amp) return el.category_name == check_category && el.amp == check_amp && el.otop == _index
          })
        }
      }
      this.showData = newDataIn
    },
    filterDataSearch() {
      const val_input = document.querySelector('#search').value
      let newDataIn = this.defaultData.filter((el) => {
        let checkedTxT =
          el.community_name.includes(val_input) ||
          el.product_name.includes(val_input) ||
          el.amp.includes(val_input) ||
          el.category_name.includes(val_input)
        if (checkedTxT) return el
      })
      this.showData = newDataIn
    }
  }
})
</script>

<template>
  <div class="container mx-auto">

    <Carousel />

    <div class="flex justify-end">

      <FromSearch :filterDataSearch="filterDataSearch" />
      <FilterModal :ampAll="ampAll" :categoryData="categoryAll" :filterData="filterData"
        :filterDataSearch="filterDataSearch" />

    </div>

    <div class="grid gap-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-items-center my-6">
      <Card v-for="(item, index) in showData" :key="index" :communityData="item" />
    </div>

  </div>
</template>