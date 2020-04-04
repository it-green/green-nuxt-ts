<template lang="pug">
#app
    p.test hogehoge
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component

export default class App extends Vue {}
</script>

<style lang="stylus">
.test
    font-size 24px
</style>
