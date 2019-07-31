import Vue from 'vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import VueScrollReveal from 'vue-scroll-reveal';
import VueNotification from 'vue-notification';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { router } from './router';

// require styles
import 'swiper/dist/css/swiper.css';
import App from "./App";

Vue.use(VueScrollReveal, {
    class: 'v-scroll-reveal', // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
    duration: 2000,
    scale: 0.9,
    distance: '30px'
});
Vue.use(VueAwesomeSwiper);
Vue.use(VueNotification);

if (process.env.NODE_ENV === 'development') {
    axios.defaults.baseURL = 'http://localhost:3002'
} else {
    axios.defaults.baseURL = 'http://wedding-invitation-api.bbsimonyu.com'
}

Vue.use(VueAxios, axios);

/* eslint-disable no-new */
new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
