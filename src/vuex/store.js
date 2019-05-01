import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)


const store = new Vuex.Store({
    state: { // data
        User: { 
            /*email: "test1@hotmail.com",
            password: "testez",
            name: "I am EZ-TAX",
            salary: 0,
            bonus: 0,
            income: 0,
            status: 0,
            nChildB2561: 0,
            nChildA2561: 0,
            nProtege: 0,
            nParent: 0,
            nParentS: 0,
            nDisabled: 0,
            mSocial: 0,
            mGPF: 0,
            mHomeloan: 0,
            mRMF: 0,
            mLTF: 0,
            mLife: 0,
            mPension: 0,
            mDstudy: 0,
            mDonate: 0,
            
            mYear: 0,
            mNetB: 0,
            taxB: 0,
            mSpouse: 0,
            mChild: 0,
            mParent: 0,
            mDisabled: 0,
            mNetA: 0,
            mNetAD: 0*/
        }
    },  
    mutations: {
      // mutation (state, payload)
      SET_USER: (state, payload) => {
        //console.log('get user', payload)
        state.User = payload
      }
    },
})

export default store;