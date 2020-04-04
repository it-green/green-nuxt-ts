<template lang="pug">
v-layout(column justify-center align-center)
    v-flex(xs12 sm8 md60)
        v-card
            v-card-title.headline
                Welcome to the Vuetify + Nuxt.js template
        v-card-text
            p Vuetify is a progressive Material Design component framework for Vue.js. It was designed to empower developers to create amazing applications.
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component

export default class App extends Vue {}

</script>
