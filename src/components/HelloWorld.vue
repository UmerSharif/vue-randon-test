<template>
    <div class="hello">
        <h1>{{title}}</h1>

        <form @submit.prevent="addTask">
            <input class="enterText" placeholder="Enter Task" v-model="newTask"/>
            <button type="submit">
                <font-awesome-icon icon="plus-circle" size="lg" class="plus-circle"/>
            </button>
        </form>
        <hr/>
        <ul>

            <li v-for="(task, index) in Tasks" :key="index" :class="task.isComplete ? 'completed' : 'notCompleted'">

                <div class="editInput" v-if="editID === task.id">
                    <input type="text" v-model="editInput">

                    <span class="icons">
                    <span class="edit"><font-awesome-icon icon="check" size="lg" class="edit-icon"
                                                          @click="submitChangeTask(task)"/></span>
                    <span class="delete"><font-awesome-icon icon="minus-circle" size="lg"
                                                            v-on:click="onCancel()"/></span>
                    </span>

                </div>
                <div class="forLabel" v-else>
                    <label class="container">{{task.Title}}
                        <input type="checkbox" @change="changeCheck(task)" :checked="task.isComplete"/>
                        <span class="checkmark"></span>
                    </label>
                    <span class="icons">
                    <span class="edit"><font-awesome-icon icon="edit" size="lg" class="edit-icon"
                                                          @click="editTask(task)"/></span>
                <span class="delete"><font-awesome-icon icon="minus-circle" size="lg"
                                                        v-on:click="onDelete(index)"/></span>
                </span>

                </div>

            </li>

        </ul>
    </div>
</template>

<script>

    import {mapGetters, mapState, mapMutations} from 'vuex'

    export default {
        name: 'HelloWorld',
        data() {
            return {
                newTask: '',
                editID: '',
                editInput: '',
                isEditing: false,
            }
        },

        computed: {
            ...mapState([
                'title',
                'Tasks'
            ])
        },

        methods: {

            changeCheck(task) {
                task.isComplete = !task.isComplete
            },

            editTask(task) {
                this.editID = task.id
                this.editInput = task.Title

            },

            onCancel() {
                // setting the editID to nothing to toggle the status
                this.editID = ''
            },

            ...mapMutations([
                'ADD_TASK',
                'DELETE_TASK',
                'ON_EDIT_SUBMIT'
            ]),
            addTask() {
                if (this.newTask !== '') {
                    this.ADD_TASK({id: this.Tasks.length + 1, Title: this.newTask, isComplete: false})
                    this.newTask = ''
                }
            },

            onDelete(index) {
                this.DELETE_TASK(index)
            },

            submitChangeTask(task) {
                this.ON_EDIT_SUBMIT({id: task.id, Title: this.editInput, isComplete: task.isComplete})
                //console.log(index)
                this.editID = ''

            }
        }


    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    $border-color: #333a4f;
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
            margin-top: 5px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            border-radius: 2px;

            .icons {
                display: flex;
                align-items: center;
                font-size: 1rem;

                .edit {
                    margin-right: 8px;
                    cursor: pointer;
                }

                .edit-icon {
                    color: #5f5f5f;
                }

                .delete {
                    color: #5f5f5f;
                    cursor: pointer;
                }
            }

            .forLabel {
                width: inherit;
                display: flex;
                justify-content: space-between;
            }
        }

        .editInput {
            display: flex;
            input {
                padding: 2px 0;
            }

            .icons {
                margin-left: 9px;
            }
        }

        input {
            padding: 12px;
            width: 100%;
            border: 1px solid bisque;
            font-size: 22px;
            border-radius: 2px;
            background-color: bisque;
        }
        & :focus {
            outline: bisque;
        }

        hr {
            width: 288px;
            margin-top: 15px;
            border: 3px solid;
            color: bisque;
        }

        button {
            padding: 10px;
            width: 294px;
            margin-top: 5px;
            background-color: #1e999e;
            border: 1px solid #1e999e;
            border-radius: 2px;
            font-size: 1rem;
            color: beige;
            cursor: pointer;
        }

        .completed {
            border: 1px solid #d5e5c2;
            background-color: #d5e5c2;
        }

        .notCompleted {
            background-color: #fe8484;
            border: 1px solid #fe8484;
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

        label {
            color: #3a3d44;
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
            background-color: #81b642;
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
