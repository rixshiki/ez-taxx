
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
                <h2 class="text-md-center headline">รายได้ที่ต้องเสียภาษีของคุณ</h2>
                <hr>
            </v-flex>
            
            <!-- ---------  -->
            <v-flex xs4 class> 
                 
                 <p class="text-lg-right sp font-weight-medium title text-lg-right">เงินเดือน:</p> 
            </v-flex>
            <v-flex xs8>
                    <v-text-field
                        label="บาท/เดือน"
                        value="00.00"
                        prefix=" "
                    ></v-text-field>
            </v-flex>
             <!-- ---------  -->
                <v-flex xs4 >
                   
                    <p class="text-lg-right sp font-weight-medium title text-lg-right">โบนัส :</p>
                </v-flex>
                <v-flex xs8>
                    <v-text-field
                        label="บาท"
                        value="00.00"
                        prefix=" "
                    ></v-text-field>
                </v-flex>
             <!-- ---------  -->
            <!-- ---------  -->
                <v-flex xs4 >
                    
                    <p class="text-lg-right sp font-weight-medium title text-lg-right">รายได้อื่นๆ ทั้งปี :</p>
                </v-flex>
                <v-flex xs8>
                    <v-text-field
                        label="บาท"
                        value="00.00"
                        suffix=" "
                    ></v-text-field>
                </v-flex>
             <!-- ---------  -->
     
        </v-layout>
        <v-layout  row wrap >
            <v-flex xs4 class="blue">
                <div >
                    <p class="sp font-weight-medium title ">รายได้ทั้งหมดต่อปี :</p>
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
                    
                    <v-btn to="calculate2" round color="primary" dark>ต่อไป</v-btn> 
                                      
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
            e1: 0,
            radios: 'radio-1'
            
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




