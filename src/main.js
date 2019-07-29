import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import {router} from './router'

// require styles
import 'swiper/dist/css/swiper.css'
import App from "./App";

Vue.use(VueAwesomeSwiper, /* { default global options } */)

/* eslint-disable no-new */
new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
