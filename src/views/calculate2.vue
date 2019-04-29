
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
                 <p class="text-lg-right sp font-weight-medium title text-lg-right">ค่าใช้จ่าย:</p> 
            </v-flex>
            <v-flex xs6>
                    <p class="text-lg-right sp font-weight-medium title text-lg-right">100,000</p> 
            </v-flex>
            <v-flex xs2>
                    <p class="text-lg-right sp font-weight-medium title text-lg-right">บาท</p> 
            </v-flex>
             <!-- ---------  -->
                <v-flex xs4 class> 
                    <p class="text-lg-right sp font-weight-medium title text-lg-right">ค่าลดหย่อน:</p> 
                </v-flex>
                <v-flex xs6>
                    <p class="text-lg-right sp font-weight-medium title text-lg-right">60,000</p> 
                </v-flex>
                <v-flex xs2>
                    <p class="text-lg-right sp font-weight-medium title text-lg-right">บาท</p> 
                </v-flex>
             <!-- ---------  -->
           
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
             <!-- ---------  -->
             <!-- ---------  -->
     
        </v-layout>
        <v-layout  row wrap >
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
            <v-flex xs12 text-md-center >
                <div  >
                    
                    <v-btn to="calculate3" round color="primary" dark>ต่อไป</v-btn> 
                                      
                </div>
            </v-flex>
     
        </v-layout>

    
    </v-layout>
    </div>
</v-container>
 
</template>



<script>
  export default {
    data: () => ({
      items: [
        { title: 'โสด' },
        { title: 'หย่า' },
        { title: 'คู่สมรสมีเงินได้(แยกยื่น)' },
        { title: 'คู่สมรสไม่มีเงินได้' }
      ]
    })
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




