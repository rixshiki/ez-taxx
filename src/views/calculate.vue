<template class="red">
    <v-app>
    
    
    
        <div class="container ">
    
    
    
            <!--<space class="space"></space>-->
    
    
    
            <header class="header">
     
                <h1>EZ - TAX</h1>

            </header>
    
            <section class="main">

                <v-stepper v-model="e1" class="gray" height="400">

                    <v-stepper-header>

                        <v-stepper-step :complete="e1 > 1" step="1" editable>เริ่มต้น</v-stepper-step>
   
                        <v-divider></v-divider>
    
                        <v-stepper-step :complete="e1 > 2" step="2" editable>คำถามที่ 1 </v-stepper-step>
  
                        <v-divider></v-divider>
   
                        <v-stepper-step step="3" editable>คำถามที่ 2 </v-stepper-step>
                    </v-stepper-header>
                    <v-stepper-items>

                        <v-stepper-content step="1">
 
                            <v-card class="mb-5" color="grey lighten-4" height="200px">
    
                                <div class="text-align: center">
    
                                    <h2>คำนวณภาษีปี 2561 ได้แล้ว! เพื่อเงินคืนภาษีสูงสุด</h2>
    
                                </div>
    
                                <div>
    
                                    <br>
    
                                    <p>
    
                                        คำนวณภาษีปี 2561 กับ iTAX ดีกว่ายังไง
    
                                    </p>
    
                                </div>
    
                                <ul class="text-align: left">
    
                                    <li>ได้เงินคืนภาษีสูงสุดแม้ไม่รู้เรื่องภาษี</li>
    
                                    <li>ค้นหาสิทธิประโยชน์ภาษีให้ครบทุกรายการ</li>
    
                                    <li>เช็คให้ ครบทุกเงื่อนไขลดหย่อน</li>
    
                                    <li>ได้แบบฟอร์มพร้อมใช้ยื่นได้จริงแค่เซ็นชื่อก็ใช้ยื่นได้เลย</li>
    
                                    <li>แนะนำวิธียื่นแบบที่ประหยัดภาษีสูงสุด</li>
    
                                </ul>
    
                            </v-card>

                            <v-btn color="primary" @click="e1 = 2">
                                Continue    
                            </v-btn>
 
                            <v-btn flat>Cancel</v-btn>
                        </v-stepper-content>
                        <v-stepper-content step="2">
                            <v-card class="mb-5" color="grey lighten-4" height="200px">
    
                              <v-div class="text-align: center padding: 10px;">
                                <h1>สถานะต่อไปนี้ตรงกับคุณรึเปล่า?</h1>
                              </v-div>
                              <v-container  class="text-align:left">
  <!--  <p>{{ radios || 'null' }}</p> -->
                                <v-radio-group v-model="radios" :mandatory="false">
                                    <v-radio label="มีบัตรประจำตัวคนพิการ" value="Radio 1"></v-radio>
                                    <v-radio label="แพทย์รับรองว่าทุพพลภาพ" value="radio-2"></v-radio>
                                    <v-radio label="ไม่ตรงกับข้อใดเลย" value="radio--"></v-radio>
                                </v-radio-group>
                                </v-container>
    
                            </v-card>
                            <v-btn color="primary" @click="e1 = 3">
                                Continue
                            </v-btn>
                            <v-btn flat>Cancel</v-btn>
                        </v-stepper-content>
                        <v-stepper-content step="3">
                            <v-card class="mb-5" color="grey lighten-4" height="200px">
    
                                <v-div class="text-align: center padding: 10px;">
    
                                    <h1>คุณอยู่ในไทยถึง 180 วันรึยัง?</h1>
    
                                </v-div>
                                <v-container  class="text-align:left">
  <!--  <p>{{ radios || 'null' }}</p> -->
                                <v-radio-group v-model="rad" :mandatory="false">
                                    <v-radio label="ถึง" value="Radio-3"></v-radio>
                                    <v-radio label="ไม่ถึง" value="radio-4"></v-radio>
                                </v-radio-group>
                                </v-container>
    
                            </v-card>
                            <v-btn color="primary" @click="e1 = 1">
                                Continue
                            </v-btn>

                            <v-btn flat>Cancel</v-btn>

                        </v-stepper-content>

                    </v-stepper-items>

                </v-stepper>
    
    
    
            </section>
    
    
    
            <footer class="footer">
    
                Footer
    
            </footer>
    
    
    
        </div>
    
    
    
    </v-app>
</template>

<script>
export default {
    data() {
        return {
            e1: 0,
            radios: 'radio-1'
        }
    }
}
</script>

<style>
.container {
    display: grid;
    /* มันคือ <grid-template-rows> / <grid-template-columns> */
    grid-template: "header header header header" 1fr/* เฮดเดอ กินเพื่อนที่ 2 แล้วบน*/
    "main main main main" 3fr "main main main main" 3fr "footer footer footer footer" 1fr / 1fr 1fr 1fr 1fr;
    color: black;
    font-weight: bold;
    /*text-align: center;*/
    grid-gap: 10px;
    /* ช่องว่าระหว่าง grid */
}

.container>* {
    padding: 10px;
}

.header {
    /*background: #8cc152;*/
    /* ที่เหลือก็แค่บอกว่า Grid Item แต่ละตัวจะวางไว้บนพื้นที่ชื่ออะไร */
    grid-area: header;
    text-align: center;
}

.main {
    /*background: #f6bb42;*/
    grid-area: main;
    padding: 20px;
}

.sidebar {
    /*background: #e9573f;*/
    grid-area: sidebar;
}

.footer {
    grid-area: footer;
    text-align: right;
}

.my {
    background: #d7704d;
    grid-area: my;
}

.my1 {
    background: #130c0a;
    grid-area: my1;
}

.space {
    background: #fff;
    grid-area: space;
}

.space2 {
    background: #fff;
    grid-area: space2;
}
</style>
