// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import VueMaterials from 'vue-materials'
import '@/static/sass/rest.sass'
import '@/static/css/materialize.css'
import '@/static/css/icon.css'


Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(VueMaterials)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
