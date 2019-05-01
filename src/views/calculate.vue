
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
                <hr><hr>
            </v-flex>
            
            <!-- ---------  -->
            <v-flex xs4 class > 
                 <p class="text-lg-right sp font-weight-medium title text-lg-right">เงินเดือน:</p> 
            </v-flex>
            <v-flex xs8>
                    <v-text-field
                        v-model="User.salary"
                        label="บาท/เดือน"
                        value= "0.00"
                        postfix="บาท"
                        v-on:keyup = "checkval"
                    ></v-text-field>
            </v-flex>
             <!-- ---------  -->
                <v-flex xs4 >
                   
                    <p class="text-lg-right sp font-weight-medium title text-lg-right">โบนัส :</p>
                </v-flex>
                <v-flex xs8>
                    <v-text-field
                        v-model="User.bonus"
                        label="บาท"
                        value="00.00"
                        prefix=" "
                        v-on:keyup = "checkval"
                    ></v-text-field>
                </v-flex>
             <!-- ---------  -->
             
            <!-- ---------  -->
                <v-flex xs4 >
                    
                    <p class="text-lg-right sp font-weight-medium title text-lg-right">รายได้อื่นๆ ทั้งปี :</p>
                </v-flex>
                <v-flex xs8>
                    <v-text-field 
                        v-model="User.income"
                        label="บาท"
                        value="00.00"
                        suffix=" "
                        v-on:keyup = "checkval"
                    ></v-text-field>
                </v-flex>
             <!-- ---------  -->
        <v-flex xs4 class="green">
                <div >

 
                    <p class="sp font-weight-medium title ">รายได้ทั้งหมดต่อปี :</p>
                </div>
            </v-flex>
            <v-flex xs6 text-md-right class="green">
                <div  >
                    <p class="sp font-weight-medium title">
                        {{User.mYear}}
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
                    
                    <v-btn to="calculate2" round color="primary" dark>ต่อไป</v-btn> 
                                      
                </div>
            </v-flex>
        </v-layout>
        <v-layout  row wrap >
            
     
        </v-layout>

    </v-layout>
    </div>
</v-container>
 
</template>



<script>
import { mapState,mapMutations } from 'vuex'

export default {
   name: 'calculate',
   data(){
       return{
           
       }
   },
   computed: {
        ...mapState(['User'])
    },
    methods: {
        checkval: function(event){
            if(this.User.salary == ''){
                this.User.salary = 0
            }
            if(this.User.bonus == ''){
                this.User.bonus = 0
            }
            if(this.User.income == ''){
                this.User.income = 0
            }

            this.User.mYear = parseFloat(this.User.salary)*12+parseFloat(this.User.bonus)+parseFloat(this.User.income)
        }
    },
    mounted(){
          this.User.mYear = parseFloat(this.User.salary)*12+parseFloat(this.User.bonus)+parseFloat(this.User.income)
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




