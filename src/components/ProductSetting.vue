<template>
  <div class="setting-header">
    <h1>Setting</h1>
    <div class="button-wrapper">
      <button 
        :disabled="!isAnythingChaned"
        class="save-button"
        @click="saveAll"
      >
        save All
      </button>
    </div>
  </div>
  <div class="setting-wrapper">
    
    <product-detail-setting></product-detail-setting>
    <product-sale-setting></product-sale-setting>
  </div>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { useProduct } from './useProduct';
import { useProductSetting } from './useProductSetting';
import ProductDetailSetting from './ProductDetailSetting.vue';
import ProductSaleSetting from './ProductSaleSetting.vue';

const { isModified } = useProduct()
const { saveAll } = useProductSetting()

const isAnythingChaned = computed(() => isModified.value.description || isModified.value.sales)
</script>

<style scoped>
  .setting-wrapper {
    display: flex;
    width: 100%;
  }

  .setting-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
  }

  .button-wrapper {
  display: flex;
  width: 80%;
  justify-content: flex-end;
}

.save-button {
  width: 200px;
  height: 48px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  color: mediumpurple;

  border: 2px solid mediumpurple;
  border-radius: 6px;
  background: none;

  transition-duration: 0.3s;
}

.save-button:hover {
  color: white;
  background-color:mediumpurple;
}

.save-button[disabled], .save-button[disabled]:hover {
  cursor: default;
  color: lightgray;
  border-color: lightgray;
  background-color: white;
}
</style>