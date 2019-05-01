
<template>
<v-container   fill-height>
    <div class="tax-form" id="form-first">

    <v-layout column wrap  justify-center class="white">

        <v-layout  row wrap  justify-center >
            <v-flex xs12 >
                <h1 class="text-md-center display-2">EZ - TAX</h1>
            </v-flex>
            <v-spacer></v-spacer>
            
            <v-flex xs12 > 
                <h2 class="text-md-center headline">ค่าลดหย่อนอื่นๆ</h2>
                <hr><hr>
            </v-flex>
             <v-flex xs4 class> 
                 
                 <p class="text-lg-right sp font-weight-medium title text-lg-right">ค่าลดหย่อน ดูแลคนพิการ:</p> 
            </v-flex>
           <v-flex xs1>
                <v-text-field 
                        v-model.number="n1" type="number" step="1"
                        label="คน"
                        value="0"
                        prefix=" "
                    ></v-text-field> 
            </v-flex>
            <v-flex xs5>
                <p class="text-lg-right sp font-weight-medium title text-lg-right">0</p> 
            </v-flex>
            <v-flex xs2>
                <p class="text-lg-right sp font-weight-medium title text-lg-right">บาท</p> 
            </v-flex>
             <!-- ---------  -->

            <!-- ---------  -->
            <v-flex xs4 class> 
                 
                 <p class="text-lg-right sp font-weight-medium title text-lg-right">เงินสะสมประกันสังคม:</p> 
            </v-flex>
           <v-flex xs6>
                <v-text-field
                v-model="n2"
                
                type="number"
               
                    label="บาท"
                    value="0"
                    prefix=" "
                    
                ></v-text-field>
                
            </v-flex>
            
            <v-flex xs2>
                <p class="text-lg-right sp font-weight-medium title text-lg-right">บาท</p> 
            </v-flex>
             <!-- ---------  -->

             <!-- ---------  -->
            <v-flex xs4 class> 
                 
                 <p class="text-lg-right sp font-weight-medium title ">
                    เงินสะสมที่จ่ายเข้า<br>
                        กองทุนสำรองเลี้ยงชีพ หรือ กบข.:</p> 
            </v-flex>
           <v-flex xs1>
                <v-text-field 
                        v-model.number="persen" type="number" step="1"
                        label="คน"
                        value="0"
                        prefix=" "
                    ></v-text-field> 
            </v-flex>
            
            <v-flex xs1>
                <p class="sp font-weight-medium title text-sm-left">%</p> 
            </v-flex>
            <v-flex xs4>
                <p class="sp font-weight-medium title text-lg-right">{{persen}}</p> 
            </v-flex>
            <v-flex xs2>
                <p class="sp font-weight-medium title text-lg-right">บาท</p> 
            </v-flex>
             <!-- ---------  -->

              <!-- ---------  -->
            <v-flex xs4 class> 
                 
                 <p class="text-lg-right sp font-weight-medium title ">
                    ค่าดอกเบี้ยกู้บ้าน:</p> 
            </v-flex>
           <v-flex xs1>
                <v-text-field
                v-model="n3"
                    label="บาท"
                    value="0"
                    prefix=" "
                ></v-text-field>
            </v-flex>
            
            <v-flex xs1>
                <p class="sp font-weight-medium title text-sm-left">บาท</p> 
            </v-flex>
            <v-flex xs2>
                <p class="sp font-weight-medium title text-lg-right">หักได้ตามจริง</p> 
            </v-flex>
            <v-flex xs2>
                <p class="sp font-weight-medium title text-lg-right">0</p> 
            </v-flex>
            <v-flex xs2>
                <p class="sp font-weight-medium title text-lg-right">บาท</p> 
            </v-flex>
             <!-- ---------  -->

 
             

            <v-flex xs12 > 
                <h2 class="text-md-center headline">การลงทุนใน RMF และ LTF กรณีลงทุนเต็มเพดานที่กฎหมายกำหนด</h2>
                <hr><hr>
            </v-flex>
            <!-- ---------  -->
            <v-flex xs4 class> 
                 <p class="text-lg-right sp font-weight-medium title text-lg-right">จำนวนเงินสูงสุดที่ลงทุน RMF ได้:</p> 
            </v-flex>
           
            <v-flex xs6>
                    <p class="text-lg-right sp font-weight-medium title text-lg-right">0</p> 
            </v-flex>
            <v-flex xs2>
                    <p class="text-lg-right sp font-weight-medium title text-lg-right">บาท</p> 
            </v-flex>
            
            <!-- ---------  -->
            <v-flex xs4 class> 
                 <p class="text-lg-right sp font-weight-medium title text-lg-right">จำนวนเงินสูงสุดที่ลงทุน LTF ได้:</p> 
            </v-flex>
            
            <v-flex xs6>
                    <p class="text-lg-right sp font-weight-medium title text-lg-right">0</p> 
            </v-flex>
            <v-flex xs2>
                    <p class="text-lg-right sp font-weight-medium title text-lg-right">บาท</p> 
            </v-flex>
            
            <!-- ---------  --> 
            <v-flex xs4 class> 
                 <p class="text-lg-right sp font-weight-medium title text-lg-right">ค่าประกันชีวิตสูงสุด:</p> 
            </v-flex>
            
            <v-flex xs6>
                    <p class="text-lg-right sp font-weight-medium title text-lg-right">0</p> 
            </v-flex>
            <v-flex xs2>
                    <p class="text-lg-right sp font-weight-medium title text-lg-right">บาท</p> 
            </v-flex>
            
            <!-- ---------  --> 
            <v-flex xs12 > 
                <h2 class="text-md-center headline">การลงทุนใน RMF และ LTF ประกันชีวิต และประกันชีวิตแบบบำนาญ ตามที่ท่านต้องการ</h2>
                <hr><hr>
            </v-flex>
            <!-- ---------  -->
            <v-flex xs4 class> 
                 
                 <p class="text-lg-right sp font-weight-medium title text-lg-right">จำนวนเงินที่ท่านต้องการลงทุน<br>เพิ่มใน RMF:</p> 
            </v-flex>
           <v-flex xs6>
                <v-text-field 
                        v-model.number="n1" type="number" step="1"
                        label="บาท"
                        value="0"
                        prefix=" "
                    ></v-text-field> 
            </v-flex>
            
            <v-flex xs2>
                <p class="text-lg-right sp font-weight-medium title text-lg-right">บาท</p> 
            </v-flex>
             <!-- ---------  -->
               <v-flex xs4 class> 
                 
                 <p class="text-lg-right sp font-weight-medium title text-lg-right">จำนวนเงินที่ท่านต้องการ<br>ลงทุนเพิ่มใน LTF:</p> 
            </v-flex>
           <v-flex xs6>
                <v-text-field 
                        v-model.number="n1" type="number" step="1"
                        label="บาท"
                        value="0"
                        prefix=" "
                    ></v-text-field> 
            </v-flex>
            
            <v-flex xs2>
                <p class="text-lg-right sp font-weight-medium title text-lg-right">บาท</p> 
            </v-flex>
             <!-- ---------  -->

             <v-flex xs4 class> 
                 
                 <p class="text-lg-right sp font-weight-medium title text-lg-right">ค่าประกันชีวิต:</p> 
            </v-flex>
           <v-flex xs6>
                <v-text-field 
                        v-model.number="n1" type="number" step="1"
                        label="บาท"
                        value="0"
                        prefix=" "
                    ></v-text-field> 
            </v-flex>
            
            <v-flex xs2>
                <p class="text-lg-right sp font-weight-medium title text-lg-right">บาท</p> 
            </v-flex>
             <!-- ---------  -->
              <v-flex xs4 class> 
                 
                 <p class="text-lg-right sp font-weight-medium title text-lg-right">ค่าประกันชีวิตแบบบำนาญที่<br>
