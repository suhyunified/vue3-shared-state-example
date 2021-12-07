<template>
  <div class="setting-group">
    <h2 class="title">Product Description Settings</h2>
    <div class="setting">
      <label for="name">name</label> 
      <div class="input-box">
        <input 
          id="name"
          type="text" 
          v-model="form.name"
          autocomplete="off"
        />
      </div>
    </div>
    <div class="setting">
      <label for="summary">
        summary
      </label>
      <div class="input-box">
        <input 
          id="summary"
          type="text" 
          autocomplete="off"
          v-model="form.summary"
        />
      </div>
    </div>
    <div class="button-wrapper">
      <button
        :disabled="!isModified.description"
        class="save-button"
        @click="save"
      >
        save
      </button>
    </div>
  </div>
  
</template>

<script setup>
import { watch } from '@vue/runtime-core'
import { useProduct } from './useProduct'
import { useProductSetting } from './useProductSetting'
const {
  description, 
  setProduct,
  isModified,
  setModificationStatus 
} = useProduct()

const {
  description: form,
  setForm
} = useProductSetting()

const section = 'description'

watch(description.value, () => {
  setForm(section, description.value)
  
  const stopWatch = watch(form, () => {
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