<template lang="pug">
v-app
    .navigation
        v-app-bar(color='teal darken-1' dense dark)
            v-app-bar-nav-icon(@click.stop='drawer = !drawer')
            v-toolbar-title Nuxt TS App
    v-navigation-drawer(v-model='drawer')
        v-list(dense)
            v-list-item(v-for='(item, i) in items' :key='i' link)
                v-list-item-content
                    v-list-item-title {{ item.title }}
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Main extends Vue {
    private drawer = null;
    private items = [
        { title: 'Home', icon: 'home' },
        { title: 'About', icon: 'info' }
    ];
}
</script>
