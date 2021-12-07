const api = {
  getDescriptionApi: async () => {
    return Promise.resolve({
      name: 'Awesome Product',
      summary: 'It is a must-have item form 2021',
    })
  },

  getSalesApi: async () => {
    return Promise.resolve({
      price: 20000,
      isOnSale: true
    })
  }
}

export default api