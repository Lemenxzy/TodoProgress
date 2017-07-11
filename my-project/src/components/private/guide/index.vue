<template>
    <div :class="$style.hello">
        <todo-head></todo-head>
        <router-view></router-view>
        <create-list></create-list>
    </div>

</template>

<script>
    import todohead from '@/components/common/head'
    import createlist from '@/components/common/createlist'
    export default {
        name: 'guide',
        data () {
            return {
                msg: 'hahah'
            }
        },
        components : {
            'todo-head': todohead,
            'create-list': createlist
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" module>
    .hello{
        display: block;
    }

    i{
      font-size:36px;
      color: #26a69a;
    }

</style>
