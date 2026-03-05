import vueFilePond from 'vue-filepond'
import { setOptions } from 'filepond'
import 'filepond/dist/filepond.min.css'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.provide('filePond', vueFilePond)
  nuxtApp.provide('setOptions', setOptions)
})
