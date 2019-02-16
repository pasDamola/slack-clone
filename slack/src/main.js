import Vue from 'vue'
import VueFire from 'vuefire'
import Firebase from 'firebase'
import App from './App.vue'

Vue.use(VueFire);


new Vue({
  el: '#app',
  render: h => h(App),
})


