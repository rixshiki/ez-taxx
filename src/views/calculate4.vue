
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
                 <p class="text-lg-right sp font-weight-medium title text-lg-right">ค่าบริจาคการศึกษา:</p> 
            </v-flex>
            <v-flex xs1>
                    <v-text-field
                    label="บาท"
                    value="0"
                    prefix=" "
                ></v-text-field>
            </v-flex>
            <v-flex xs1>
                    <p class="text-lg-right sp font-weight-medium title text-lg-right">บาท</p> 
            </v-flex>
            <v-flex xs3>
                    <p class="text-lg-right sp font-weight-medium title text-lg-right">หักได้ตามจริง</p> 
            </v-flex>
            <v-flex xs1>
                    <p class="text-lg-right sp font-weight-medium title text-lg-right">0</p> 
            </v-flex>
            <v-flex xs2>
                    <p class="text-lg-right sp font-weight-medium title text-lg-right">บาท</p> 
            </v-flex>
             



               
             <!-- ---------  -->
     
        </v-layout>
        <v-layout  row wrap class="gray">
            <v-flex xs4 class="blue">
                <div >
                    <p class="sp font-weight-medium title ">รวมเงินได้หลังหักค่าบริจาคการศึกษา:</p>
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
                 <p class="text-lg-right sp font-weight-medium title text-lg-right">ค่าบริจาคอื่นๆ:</p> 
            </v-flex>
            <v-flex xs1>
                    <v-text-field
                    label="บาท"
                    value="0"
                    prefix=" "
                ></v-text-field>
            </v-flex>
            <v-flex xs1>
                    <p class="text-lg-right sp font-weight-medium title text-lg-right">บาท</p> 
            </v-flex>
            <v-flex xs3>
                    <p class="text-lg-right sp font-weight-medium title text-lg-right">หักได้ตามจริง</p> 
            </v-flex>
            <v-flex xs1>
                    <p class="text-lg-right sp font-weight-medium title text-lg-right">0</p> 
            </v-flex>
            <v-flex xs2>
                    <p class="text-lg-right sp font-weight-medium title text-lg-right">บาท</p> 
            </v-flex>
             
             <v-flex xs4 class="green">
                <div >
                    <p class="sp font-weight-medium title ">รวมเงินได้สุทธิ:</p>
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


            <v-flex xs12 text-md-center>
                <div  >
                    
                    <v-btn to="calculate5" round color="primary" dark>ต่อไป</v-btn> 
                                      
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




