<template>
    <div class="hello">
        <h1>{{title}}</h1>

        <hr>
        <form @submit.prevent = "addTask">
            <input class="enterText" placeholder="Enter Task" v-model="newTask" />
            <button type="submit">Add</button>
        </form>

        <ul>

            <li v-for="(Task, index) in Tasks" :key="index" >
                {{Task}}
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
            addTask(){
                console.log(this.newTask)
            }
        }


    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .hello {

        h1 {
            text-align: center;
            margin: 5px;
        }

        li {
            list-style: none outside none;
            padding: 10px;
        }

        input {
            padding: 10px;
            width: 100%;
        }

        hr {
            width: 291px;
        }

        button {
            padding: 10px;
            width: 294px;
            margin-top: 5px;
        }

    }
</style>
