<template>
    <div :class="$style.hello">
        <todo-head></todo-head>
        <router-view></router-view>
    </div>
</template>

<script>
    import todohead from '@/components/common/head'
    export default {
        name: 'guide',
        data () {
            return {
                msg: 'hahah'
            }
        },
        components : {
            'todo-head': todohead
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" module>
    .hello{
        display: block;
    }

</style>
