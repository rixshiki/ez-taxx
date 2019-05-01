<template>
  <div id="app">
    
    <div id="nav">
      
      <v-toolbar app class="indigo darken-4 white--text">
      <v-toolbar-title class="headline text-uppercase">
        <router-link to="/">
        <a class="navbar-brand" href="">
      <h3 class="d-inline-block align-top white--text">EX - TAX</h3>
    </a>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <left>
<!--      <router-link to="/register">
      <v-btn
        flat
        href=""
        target="_blank"
        v-on:click="register()"
      >
        <span class="mr-2 white--text">สร้างบัญชี</span>
      </v-btn>
      </router-link> -->
      <v-flex class="mt-4 mb-3 ">
        <!--<popup/> -->
      </v-flex>
      </left>
<!--      <router-link to="/login">
      
      <v-btn
        flat
        href=""
        target="_blank"
        v-on:click="login()"
      >
        <span class="mr-2 white--text">เข้าสู่ระบบ</span>
      </v-btn>
      </router-link>-->

    </v-toolbar>
    <!--  <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
  </div>
</template>

<script>

import popup from './popup'
export default {
  name: 'App',
  components: {
    popup
  },
  data () {
    return {
    }
  },
  methods: {
    index(){
      return this.$router.push({name: 'index'})
    },
    calculate(){
      return this.$router.push({name: 'calculate'})
    },
    advDiscountTax(){
      return this.$router.push({name: 'advDiscountTax'})
    },
    contact(){
      return this.$router.push({name: 'contact'})
    },
    login(){
      return this.$router.push({name: 'login'})
    }
  },
}
</script>
<style>
.navbar-brand {
    display: inline-block;
    padding-top: 0.3125rem;
    padding-bottom: 0.3125rem;
    margin-right: 1rem;
    font-size: 1.25rem;
    line-height: inherit;
    white-space: nowrap;
}
.d-inline-block {
    display: inline-block !important;
}
.align-top {
    vertical-align: top !important;
}
</style>
