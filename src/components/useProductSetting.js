import { reactive } from "@vue/reactivity";
import { useProduct } from './useProduct'

// const form = reactive({
//   description: {
//     name: '',
//     summary: ''
//   },

//   sales: {
//     isOnSale: false,
//     price: 0,
//   }
// })

// const form = reactive({
//   description: reactive({
//     name: '',
//     summary: ''
//   }),

//   sales: reactive({
//     isOnSale: false,
//     price: 0,
//   })
// })

const description = reactive({
  name: '',
  summary: ''
})

const sales = reactive({
  isOnSale: false,
  price: 0,
})

export const useProductSetting = () => {
  const { 
    setProduct,
    setModificationStatus
  } = useProduct()
  /**
   * @param {'description' | 'sales'} section
   */
  const setForm = (section, data) => {
    Object.keys(data).forEach(key => {
      section === 'description'
      ? description[key] = data[key]
      : sales[key] = data[key] 
    })
  }

  const saveAll = () => {
    setProduct('description', description)
    setProduct('sales', sales)

    setModificationStatus('description', false)
    setModificationStatus('sales', false)
  }

  return {
    description,
    sales,
    
    setForm,
    saveAll
  }
}