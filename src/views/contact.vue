<template>
<v-container fluid align-start justify-center row fill-height class="bg1">
<v-layout justify-start column fill-height >
  <div>
  <div>
      <v-layout >
      <ul class="pageBar">
            <router-link to="/index"><li class="goLeft pbLiH"><a class="navTextG" href="">การคำนวณภาษี</a></li></router-link>
            <router-link to="/advDiscountTax"><li class="goLeft pbLiH navTextG">วิธีลดหย่อนภาษีเพิ่มเติม</li></router-link>
            <router-link to="/contact"><li class="goLeft pbLiH "><a class="navTextG black--text" href="">ติดต่อเรา</a></li></router-link>
      </ul>
      </v-layout>
  </div>
  <div>
    <v-layout  class="red" >
      <h1>Contact</h1>
      
    </v-layout>
  </div>
  <div>
    <v-layout  class="pink">
      <h1>HEllo</h1>
    </v-layout>
</div>

</div>

</v-layout>
</v-container>
</template>

<script>
  export default {
    
  }
</script>

<style>
  .bg1 {
                background-image: url("background.jpg");
                
            }
</style>
