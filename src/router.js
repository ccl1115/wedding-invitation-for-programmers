import Vue from 'vue';
import VueRouter from "vue-router";

import Wedding from "./Wedding";
import Photos from "./components/Photos";
import Board from "./components/Board";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Wedding
    },
    {
        path: '/photos',
        component: Photos
    },
    {
        path: '/board',
        component: Board
    }
];


export const router = new VueRouter({
    routes
});
