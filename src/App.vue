<template>
<v-app class="blue lighten-5">
    
  <div> 
    <NavBarUser/>
  </div>
  <v-content>
    <router-view/>
  </v-content>
  </v-app>
</template>

<script>

import NavBar from './views/NavBar'
import NavBarUser from './views/NavBarUser'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'


import { mapState,mapMutations } from 'vuex'

export default {
  name: 'App',
  components: {
    NavBar,NavBarUser
  },
  data () {
    return {
            email: "test1@hotmail.com", 
            password: "testez"
    }
  },
    computed: {
    /*...mapState({
      user: state => state.user
    })*/
    ...mapState(['User'])
    },
    methods: {
        ...mapMutations(['SET_USER']),
        handleOk(evt) {
          //request
          axios.post('http://localhost:3000/users/login',{
                email: this.email, 
                password: this.password
            })
            .then(res => {
                this.SET_USER(res.data[0])
            })
            .catch(err=>{
            console.log(err)
      })
        }
    },
    mounted() {
        
    }
}
</script>
