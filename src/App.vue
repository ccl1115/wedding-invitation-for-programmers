<template>
    <div id="app">
        <router-view/>
        <notifications group="foo" position="bottom right"/>
    </div>
</template>

<script>
    export default {
        methods: {
            play() {

            }
        }
    }
</script>

<style>
    #app {
        height: 100%;
    }

    input, input:before, input:after, button, button:before, button:after {
        user-select: initial;
    }
</style>
