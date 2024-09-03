import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'

export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        nytimes: ['nytimes', 'sans-serif']
      }
    }
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2
    })
  ],
  rules: [],
  shortcuts: []
})
