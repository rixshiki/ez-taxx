<template>
  <v-layout row align-center justify-center fill-height class="red">
    
      <!--<template v-slot:activator="{ on }">
        <v-btn color="transparent" dark v-on="on">เข้าสู่ระบบ</v-btn>
      </template> -->
      <v-card>
          <br>
          <center>
          <span class="headline">เข้าสู่ระบบ</span>
        </center>
        <v-card-text>
          <v-container grid-list-md >
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field
                v-model="email"
                :rules="[rules.required, rules.email]"
                label="E-mail"
                ></v-text-field>
        </v-flex>
              <v-flex xs12>
                <v-text-field
            v-model="password"
            :append-icon="show1 ? 'visibility' : 'visibility_off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Normal with hint text"
            hint="At least 8 characters"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*you must have login first</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <!--<v-btn color="blue darken-1" flat @click="dialog = false">ออกจากหน้านี้</v-btn> -->
          <v-btn to="/index" color="blue darken-1" flat @click="dialog = false">เข้าสู่ระบบ</v-btn>
        </v-card-actions>
        
      </v-card>
    <!--</v-dialog>-->
  </v-layout>
</template>

<script>
  export default {
    data ()
    {
      return {
        show1: false,
        dialog: true,
        title: 'Preliminary report',
        email: '',
        password: 'Password',
        rules: {
          required: value => !!value || 'Required.',
          counter: value => value.length <= 20 || 'Max 20 characters',
          min: v => v.length >= 8 || 'Min 8 characters',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          }
        }
      }
    }
  }
</script>

<!--<template lang="html">
    <v-dialog width="320px">
        <v-btn class="transparent white--text" slot="activator">เข้าสู่ระบบ</v-btn>
        <v-card>
            <v-card-title>

                <center>
                <form method="post" action="">
                <h2>ลงทะเบียน</h2>
                <p><input type="email" name="email" id="email" class="form-control boxRegis" placeholder="อีเมล" v-model="email"> </p>
                <p><input type="password" name="password" id="password" class="form-control boxRegis" placeholder="รหัสผ่าน" v-model="password" minlength="8"> </p>
                <p><input v-model="message" placeholder="คำตอบ" class="form-control boxRegis"></p>
            <div class="goRight">
                <v-btn color="info"><a href="#sendToMail" class="white--text">ลงทะเบียน</a></v-btn>
            </div>
    
            </form>
            </center>
            </v-card-title>
        </v-card>
    </v-dialog>
</template>


<script>
  export default {

  }
</script>


<style>
        .goLeft {
                float: left;
            }
        .goRight {
                float: right;
            }
        .container {
            margin: 50px auto;
            /* คือการปรับส่วนของ container ให้อยู่ตรงกลาง*/
            width: 640px;
            /*ขนาดความกว้างของที่เก็บนั้นๆ*/

        }

        .login {
            position: relative;
            margin: 0 auto;
            /*กำหนดให้อยู่ตรงกลาง*/
            padding: 40px 20px 20px;
            /*padding จะเป็นการกำหนดระยะห่างจากข้อความภายใน login ถึงขอบ*/
            width: 400px;
            /*ความกว้าง*/
            height: 500px;
            /*ความสูง*/
            background: white;
            /*สีของพื้นหลัง*/
            border-radius: 7px;
            border: 1px solid #ccc;
            /*ปรับแต่งขอบ*/
        }

        .boxRegis {
            position: relative;
            /*margin: 0 auto;
            /*กำหนดให้อยู่ตรงกลาง*/
            /*padding: 40px 20px 20px;
            /*padding จะเป็นการกำหนดระยะห่างจากข้อความภายใน login ถึงขอบ*/
            /*width: 280px;
            /*ความกว้าง*/
            /*eight: 10px;
            /*ความสูง*/
            /*background: white;
            /*สีของพื้นหลัง*/
            /*border-radius: 7px;*/
            /*ปรับแต่งขอบ*/
            margin: 0 auto/*5px 60px 0px 55px*/;
            padding: 0 10px;
            width: 280px;
            height: 40px;
            color: #404040;
            background: white;
            border: 1px solid #ccc;
        }

        /*เป็นส่วนของ Header ของ login ครับ */

        .login h1 {
            margin: -20px -20px 0px;
            line-height: 40px;
            font-size: 15px;
            font-weight: normal;
            color: #777;
            text-align: center;
            text-shadow: 0 1px white;
        }

        .login h2 {
            margin-top: -20px;
            font-family: spmk;
            font-size: 30px;
            color: #444;
        }

        .login p {
            margin: 20px 0 0;
        }

        .login p:first-child {
            margin-top: 0;
        }

        .login select{
            height: 30px;
            
        }

        /* ขนาดกับชนิดของ font ในช่อง input */

        input {
            font-family: 'Lucida Grande', Tahoma, Verdana, sans-serif;
            font-size: 14px;
        }


        /*  เป็นการกำหนดของช่องที่เรา Input   แต่เฉพาะตอนที่เรากด เลยใช้คำสั่ง focus พอกดปุ๊ปเปลี่ยนสีไรงี้*/

        /*input[type=email]:focus,
        input[type=password]:focus,
        input[type=password]:focus{
            border-color: #e4e4e4;
            outline-color: #e4e4e4;
            outline-offset: 0;
        }

        /*  เป็นการกำหนดของปุ่มของเราครับ   */

        input[type=submit],
        input[type=button]{
            margin: 0px -60px 0px 100px;
            padding: 0 30px;
            height: 40px;
            font-size: 12px;
            font-weight: bold;
            color: #FFFFFF;
            background: #0099FF;
            border: 1px #CCC;
            outline: 0;
        }



        /*  เป็นการกำหนดของปุ่มของเราครับ แต่เป็นส่วนของเรากดครับ กดปุ๊ปสีเปลี่ยนครับ  */

        input[type=submit]:active,
        input[type=button]:active{
            background: #00CCFF;
            border-color: #9eb9c2 #b3c0c8 #b4ccce;
            -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.2);
            box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.2);
        }

        .lt-ie9 input[type=email],
        .lt-ie9 input[type=password] {
            line-height: 34px;
        }

        .navLiH a:hover {
            background-color: #11144C;
        }

        .pbLiH a:hover {
            color: #11144C;
        }

        @font-face {
            font-family: spmk;
            src: url('supermarket.ttf') format('truetype');
        }
</style>-->