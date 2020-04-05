<template lang="pug">
#index
    v-card(width='100%').mx-auto
        v-card-text
            div hello my template powered by nuxt
            p.display-1(text--primary) Hello my Nuxt.js app Template.
            p I'll explain some usefull nuxt.js features in this page.
    div(:style='{height: spaceHeight + "px"}')
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
                        p.tip-name(style='margin-bottom: 5px;') slider tips
                        v-slider(label='space-height' v-model='spaceHeight' thumb-label)
            v-col(cols='12' sm='4')
                v-card
                    v-card-text
                        div example2
                        p.title  v-for
                        v-spacer
                        p.tip-name(style='margin-bottom: 10px;') todo app
                        .task(v-for='(tasks, i) in todo' :key='i')
                            p(style='margin-bottom: 5px').task-txt.teal--text.darken-1 {{ tasks.task }}
                            v-btn(x-small icon fab color='error' @click='removeTask( tasks.id )')
                                v-icon(small) mdi-check
                        .add-task-area
                            v-textarea(label='add your task' rows='1' auto-grow style='margin-right: 10px' v-model='myTask')
                            v-btn(small color='primary' @click='addTask()') add
            v-col(cols='12' sm='4')
                v-card
                    v-card-text
                        div example3
                        p.title  v-if
                        v-spacer
                        p(v-if='condition === 1').headline.primary--text A
                        p(v-if='condition === 2').headline.primary--text B
                        p(v-if='condition === 3').headline.primary--text C
                        .text-center
                            v-btn(center color='primary' @click='toggle()') toggle
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { v4 as uuidv4 } from 'uuid'

interface TODO {
    task: string,
    id: string
}

@Component

export default class Index extends Vue {
    private example1: string = 'Vue.js is most greatest JS framework';
    private spaceHeight: number = 20;
    private myTask: string = '';
    private condition: number = 1;
    private todo: TODO[] = [
        { task: 'study', id: uuidv4() },
        { task: 'washing', id: uuidv4() },
        { task: 'make breakfast', id: uuidv4() }
    ];

    private toggle () {
        this.condition++
        if (this.condition > 3) {
            this.condition = 1
        } else {
            return
        };
    }

    private addTask () {
        if (this.myTask === '') { return };
        this.todo.push({
            task: this.myTask,
            id: uuidv4()
        })
        this.myTask = ''
    };

    private removeTask (id: string) {
        this.todo = this.todo.filter(todo => todo.id !== id)
    };

    // nuxt head api sample
    head () {
        return {
            title: 'Home',
            meta: [
                { hid: 'description', name: 'description', content: 'This is nuxt metaDescription sample' }
            ]
        }
    };
}
</script>

<style lang="stylus">
p
    color #000

.tip-name
    font-size 14px
    font-weight bold

.task
    display flex
    height: auto
    align-items center

.add-task-area {
    margin-top: 20px
    display flex
    align-items center
}
</style>
