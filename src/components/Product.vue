<template>
  <div class="product">
    <h2>{{product.description.name}}</h2>

    <div class="product-info">
      <span>summary</span> <b>{{product.description.summary}}</b>
    </div>
    <div class="product-info">
      <span>price</span> <b>{{price}}</b> ₩
    </div>
    <div class="product-info">
      <span>in on sale</span> <b>{{product.sales.isOnSale ? 'ongoing' : 'stop'}}</b>
    </div>
  </div>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { useProduct } from './useProduct.js'

const { product } = useProduct()
const price = computed(() => product.value.sales.price.toLocaleString())
</script>

<style scoped>
.product {
  width: 90%;
}

.product-info {
  display: flex;
  height: 48px;
}

.product-info > span{
  width: 150px;
  text-align: left;
}
</style>