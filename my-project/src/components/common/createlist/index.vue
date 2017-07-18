<template>
  <div data-app="fixBtn">
    <v-speed-dial
      v-model="fab"
      :fixed="fixed"
      :top="top"
      :bottom="bottom"
      :right="right"
      :left="left"
      :direction="direction"
      :hover="hover"
      :transition="transition"
    >
      <v-btn
        slot="activator"
        class="yellow"
        dark
        fab
        hover
        v-model="fab">
        <v-icon>edit</v-icon>
        <v-icon>close</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        class="red accent-2"
      >
        <v-icon>account_circle</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        class="teal accent-4"
      >
        <v-icon>add</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        class="cyan darken-1"
      >
        <v-icon>delete</v-icon>
      </v-btn>
    </v-speed-dial>
  </div>
</template>

<script type="text/ecmascript-6">
    export default {
      name: 'createlist',
      data () {
        return {
          direction: "left",
          fixed: true,
          fab: false,
          fling: false,
          hover: false,
          tabs: null,
          top: false,
          right: true,
          bottom: true,
          left: false,
          transition: 'slide-x-reverse-transition'
        }
      },
      watch: {
        top (val) {
          this.bottom = !val
        },
        right (val) {
          this.left = !val
        },
        bottom (val) {
          this.top = !val
        },
        left (val) {
          this.right = !val
        }
      },
      computed: {
        activeFab () {
          switch (this.tabs) {
            case 'one': return { 'class': 'purple', icon: 'account_circle' }
            case 'two': return { 'class': 'red', icon: 'edit' }
            case 'three': return { 'class': 'green', icon: 'keyboard_arrow_up' }
            default: return {}
          }
        }
      },
      method:{
        showBtn(){

        }
      }
    };
</script>

<style lang="sass" module>

</style>
