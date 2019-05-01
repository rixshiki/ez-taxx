<template>
  <v-container fluid align-start justify-center row fill-height class="bg white">
      <v-layout justify-start column class="">
      <v-layout class="">
        <ul class="pageBar">
          <router-link to="/index">
            <li class="goLeft pbLiH">
              <a class="navTextG" href>การคำนวณภาษี</a>
            </li>
          </router-link>
          <router-link to="/advDiscountTax">
            <li class="goLeft pbLiH">
              <a class="navTextG" href>วิธีลดหย่อนภาษีเพิ่มเติม</a>
            </li>
          </router-link>
          <router-link to="/contact">
            <li class="goLeft pbLiH navTextG black--text">ติดต่อเรา</li>
          </router-link>
        </ul>
      </v-layout>
      <v-layout fill-height class="" pa-5>
        <v-layout align-center justify-center row wrap pa-5>
            
            <h2>TEL.   : 08X-XXX-XXXX, 09X-XXX-XXXX
            <br>E-mail : XXXX@hotmail.com
            <br>Line   : @XXXX
            <br>Facebook: XXXX</h2>
            
        </v-layout>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
.bg {
  background-image: url(./contact1.jpg);
  background-position: center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
}
.pageBar {
  font-family: spmk;
  font-size: 20px;
  list-style-type: none;
  width: 660px;
  height: 70px;
  margin: 10px auto;
  padding: 5px 40px;
  overflow: auto;
  background-color: white;
  line-height: 1.33;
  border-radius: 100px;
}

</style>