<template>

<v-container fluid class="bg1">
    <ul class="pageBar">
            <router-link to="/index"><li class="goLeft pbLiH navTextG black--text" @click="handleOk">การคำนวณภาษี</li></router-link>
            <router-link to="/advDiscountTax"><li class="goLeft pbLiH"><a class="navTextG" href="">วิธีลดหย่อนภาษีเพิ่มเติม</a></li></router-link>
            <router-link to="/contact"><li class="goLeft pbLiH"><a class="navTextG" href="">ติดต่อเรา</a></li></router-link>
        </ul>
    <center>
        
        <div class="textNormal goBottom white--text">
            <h1>คำนวณภาษีเองง่ายๆ ได้ทุกที่ด้วย EZ-Tax</h1>
        </div>
        <div class="jumbotron"><router-link to="/calculate" >
        <a href="" class="button">เริ่มคำนวณภาษี</a></router-link></div>
    </center>

    <!--test-->
    <h1>{{User}}</h1>

</v-container>

</template>

<script>
import { mapState,mapMutations } from 'vuex'
import axios from 'axios'
import { request } from 'http';
//const request = axios.create({ withCredentials: false });

export default {
    data () {
    return {
            email: "test1@hotmail.com", 
            password: "testez"
        }
    },
    computed: {
    ...mapState(['User'])
    },
    methods: {
        ...mapMutations(['SET_USER']),
        handleOk(evt) {
          //request
          axios.post('http://localhost:3000/users/login',{
                email: this.email, 
                password: this.password
            })
            .then(res => {
                this.SET_USER(res.data[0])
            })
            .catch(err=>{
            console.log(err)
      })
        }
    },
    mounted() {
        
    }
  }
</script>

<style>
            .textNormal{
                font-family: spmk;
                color: #707070;
            }

            .goBottom{
                margin-top: 350px;
                margin-bottom: 0%;
            }

            .jumbotron {
                font-family: spmk;
                font-size: 16px;
                padding: 20px 0px;
                background-size: cover;
                text-align: center;
                color: #fff;
                position: relative;
            }

            .button {
                font-family: spmk;
                display: inline-block;
                border: 2px solid #11144C;
                padding: 10px 20px;
                color: #11144C;
                text-decoration: none;
                transition: 0.3s;
                line-height: 30px;
                border-radius: 100px;
            }

            .button:hover {
                background: #11144C;
                color: white;
            }

            .pageBar {
                font-family: spmk;
                font-size: 20px;
                list-style-type: none;
                width: 650px;
                margin: 10px auto;
                padding: 5px 40px;
                overflow: auto;
                background-color: white;
                line-height: 1.33;
                border-radius: 100px;
            }
            .goLeft {
                float: left;
            }
            .goRight {
                float: right;
            }
            .navTextG {
                display: block;
                color: #330505;
                text-align: center;
                padding: 14px 40px;
                text-decoration: none;
            }
            .pbLiH a:hover {
                color: #11144C;
            }
            .bg1 {
                background-image: url("background.jpg");
                background-position: center;
                -webkit-background-size: cover;
                -moz-background-size: cover;
                -o-background-size: cover;
                background-size: cover;
            }
            @font-face {
            font-family: spmk;
            src: url('supermarket.ttf') format('truetype');
           }
</style>
