<template>
  <div class="setting-group">
    <h2 class="title"> Product Sales Settings </h2>
    <div class="setting">
      <label>
        sales status
      </label>
      <input 
        type="radio" 
        name="status" 
        id="on" 
        :value="true"
        v-model="form.isOnSale"
      />
      <label for="on" >ongoing</label>
  
      <input 
        type="radio" 
        name="status" 
        id="off"
        :value="false"
        v-model="form.isOnSale"
      />
      <label for="off">stop</label>

    </div>
    <div class="setting">
      <label for="price">
        price 
      </label>
      <div class="input-box">
        <input
          id="price" 
          type="number"
          v-model="form.price" 
        />
        <span class="postfix">₩</span>
      </div>
    </div>
    <div class="button-wrapper">
      <button
        :disabled="!isModified.sales"
        class="save-button"
        @click="save"
      > save </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from '@vue/reactivity';
import { watch } from '@vue/runtime-core'
import { useProduct } from './useProduct'
import { useProductSetting } from './useProductSetting'

const { 
  sales, 
  setProduct, 
  isModified, 
  setModificationStatus 
} = useProduct()

const {
  sales: form,
  setForm
} = useProductSetting()

const section = 'sales'

watch(sales.value, () => {
  setForm(section, sales.value)
  
  const stopWatch = watch(form,() => {
    setModificationStatus(section, true)
    stopWatch()
  })
})

const save = () => {
  setProduct(section, form)
  setModificationStatus(section, false)
}
</script>

<style scoped>
@import './styles.css';
</style>