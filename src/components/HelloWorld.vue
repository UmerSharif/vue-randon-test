<template>
    <div class="hello">
        <h1>Filter Names</h1>
        <div class="search">
            <input type="text" placeholder="Search Here...." v-model="findName">
        </div>

        <hr>
        <ul>
            <li v-for="(name, index) in names" :key="index">
                {{name}}
            </li>
        </ul>
    </div>
</template>

<script>

    import {mapGetters, mapState} from 'vuex'

    export default {
        name: 'HelloWorld',
        data() {
            return {
                findName: ''
            }
        },

        computed: {
            ...mapState([
                'names'
            ]),
            ...mapGetters([
                'filterNames'
            ]),
            filterHeroNames() {
               return this.filterNames(this.findName)
            }
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .hello {
            .search {
                text-align: center;
            }
        h1 {
            text-align: center;
            margin: 5px;
        }

        li {
            list-style: none outside none;
        }

        input {
            padding: 10px;
        }

    }
</style>
