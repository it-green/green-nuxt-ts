<template lang="pug">
v-app
    .navbar
        v-app-bar(color='teal' dark)
            v-app-bar-nav-icon(@click='drawer = true')
            v-toolbar-title Nuxt TS App
    v-navigation-drawer(v-model='drawer' absolute temporary)
        v-list(nav dense)
            v-list-item-group(active-class='teal--text text--accent-4')
                v-list-item(v-for='(item, i) in items' :key='i' :to='item.url')
                    v-list-item-icon
                        v-icon {{ item.icon }}
                    v-list-item-title {{ item.title }}
    v-container(fluid)
        nuxt
    v-footer(absolute padless)
        v-card(flat tile width='100%').teal.lighten-1.text-center
            v-card-text.white--text green - {{ new Date().getFullYear() }}
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class Main extends Vue {
    private drawer = null;
    private items = [
        { title: 'Home', icon: 'mdi-home', url: '/' },
        { title: 'About', icon: 'mdi-alert-circle', url: '/about' }
    ];
}
</script>

<style lang="stylus">
p
    color #000

</style>
