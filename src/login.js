import './assets/login.css'

//import the createApp function from the Vue runtime
import { createApp } from 'vue'
//import the Login.vue component
import Login from './Login.vue'
//create a new Vue app and mount it to the #login in the login.html
createApp(Login).mount('#login')
