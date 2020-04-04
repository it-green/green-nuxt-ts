<template lang="pug">
v-app
    .navigation
        v-app-bar(color='teal darken-1' dense dark)
            v-app-bar-nav-icon
            v-toolbar-title Nuxt TS App
    v-icon home
    v-icon info
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class Main extends Vue {
    private items = [
        { title: 'Home', icon: 'home' },
        { title: 'About', icon: 'info' }
    ];
}
</script>
