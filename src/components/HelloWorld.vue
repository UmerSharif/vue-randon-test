<template>
    <div class="hello">
        <h1>{{title}}</h1>

        <form @submit.prevent = "addTask">
            <input class="enterText" placeholder="Enter Task" v-model="newTask" />
            <button type="submit">Add</button>
        </form>

        <ul>

            <li v-for="(task, index) in Tasks" :key="index" :class="{completed : task.isComplete}">



                <label class="container">{{task.Title}}
                    <input  type="checkbox" @change="changeCheck(task)" :checked="task.isComplete" />
                    <span class="checkmark"></span>
                </label>
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
                this.newTask = ''
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

        }

        input {
            padding: 12px;
            width: 100%;
            border: 1px solid $border-color;
            font-size: 22px;
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


        //custom checkbox css
        .container {
            display: block;
            position: relative;
            padding-left: 35px;
            //margin-bottom: 12px;
            cursor: pointer;
            font-size: 22px;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }

        /* Hide the browser's default checkbox */
        .container input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;
        }

        /* Create a custom checkbox */
        .checkmark {
            position: absolute;
            top: 3px;
            left: 0;
            height: 25px;
            width: 25px;
            background-color: #eee;
        }

        /* On mouse-over, add a grey background color */
        .container:hover input ~ .checkmark {
            background-color: #ccc;
        }

        /* When the checkbox is checked, add a blue background */
        .container input:checked ~ .checkmark {
            background-color: #2196F3;
        }

        /* Create the checkmark/indicator (hidden when not checked) */
        .checkmark:after {
            content: "";
            position: absolute;
            display: none;
        }

        /* Show the checkmark when checked */
        .container input:checked ~ .checkmark:after {
            display: block;
        }

        /* Style the checkmark/indicator */
        .container .checkmark:after {
            left: 9px;
            top: 5px;
            width: 5px;
            height: 10px;
            border: solid white;
            border-width: 0 3px 3px 0;
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: rotate(45deg);
        }

    }
</style>
