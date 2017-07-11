<template>
  <div :class="$style.btncontainer">
    <v-fab icon="list" horizontal>
      <ul slot="items">
        <li>
          <v-btn-link floating class="red"><v-icon>insert_chart</v-icon></v-btn-link>
        </li>
        <li>
          <v-btn-link floating class="yellow darken-1"><v-icon>format_quote</v-icon></v-btn-link>
        </li>
        <li>
          <v-btn-link floating class="green"><v-icon>publish</v-icon></v-btn-link>
        </li>
        <li>
          <v-btn-link floating class="blue"><v-icon>attach_file</v-icon></v-btn-link>
        </li>
      </ul>
    </v-fab>
  </div>
</template>

<script type="text/ecmascript-6">
    export default {
      name: 'createlist',
      data () {
        return {
      //你想导入什么？这个组件吗？嗯
        }
      }
    };
</script>

<style lang="sass" module>

</style>
