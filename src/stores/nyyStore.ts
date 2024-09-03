// store/nytStore.js
import axios from 'axios'
import { defineStore } from 'pinia'

const topics = [
  'technology',
  'science',
  'politics',
  'health',
  'sports',
  'business',
  'entertainment',
  'world'
]

const getRandomTopic = () => {
  const randomIndex = Math.floor(Math.random() * topics.length)
  return topics[randomIndex]
}

export const useNytStore = defineStore('nytStore', {
  state: () => ({
    articles: [],
    randomArticles: [],
    loading: false,
    loadingRandom: false,
    error: null,
    errorRandom: null
  }),
  actions: {
    async fetchArticles() {
      this.loading = true
      try {
        const response = await axios.get('https://api.nytimes.com/svc/topstories/v2/home.json', {
          params: {
            'api-key': 'ZhAMZ5pqJqG9MKvk0JQdDMdoyPZQJVSn'
          }
        })
        this.articles = response.data.results
      } catch (error: any) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
    async fetchArticlesByTopic() {
      this.loadingRandom = true
      try {
        const topic = getRandomTopic()
        const response = await axios.get('https://api.nytimes.com/svc/topstories/v2/health.json', {
          params: {
            'api-key': 'ZhAMZ5pqJqG9MKvk0JQdDMdoyPZQJVSn'
          }
        })
        this.randomArticles = response.data.response.docs
      } catch (err: any) {
        this.errorRandom = err
      } finally {
        this.loadingRandom = false
      }
    }
  }
})