ท่านต้องการลงทุนเพิ่ม:</p> 
            </v-flex>
           <v-flex xs6>
                <v-text-field 
                        v-model.number="n1" type="number" step="1"
                        label="บาท"
                        value="0"
                        prefix=" "
                    ></v-text-field> 
            </v-flex>
            
            <v-flex xs2>
                <p class="text-lg-right sp font-weight-medium title text-lg-right">บาท</p> 
            </v-flex>
             <!-- ---------  -->

             <v-flex xs4 class="green">
                <div >
                    <p class="sp font-weight-medium title ">รวมเงินได้หลังหักค่าลดหย่อน:</p>
                </div>
            </v-flex>
            <v-flex xs6 text-md-right class="green">
                <div  >
                    <p class="sp font-weight-medium title" mleft>
                         0.00
                    </p>  
                </div>
            </v-flex>
            <v-flex xs2 text-md-left class="green">
                <div  >
                    <p class="sp font-weight-medium title" mleft>
                         บาท
                    </p>  
                </div>
            </v-flex>



            
            <!-- ---------  -->
            <v-flex xs12 text-md-center>
                <div  >
                    <v-btn to="calculate3" round color="primary" dark>ก่อนหน้า</v-btn> 
                    <v-btn to="calculate5" round color="primary" dark>ต่อไป</v-btn> 
                                      
                </div>
            </v-flex>
     
        </v-layout>

    
    </v-layout>
    </div>
</v-container>
 
</template>



<script>
// import calulate from "./calculate.vue";
//import calulate2 from "./calculate2.vue";

  export default {
  // name: 'calculate3',
   data(){
       return{
           sun: 0,
           sun2: 0,
           sun3: 0,
           perent: 0,
           perent2: 0,
           persen:0,
           nothave:0,          
           name: "",
            locale: '1',
        locales: [
          { locale: '1', title: 'โสด' },
          { locale: '2', title: 'หย่า' },
          { locale: '3', title: 'คู่สมรสมีเงินได้(แยกยื่น)' },
          { locale: '4', title: 'คู่สมรสไม่มีเงินได้' }
        ],
      
       }
   },
   methods: {
        switchLocale: function (index) {
          console.log('switch locale: ', this.locales[index].title)
          this.locale = this.locales[index].locale
        }
      } 
  // components: {
  //     calculate2,
  //     calculate
   //}
}
</script>
<style>
.bg2 {
                background-image: url("banner.jpg");
                
            }
.sp{
    margin: 15px;
}
.mleft{
    margin-right: 10px;
    
}
</style>




