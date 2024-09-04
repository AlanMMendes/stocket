import axios from 'axios'
import { defineStore } from 'pinia'

export const useSearchStore = defineStore('search', {
  state: () => ({
    items: [],
    loading: false,
    error: null
  }),
  actions: {
    async fetchSearch(id) {
      this.loading = true
      try {
        const response = await axios.get(
          `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${id}`,
          {
            params: {
              'api-key': 'ZhAMZ5pqJqG9MKvk0JQdDMdoyPZQJVSn'
            }
          }
        )

        this.items = response.data
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    }
  }
})
