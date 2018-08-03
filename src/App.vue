
<template id="main">
  <v-ons-page>
    <v-ons-toolbar>
      <div class="center">Title</div>
    </v-ons-toolbar>
    <router-link to="/">home</router-link>
    <router-link to="/foo">page 1</router-link>
    <router-link to="/bar">page 2</router-link>
<transition name="router-anim" enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutDown">
    <router-view/>
    </transition>
    <v-ons-fab
      position="bottom right"
    >
      <v-ons-icon icon="md-face"></v-ons-icon>
    </v-ons-fab>
  </v-ons-page>

</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
