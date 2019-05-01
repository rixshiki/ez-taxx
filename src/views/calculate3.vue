
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
                <h2 class="text-md-center headline">ค่าลดหย่อนคู่สมรส</h2>
                <hr><hr>
            </v-flex>
            

            <!-- ---------  -->
                <v-flex xs4 class> 
                    <p class="text-lg-right sp font-weight-medium title text-lg-right">สถานภาพ:</p> 
                </v-flex>
                <v-flex xs8>
<div class="text-xs-left">
<!--    <select v-model="selected">
  <option disabled value="">Please select one</option>
  <option>A</option>
  <option>B</option>
  <option>C</option>
</select>
<span>Selected: {{ selected }}</span> -->
 
          <v-menu offset-y>
            <v-btn
              slot="activator"
              color="primary"
              dark
            >
              <span v-if="this.locale === '1'">โสด</span>
              <span v-if="this.locale === '2'">หย่า</span>
              <span v-if="this.locale === '3'">คู่สมรสมีเงินได้(แยกยื่น)</span>
              <span v-if="this.locale === '4'">คู่สมรสไม่มีเงินได้</span>
            </v-btn>
            <v-list>
              <v-list-tile
                v-for="(locale, index) in locales"
                :key="index"
                @click="switchLocale(index)"
              >
                <v-list-tile-title>{{ locale.title }}</v-list-tile-title>
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
                    
                    <p class="text-lg-right sp font-weight-medium title text-lg-right" 
                     v-if="this.locale === '4'">60,000
                     </p> 
                     <p class="text-lg-right sp font-weight-medium title text-lg-right" 
                     v-else>0
                     </p> 
                </v-flex>
                <v-flex xs2>
                    <p class="text-lg-right sp font-weight-medium title text-lg-right">บาท</p> 
                </v-flex>
             <!-- ---------  -->
             <v-flex xs12 > 
                <h2 class="text-md-center headline">ค่าลดหย่อนบุตร</h2>
                <hr><hr>
            </v-flex>
                <v-flex xs4 class> 
                    <p class="text-lg-right sp font-weight-medium title text-lg-right">จำนวดบุตรเกิดก่อน พ.ศ. 2561:</p> 
                </v-flex>
                <v-flex xs1>
                    
                    <v-text-field 
                        v-model.number="sun" type="number" step="1"
                        label="คน"
                        value="0"
                        prefix=" "
                    ></v-text-field> 
                </v-flex>
                <v-flex xs5>
                    <p class="text-lg-right sp font-weight-medium title text-lg-right">{{sun}}</p> 
                </v-flex>
                <v-flex xs2>
                    <p class="text-lg-right sp font-weight-medium title text-lg-right">บาท</p> 
                </v-flex>
                <!--------------------------------------->
                <!-- ---------  -->
                <v-flex xs4 class> 
                    <p class="text-lg-right sp font-weight-medium title text-lg-right">บุตรที่เกิดตั่งแต่ พ.ศ.2561เป็นต้นไป:</p> 
                </v-flex>
                <v-flex xs1>
                    
                    <v-text-field 
                        v-model.number="sun2" type="number" step="1"
                        label="คน"
                        value="0"
                        prefix=" "
                    ></v-text-field> 
                </v-flex>
                <v-flex xs5>
                    <p class="text-lg-right sp font-weight-medium title text-lg-right">{{sun2}}</p> 
                </v-flex>
                <v-flex xs2>
                    <p class="text-lg-right sp font-weight-medium title text-lg-right">บาท</p> 
                </v-flex>
                <!--------------------------------------->
                <v-flex xs4 class> 
                    <p class="text-lg-right sp font-weight-medium title text-lg-right">จำนวนบุตรบุญธรรม:</p> 
                </v-flex>
                <v-flex xs1>
                    
                    <v-text-field 
                        v-model.number="sun3" type="number" step="1"
                        label="คน"
                        value="0"
                        prefix=" "
                    ></v-text-field> 
                </v-flex>
                <v-flex xs5>
                    <p class="text-lg-right sp font-weight-medium title text-lg-right">{{sun3}}</p> 
                </v-flex>
                <v-flex xs2>
                    <p class="text-lg-right sp font-weight-medium title text-lg-right">บาท</p> 
                </v-flex>
                <!--------------------------------------->

                <v-flex xs4 class="green">
                <div >
                    <p class="sp font-weight-medium title ">รวมค่าลดหย่อนบุตร:</p>
                </div>
            </v-flex>
            <v-flex xs6 text-md-right class="green">
                <div  >
                    <p class="sp font-weight-medium title" mleft>
                         0
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
            <v-flex xs12 > 
                <h2 class="text-md-center headline">ค่าลดหย่อนบิดา-มารดา</h2>
                <hr><hr>
                </v-flex>
            <v-flex xs4 class> 
                 
                 <p class="text-lg-right sp font-weight-medium title text-lg-right">ค่าลดหย่อน บิดา-มารดาตัวเอง:</p> 
            </v-flex>
           <v-flex xs1>
                <v-text-field 
                        v-model.number="perent" type="number" step="1"
                        label="คน"
                        value="0"
                        prefix=" "
                    ></v-text-field>
            </v-flex>
            <v-flex xs5>
                <p class="text-lg-right sp font-weight-medium title text-lg-right">{{perent}}</p> 
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
                        v-if="this.locale=== '4'"
                        v-model.number="perent2" type="number" step="1"
                        label="คน"
                        value="0"
                        prefix=" "
                    ></v-text-field>
                <v-text-field 
                        v-else
                        disabled
                        v-model.number="nothave" type="number" step="1"
                        label="คน"
                        value="0"
                        prefix=" "
                    ></v-text-field>
            </v-flex>
            <v-flex xs5>
                <p class="text-lg-right sp font-weight-medium title text-lg-right">{{perent2}}</p> 
            </v-flex>
            <v-flex xs2>
                <p class="text-lg-right sp font-weight-medium title text-lg-right">บาท</p> 
            </v-flex>
             <!-- ---------  -->
               
             <!-- ---------  -->
             <v-flex xs4 class="green">
                <div >
                    <p class="sp font-weight-medium title ">รวมค่าลดหย่อนบิดา-มารดา:</p>
                </div>
            </v-flex>
            <v-flex xs6 text-md-right class="green">
                <div  >
                    <p class="sp font-weight-medium title" mleft>
                         {{perent}}
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
        
        <v-flex xs12 text-md-center>
                <div  >
                    <v-btn to="calculateEd2" round color="primary" dark>ก่อนหน้า</v-btn> 
                    <v-btn to="calculate4" round color="primary" dark>ต่อไป</v-btn> 
                                      
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
    margin-left: 10px;
    
}
</style>




