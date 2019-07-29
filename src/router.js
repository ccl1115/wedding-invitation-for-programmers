import Vue from 'vue';
import VueRouter from "vue-router";

import Wedding from "./Wedding";
import Photos from "./components/Photos";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Wedding
    },
    {
        path: '/photos',
        component: Photos
    }
];


export const router = new VueRouter({
    mode: 'history',
    routes
});
