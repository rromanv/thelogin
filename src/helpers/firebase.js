import Vue from 'vue'

import firebase from 'firebase/app'
import 'firebase/firebase-auth'

import * as firebaseui from 'firebaseui'

const firebaseConfig = {
  apiKey: 'AIzaSyANeaxy6DaasuyQmcctNL0ZYAxZCcP7_Eo',
  authDomain: 'loginexample-eb5c9.firebaseapp.com',
  databaseURL: 'https://loginexample-eb5c9.firebaseio.com',
  projectId: 'loginexample-eb5c9',
  storageBucket: 'loginexample-eb5c9.appspot.com',
  messagingSenderId: '1018077978254',
  appId: '1:1018077978254:web:58e72fc7c399c1995c33df'
}

firebase.initializeApp(firebaseConfig)
const ui = new firebaseui.auth.AuthUI(firebase.auth())

Vue.prototype.$firebase = firebase
Vue.prototype.$firebaseui = ui
