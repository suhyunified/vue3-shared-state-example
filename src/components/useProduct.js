import { computed, reactive } from "@vue/reactivity"
import api from '../api'

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
    const description = await api.getDescriptionApi()
    setProduct('description', description)
    
    const sales = await api.getSalesApi()
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