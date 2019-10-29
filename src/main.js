import Vue from 'vue'
import App from './App'
// import Less from 'Less'
import '../static/css/smart.css'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
