<template lang="pug">
#about
    v-row(style='height: 100%', justify='center', align-content='center')
        v-col(cols='12' sm='6')
            v-card
                v-card-text
                    p.display-1 About this Template
                    .text--primary This template powered by Nuxt.js,
                        | Typescript and vuetify.
                        br
                        | Please check it.
                        br
                        a(href='https://ja.nuxtjs.org/') nuxt.js
                        br
                        a(href='https://www.typescriptlang.org/') Typescript
                        br
                        a(href='https://vuetifyjs.com/en/') Vuetify
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
@Component

export default class About extends Vue {
    head () {
        return {
            title: 'about'
        }
    }
}
</script>

<style lang="stylus" scoped>
#about
    height calc(100vh - 118px)
</style>
