import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Vue from 'vue'
import '@/assets/bootstrap.min.css'
import '@/assets/style.css'
// import CKEditor from 'ckeditor4-vue';


import BootstrapVue3 from 'bootstrap-vue-3'
// import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'




axios.defaults.baseURL = 'https://patoski716.pythonanywhere.com'

createApp(App).use(BootstrapVue3).use(store).use(router, axios).mount('#app')
// Vue.use(BootstrapVue)