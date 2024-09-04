import axios from 'axios'
import { defineStore } from 'pinia'

export const useSectionStore = defineStore('sections', {
  state: () => ({
    items: [],
    loading: false,
    error: null
  }),
  actions: {
    async fetchSection(id) {
      this.loading = true
      try {
        const response = await axios.get(`https://api.nytimes.com/svc/topstories/v2/${id}.json`, {
          params: {
            'api-key': 'ZhAMZ5pqJqG9MKvk0JQdDMdoyPZQJVSn'
          }
        })
        const filteredResponse = response.data.results.filter(
          (item: any) => item.section !== 'admin'
        )
        console.log(filteredResponse)
        this.items = filteredResponse
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    }
  }
})
