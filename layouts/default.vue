<template lang="pug">
v-app
    .navigation
        v-app-bar(color='teal darken-1' dense dark)
            v-app-bar-nav-icon(@click.stop='drawer = !drawer')
            v-toolbar-title Nuxt TS App
        nuxt
        v-navigation-drawer(v-model='drawer')
            v-list(dense)
                v-list-item(v-for='(item, i) in items' :key='i' link router)
                    v-list-item-content
                        v-list-item-title {{ item.title }}
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Main extends Vue {
    private drawer = null;
    private items = [
        { title: 'Home', icon: 'home', to: '/' },
        { title: 'About', icon: 'info', to: 'about' }
    ];
}
</script>
