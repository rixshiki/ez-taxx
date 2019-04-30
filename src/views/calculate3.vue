
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
                <h2 class="text-md-center headline">ค่าใช้จ่ายและค่าลดหย่อน</h2>
                <hr>
            </v-flex>
            

            <!-- ---------  -->
                <v-flex xs4 class> 
                    <p class="text-lg-right sp font-weight-medium title text-lg-right">สถานภาพ:</p> 
                </v-flex>
                <v-flex xs8>
<div class="text-xs-left">
    <v-menu open-on-hover top offset-y>
      <template v-slot:activator="{ on }">
        <v-btn
          color="primary"
          dark
          v-on="on"
        >
          สถานภาพ
        </v-btn>
      </template>

      <v-list>
        <v-list-tile
          v-for="(item, index) in items"
          :key="index"
          @Click="no"
        >
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </div>    
                </v-flex>

                <!-- ---------  -->
                <v-flex xs4 class> 
                    <p class="text-lg-right sp font-weight-medium title text-lg-right">ค่าลดหย่อนคู่สมรส:</p> 
                </v-flex>
                <v-flex xs6>
                    <p class="text-lg-right sp font-weight-medium title text-lg-right">0</p> 
                </v-flex>
                <v-flex xs2>
                    <p class="text-lg-right sp font-weight-medium title text-lg-right">บาท</p> 
                </v-flex>
             <!-- ---------  -->
                <v-flex xs4 class> 
                    <p class="text-lg-right sp font-weight-medium title text-lg-right">ค่าลดหย่อนบุตร (ไม่จำกัดจำนวน):</p> 
                </v-flex>
                <v-flex xs1>
                    <v-text-field 
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
                <v-flex xs4 class="blue">
                <div >
                    <p class="sp font-weight-medium title ">รวมค่าลดหย่อนบุตร:</p>
                </div>
            </v-flex>
            <v-flex xs6 text-md-right class="blue">
                <div  >
                    <p class="sp font-weight-medium title" mleft>
                         0.00
                    </p>  
                </div>
            </v-flex>
            <v-flex xs2 text-md-left class="blue">
                <div  >
                    <p class="sp font-weight-medium title" mleft>
                         บาท
                    </p>  
                </div>
            </v-flex>

            <!-- ---------  -->
            <v-flex xs4 class> 
                 
                 <p class="text-lg-right sp font-weight-medium title text-lg-right">ค่าลดหย่อน บิดา-มารดาตัวเอง:</p> 
            </v-flex>
           <v-flex xs1>
                <v-text-field
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
                <v-flex xs4 class> 
                 
                 <p class="text-lg-right sp font-weight-medium title text-lg-right">ค่าลดหย่อน บิดา-มารดาคู่สมรส    
    <br>(เฉพาะกรณีคู่สมรสไม่มีรายได้):</p> 
            </v-flex>
           <v-flex xs1>
                <v-text-field
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
     
        </v-layout>
        <v-layout  row wrap class="">
            <v-flex xs4 class="blue">
                <div >
                    <p class="sp font-weight-medium title ">รวมค่าลดหย่อนบิดา-มารดา:</p>
                </div>
            </v-flex>
            <v-flex xs6 text-md-right class="blue">
                <div  >
                    <p class="sp font-weight-medium title" mleft>
                         0.00
                    </p>  
                </div>
            </v-flex>
            <v-flex xs2 text-md-left class="blue">
                <div  >
                    <p class="sp font-weight-medium title" mleft>
                         บาท
                    </p>  
                </div>
            </v-flex>
            

         <!-- ---------  -->
            <v-flex xs4 class> 
                 
                 <p class="text-lg-right sp font-weight-medium title text-lg-right">ค่าลดหย่อน ดูแลคนพิการ:</p> 
            </v-flex>
           <v-flex xs1>
                <v-text-field
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
                    label="percen"
                    value="0"
                    prefix=" "
                ></v-text-field>
            </v-flex>
            
            <v-flex xs1>
                <p class="sp font-weight-medium title text-sm-left">%</p> 
            </v-flex>
            <v-flex xs4>
                <p class="sp font-weight-medium title text-lg-right">0</p> 
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

 <!-- ---------  -->
            <v-flex xs4 class> 
                 
                 <p class="text-lg-right sp font-weight-medium title ">
                    ค่าประกันชีวิต:</p> 
            </v-flex>
           <v-flex xs6>
                <v-text-field
                    label="บาท"
                    value="0"
                    prefix=" "
                ></v-text-field>
            </v-flex>
            
            
            <v-flex xs2>
                <p class="sp font-weight-medium title text-lg-right">บาท</p> 
            </v-flex>
             <!-- ---------  -->
            <v-flex xs4 class="blue">
                <div >
                    <p class="sp font-weight-medium title text-md-center">รวมเงินได้หลังหักค่าใช้จ่ายและค่าลดหย่อน:</p>
                </div>
            </v-flex>
            <v-flex xs6 text-md-right class="blue">
                <div  >
                    <p class="sp font-weight-medium title" mleft>
                         0.00
                    </p>  
                </div>
            </v-flex>
            <v-flex xs2 text-md-left class="blue">
                <div  >
                    <p class="sp font-weight-medium title" mleft>
                         บาท
                    </p>  
                </div>
            </v-flex>


        <v-flex xs12 text-md-center>
                <div  >
                    
                    <v-btn to="calculate4" round color="primary" dark>ต่อไป</v-btn> 
                                      
                </div>
            </v-flex>
        </v-layout>

    
    </v-layout>
    </div>
</v-container>
 
</template>



<script>
import calulate from "./calculate.vue";
import calulate2 from "./calculate2.vue";

  export default {
   name: 'calculate3',
   data(){
       return{
           val: "",
           name: "",
            items: [
        { title: 'โสด' },
        { title: 'หย่า' },
        { title: 'คู่สมรสมีเงินได้(แยกยื่น)' },
        { title: 'คู่สมรสไม่มีเงินได้' }
      ]
       }
   },
   components: {
       calculate2,
       calculate
   }
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
    margin-left: 10px;
    
}
</style>




