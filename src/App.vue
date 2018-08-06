
<template id="main">
  <v-ons-page>
    <v-ons-toolbar>
      <div class="center">{{$route.meta.title}}</div>
      <div class="right">
        <v-ons-toolbar-button to="/about">
          <v-ons-icon icon="ion-navicon, material: md-menu"></v-ons-icon>
        </v-ons-toolbar-button>
      </div>
    </v-ons-toolbar>
    <transition name="router-anim" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
    <router-view/>
    </transition>

 <v-ons-bottom-toolbar>

    <router-link to="/">önsöz</router-link>
    <router-link to="/poses">duruşlar</router-link>
    <router-link to="/chakras">çakralar</router-link>
    <router-link to="/mudras">mudralar</router-link>
    <router-link to="/terminology">terimler</router-link>
</v-ons-bottom-toolbar>
  </v-ons-page>

</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Slabo+27px&subset=latin-ext');
.page {
font-family: 'Slabo 27px', Helvetica, Arial, sans-serif;
}
#app {
  font-family: 'Slabo 27px', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #301F1F;
  margin-top: 60px;
}
.bottom-bar {
  display: flex;
  flex-wrap: nowrap;
  flex-grow: 1;
  justify-content:space-between;
  align-items: stretch;
  padding: 0 15px;
}
.bottom-bar a {
  text-decoration: none;
  border-bottom: 3px solid transparent;
  color:#301F1F;
}
.bottom-bar .exact-active {
  color:#EC516C;
  border-color: #EC516C;
}
.page__content {
    padding:0 15px;
}
</style>
