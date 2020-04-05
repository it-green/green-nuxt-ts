<template lang="pug">
#index
    v-card(width='100%').mx-auto
        v-card-text
            div hello my template powered by nuxt
            p.display-1(text--primary) Hello my Nuxt.js app Template.
            p I'll explain some usefull nuxt.js features in this page.
    v-container(:style='{height: spaceHeight + "px"}')
        p.blue--text.lighten-4 now space {{ spaceHeight }} px
    v-container(fluid)
        v-row
            v-col(cols='12' sm='4')
                v-card
                    v-card-text
                        div example1
                        p.title  v-model
                        v-spacer
                        p.tip-name(style='margin-bottom: 5px;') input tips
                        p.green--text {{ example1 }}
                        v-textarea(label='input-area' outlined auto-grow row-height='5' v-model='example1')
                        p.tip-name slider tips
                        v-slider(label='space-height' v-model='spaceHeight' thumb-label)
            v-col(cols='12' sm='4')
                v-card
                    v-card-text
                        div example2
                        p.title  v-for
            v-col(cols='12' sm='4')
                v-card
                    v-card-text
                        div example3
                        p.title  v-if
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component

export default class Index extends Vue {
    private example1: string = 'Vue.js is most greatest JS framework';
    private spaceHeight: number = 20;
    // nuxt head api sample
    head () {
        return {
            title: 'Home',
            meta: [
                { hid: 'description', name: 'description', content: 'This is nuxt metaDescription sample' }
            ]
        }
    }
}
</script>

<style lang="stylus">
p
    color #000

.tip-name
    font-size 14px
    font-weight bold
</style>
