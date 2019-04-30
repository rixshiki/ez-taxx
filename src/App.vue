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
export default {
  name: 'App',
  components: {
    NavBar,NavBarUser
  },
  data () {
    return {
     
    }
  }

}
</script>
