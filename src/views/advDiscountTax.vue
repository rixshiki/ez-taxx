<template>
<v-container fluid align-start justify-start row fill-height class="">
  <v-layout column class="">
    <v-layout justify-center class="">
      <ul class="pageBar">
            <router-link to="/index"><li class="goLeft pbLiH"><a class="navTextG" href="">การคำนวณภาษี</a></li></router-link>
            <router-link to="/advDiscountTax"><li class="goLeft pbLiH navTextG black--text">วิธีลดหย่อนภาษีเพิ่มเติม</li></router-link>
            <router-link to="/contact"><li class="goLeft pbLiH"><a class="navTextG" href="">ติดต่อเรา</a></li></router-link>
      </ul>
    </v-layout>-->

    <v-layout fill-height class="white">
      <div class="tax-form" id="form-first">

    <v-layout column wrap justify-center class="">

        <v-layout  row wrap  justify-center >
            <v-flex xs12 >
                <br>
                <h1 class="text-md-center display-2">EZ - TAX</h1>
                <br>
            </v-flex>
            <v-spacer></v-spacer>
            
            <v-flex xs12 > 
                <h2 class="text-md-left headline indigo--text">การลงทุนใน RMF และ LTF กรณีลงทุนเต็มเพดานที่กฏหมายกำหนดให้</h2>
                <hr>
                <br>
            </v-flex>
            <!-- ---------  -->
            <v-flex xs5>
                 <p class="sp text-lg-right title">จำนวนเงินสูงสุดที่ลงทุน RMF:</p> 
            </v-flex>

            <v-flex xs6>
                <p class="sp text-lg-right font-weight-medium">72,000</p>
            </v-flex>

            <v-flex xs1><p class="sp font-weight-medium title">บาท</p></v-flex>
             <!-- ---------  -->
                <v-flex xs5> 
                 <p class="sp text-lg-right font-weight-medium title">จำนวนเงินสูงสุดที่ลงทุน LTF:</p> 
            </v-flex>

            <v-flex xs6>
                <p class="sp text-lg-right font-weight-medium">72,000</p>
            </v-flex>
            
            <v-flex xs1><p class="sp font-weight-medium title">บาท</p></v-flex>
             <!-- ---------  -->
             <v-flex xs5> 
                 <p class="text-lg-right sp font-weight-medium title">ค่าประกันชีวิตสูงสุด:</p> 
            </v-flex>

            <v-flex xs6>
                <p class="sp text-lg-right font-weight-medium">100,000</p>
            </v-flex>
            
            <v-flex xs1> <p class="sp font-weight-medium title">บาท</p></v-flex>

            <v-flex xs12><br></v-flex>
            <!-- ---------  -->

        </v-layout>
        <v-layout row wrap>
                        <v-flex xs12 > 
                <h2 class="text-md-left headline indigo--text">การลงทุนใน RMF และ LTF ประกันชีวิต และประกันชีวิตแบบบำนาญ ตามที่ท่านต้องการ</h2>
                <hr>
                <br>
            </v-flex>
             <!-- ---------  -->
            <v-flex xs5>
                <p class="text-lg-right sp title">จำนวนเงินที่ท่านต้องการลงทุนเพิ่มใน RMF:</p></v-flex>
            <v-flex xs6>
                <v-text-field
                        value="00.00"
                        prefix=" "
                    ></v-text-field>
            </v-flex>
            <v-flex xs1><p class="sp title">บาท</p></v-flex>
             <!-- ---------  -->
            <v-flex xs5>
                <p class="text-lg-right sp title">จำนวนเงินที่ท่านต้องการลงทุนเพิ่มใน LTF:</p></v-flex>
            <v-flex xs6>
                <v-text-field
                        value="00.00"
                        prefix=" "
                    ></v-text-field>
            </v-flex>
            <v-flex xs1><p class="sp title">บาท</p></v-flex>
             <!-- ---------  -->
            <v-flex xs5>
                <p class="text-lg-right sp title">ค่าประกันชีวิตแบบบำนาญที่ท่านต้องการลงทุนเพิ่ม:</p></v-flex>
            <v-flex xs6>
                <v-text-field
                        value="00.00"
                        prefix=" "
                    ></v-text-field>
            </v-flex>
            <v-flex xs1><p class="sp title">บาท</p></v-flex>
        </v-layout>

        <!-- -----ประหยัดภาษี----- -->

        <v-layout row wrap>
            <v-flex xs5><p class="sp text-lg-right title">รวมเงินได้สุทธิ:</p></v-flex>

            <v-flex xs6>
                <p class="sp text-lg-right font-weight-medium blue--text title">320,000</p>
            </v-flex>

            <v-flex xs1><p class="sp font-weight-medium title">บาท</p></v-flex>

            <v-flex xs12><hr></v-flex>
             <!-- ---------  -->
            <v-flex xs5><p class="sp text-lg-right font-weight-medium title">ภาษีที่ต้องเสีย:</p></v-flex>
            
            <v-flex xs6>
                <p class="sp text-lg-right font-weight-medium blue--text title">72,000</p>
            </v-flex>
            
            <v-flex xs1><p class="sp font-weight-medium title">บาท</p></v-flex>

            <v-flex xs12><hr></v-flex>
             <!-- ---------  -->
             <v-flex xs5><p class="text-lg-right sp font-weight-medium title">ท่านประหยัดภาษีได้:</p></v-flex>

            <v-flex xs6>
                <p class="sp text-lg-right font-weight-medium blue--text title">0</p>
            </v-flex>
            
            <v-flex xs1><p class="sp font-weight-medium title">บาท</p></v-flex>

            <v-flex xs12>
                <hr>
            </v-flex>
        </v-layout>
    </v-layout>
    </div>
    </v-layout>
  </v-layout>
  
        
</v-container>
</template>

<script>
  export default {
    
  }
</script>

<style>

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