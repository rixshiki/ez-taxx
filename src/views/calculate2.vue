
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
                <h2 class="text-md-center headline">ค่าใช้จ่ายและค่าลดหย่อนส่วนตัว</h2>
                <hr><hr>
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
                    <p class="text-lg-right sp font-weight-medium title text-lg-right">ค่าลดหย่อนส่วนตัว:</p> 
                </v-flex>
                <v-flex xs6>
                    <p class="text-lg-right sp font-weight-medium title text-lg-right">60,000</p> 
                </v-flex>
                <v-flex xs2>
                    <p class="text-lg-right sp font-weight-medium title text-lg-right">บาท</p> 
                </v-flex>
             <!-- ---------  -->
           
               
        
        </v-layout>
        <v-layout  row wrap >
            <v-flex xs12 > 
                <h2 class="text-md-center headline">คำนวณภาษี</h2>
                <hr><hr>
            </v-flex>

            <v-flex xs4 class> 
                    <p class="text-lg-right sp font-weight-medium title text-lg-right">รวมค่าใช้จ่ายและค่าลดหย่อนส่วนตัว:</p> 
                </v-flex>
                <v-flex xs6>
                    <p class="text-lg-right sp font-weight-medium title text-lg-right">0</p> 
                </v-flex>
                <v-flex xs2>
                    <p class="text-lg-right sp font-weight-medium title text-lg-right">บาท</p> 
                </v-flex>

                <v-flex xs4 class> 
                    <p class="text-lg-right sp font-weight-medium title text-lg-right">รวมเงินได้สุทธิ:</p> 
                </v-flex>
                <v-flex xs6>
                    <p class="text-lg-right sp font-weight-medium title text-lg-right">0.00</p> 
                </v-flex>
                <v-flex xs2>
                    <p class="text-lg-right sp font-weight-medium title text-lg-right">บาท</p> 
                </v-flex>

            <v-flex xs4 class="green">
                <div >
                    <p class="sp font-weight-medium title ">ภาษีที่คุณต้องจ่ายปีนี้:</p>
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
            <v-flex xs12 text-md-center >
                <div  >
                    <v-btn to="calculate" round color="primary" dark>ก่อนหน้า</v-btn> 
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
   name: 'calculate2',
   data(){
       return{
            items: [
                    { title: 'โสด' },
                    { title2: 'หย่า' },
                    { title3: 'คู่สมรสมีเงินได้(แยกยื่น)' },
                    { title4: 'คู่สมรสไม่มีเงินได้' }
                    ]
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

            this.User.total = parseFloat(this.User.salary)*12+parseFloat(this.User.bonus)+parseFloat(this.User.income)
        }
    },
    mounted(){
          this.User.total = parseFloat(this.User.salary)*12+parseFloat(this.User.bonus)+parseFloat(this.User.income)
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
    margin-right: 10px;
    
}
</style>




