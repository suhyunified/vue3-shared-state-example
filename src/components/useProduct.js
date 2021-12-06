import { computed, reactive } from "@vue/reactivity"
const state = reactive({
  product: {
    description: {
      name: '',
      summary: '',
    },
    sales: {
      price: 0,
      isOnSale: false
    }
  },

  isModified: {
    description: false,
    sales: false
  }
})

const getDescriptionApi = async () => {
  return Promise.resolve({
    name: 'Awesome Product',
    summary: 'It is a must-have item form 2021',
  })
}

const getSalesApi = async() => {
  return Promise.resolve({
    price: 20000,
    isOnSale: true
  })
}

export const useProduct = () => {
  /**
   * @param {'description' | 'sales'} section 
   */
  const setProduct = (section, form) => {

    Object.keys(form).forEach(key => {
      state.product[section][key] = form[key]
    })
  }

  const loadProduct = async () => {
    const description = await getDescriptionApi()
    setProduct('description', description)
    
    const sales = await getSalesApi()
    setProduct('sales', sales)
  }

  /**
   * @param {'description' | 'sales'} section 
   */
  const setModificationStatus = (section, status) => {
    state.isModified[section] = status
  }

  return {
    loadProduct,

    product: computed(() => state.product),
    description: computed(() => state.product.description),
    sales: computed(() => state.product.sales),
    setProduct,

    isModified: computed(() => state.isModified),
    setModificationStatus,
  }
}