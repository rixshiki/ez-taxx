
<template>
<v-container   fill-height>
    <div class="tax-form" id="form-first">

    <v-layout column wrap  justify-center class="white">

        <v-layout  row wrap  justify-center >
            <v-flex xs12 >
                <h1 class="text-md-center display-2">EZ - TAX</h1>
            </v-flex>
            <v-spacer></v-spacer>
            
            
             <!-- ---------  -->

        <v-flex xs12 > 
                <h2 class="text-md-center headline">ต่าลดหย่อยด้านการบริจาค</h2>
                <hr><hr>
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
            <v-flex xs4 class="green">
                <div >
                    <p class="sp font-weight-medium title ">รวมเงินได้หลังหักค่าบริจาคการศึกษา:</p>
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
                    <p class="sp font-weight-medium title text-md-center">รวมเงินได้สุทธิ:</p>
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



        </v-layout>
        <v-layout  row wrap class="">
            
            

         <!-- ---------  -->

            <!-- ---------  -->
            <v-flex xs12 > 
                <h2 class="text-md-center headline">คำนวณภาษี</h2>
                <hr><hr>
            </v-flex>
            <v-flex xs4 class> 
                 
                 <p class="text-lg-right sp font-weight-medium title text-lg-right">รวมค่าใช้จ่ายและค่าลดหย่อนทั้งหมด:</p> 
            </v-flex>
           <v-flex xs6>
               <p class="text-lg-right sp font-weight-medium title text-lg-right">0</p> 
            </v-flex>
            
            <v-flex xs2>
                <p class="text-lg-right sp font-weight-medium title text-lg-right">บาท</p> 
            </v-flex>
             <!-- ---------  -->

             <!-- ---------  -->
            <v-flex xs4 class> 
                 
                 <p class="text-lg-right sp font-weight-medium title text-lg-right">รวมเงินได้สุทธิ:</p> 
            </v-flex>
           <v-flex xs6>
               <p class="text-lg-right sp font-weight-medium title text-lg-right">0</p> 
            </v-flex>
            
            <v-flex xs2>
                <p class="text-lg-right sp font-weight-medium title text-lg-right">บาท</p> 
            </v-flex>
             <!-- ---------  -->
            <v-flex xs4 class> 
                 
                 <p class="text-lg-right sp font-weight-medium title text-lg-right">ภาษีที่คุณต้องจ่ายปีนี้:</p> 
            </v-flex>
           <v-flex xs6>
               <p class="text-lg-right sp font-weight-medium title text-lg-right">0</p> 
            </v-flex>
            
            <v-flex xs2>
                <p class="text-lg-right sp font-weight-medium title text-lg-right">บาท</p> 
            </v-flex>
              <!-- ---------  -->
            
             <!-- ---------  -->
            <v-flex xs4 class="orange">
                <div >
                    <p class="sp font-weight-medium title text-md-center">ท่านประหยัดภาษีได้:</p>
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
                    <v-btn to="calculate4" round color="primary" dark>ก่อนหน้า</v-btn> 
                    <v-btn to="/index" round color="primary" dark>สำเร็จ</v-btn> 
                                      
                </div>
            </v-flex>
        </v-layout>

    
    </v-layout>
    </div>
</v-container>
 
</template>



<script>
export default {
    data() {
        return {
           
            
        }
    },
    
    
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




