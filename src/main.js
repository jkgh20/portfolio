import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: '/home', component: Home, alias: '/'},
  { path: '/about', component: About},
  { path: '/projects', component: Projects},
  { path: '/contact', component: Contact}
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
