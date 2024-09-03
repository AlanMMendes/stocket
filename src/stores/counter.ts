import { defineStore } from 'pinia'

export const useTextStore = defineStore('crud', {
  state: () => ({
    text: ''
  }),
  actions: {
    setText(newText: any) {
      this.text = newText
    }
  }
})
