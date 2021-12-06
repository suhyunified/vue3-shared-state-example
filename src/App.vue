<script setup>
import { useProduct } from './components/useProduct';
import Product from './components/Product.vue'
import ProductSetting from './components/ProductSetting.vue';

const { loadProduct } = useProduct()

loadProduct()
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <product />
      <hr />
      <product-setting></product-setting>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
  min-width: 1000px;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1400px;
}

hr {
  width: 100%;
  border: none;
  height: 1px;
  background: lightgray;
  margin: 20px 0;
}

</style>
