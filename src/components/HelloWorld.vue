<template>
    <div class="hello">
        <h1>{{title}}</h1>

        <form @submit.prevent = "addTask">
            <input class="enterText" placeholder="Enter Task" v-model="newTask" />
            <button type="submit">Add</button>
        </form>

        <ul>

            <li v-for="(task, index) in Tasks" :key="index">
                <input type="checkbox" @change="changeCheck(task)" :checked="task.isComplete" />{{task.Title}}
            </li>

        </ul>
    </div>
</template>

<script>

    import {mapGetters, mapState, mapMutations} from 'vuex'

    export default {
        name: 'HelloWorld',
        data(){
            return {
                newTask : ''
            }
        },

        computed :{
            ...mapState([
                'title',
                'Tasks'
            ])
        },

        methods: {

            changeCheck(task) {
                task.isComplete = !task.isComplete
            },

            ...mapMutations([
               'ADD_TASK'
            ]),
            addTask(){
                this.ADD_TASK({Title : this.newTask, isComplete : false})
            }
        }




    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    $border-color : #333a4f;
    .hello {

        h1 {
            text-align: center;
            margin: 5px;
        }

        ul {
            padding: 0;
        }

        li {
            list-style: none outside none;
            padding: 10px;
          border: 1px solid $border-color;
            margin-top: 5px;
            width: 100%;
            display: flex;

            input {
               width: 1rem;
            }
        }

        input {
            padding: 12px;
            width: 100%;
            border: 1px solid $border-color;
        }

        hr {
            width: 291px;
        }

        button {
            padding: 10px;
            width: 294px;
            margin-top: 5px;
        }

        .completed {
            border: 1px solid aquamarine;
        }

    }
</style>
