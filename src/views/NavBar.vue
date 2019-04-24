<template>
  <div id="app">
    
    <div id="nav">
      
      <v-toolbar app class="indigo darken-4 white--text">
      <v-toolbar-side-icon @click="drawer=!drawer" class="white--text">
          
      </v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span>E Z - T a x</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

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

      <v-icon class="white--text">person</v-icon> สวัสดีคุณ A
    </v-toolbar>
    <v-navigation-drawer app v-model="drawer">
        <v-list>
            <v-list-tile v-for="list in lists" :key="list.text" router-link :to="list.route">
                <v-list-tile-action>
                    <v-icon>{{list.icon}}</v-icon>
                </v-list-tile-action>
                <v-list-content>
                    {{list.text}}
                </v-list-content>
            </v-list-tile>
        </v-list>
        
    </v-navigation-drawer>

    <!--  <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      drawer:true,
      lists:[
        {icon:"้home",text:"หน้าแรก",route:"/"},
        {icon:"description",text:"ข้อมูลบันทึกล่าสุด",route:"/descrip"},
        {icon:"exit_to_app",text:"ออกจากระบบ",route:"/NavBarUser"}
      ]
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
    }
  },
}
</script>
