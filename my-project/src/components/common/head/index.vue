<template>
    <div :class="$style.header">
        <ul>
            <li :class="$style.navlist+' '+$style.navfirst">
                <router-link :to="'task'">TDList</router-link>
            </li>
            <li :class="$style.navlist">
                <router-link :to="'task'">Home</router-link>
            </li>
            <li :class="$style.navlist">
                <router-link :to="'taskList'">list</router-link>
            </li>
            <li :class="$style.navlist">
                <router-link :to="'willTask'">willTask</router-link>
            </li>
            <li :class="$style.clear"></li>
        </ul>
    </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" module>
    .header{
        width: 100%;
        min-width: 1200px;
        background: #333;
    }
    ul .navlist{
        float: left;
    }
    .navfirst{
        font-weight: bolder;
        font-size: 16px;
    }
    ul .navlist a{
        display: inline-block;
        padding: 6px 20px;
        color:#fefefe;
    }
    .clear{
        clear:both;
    }

</style>
