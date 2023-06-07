
<script setup>

import { ref } from 'vue'

let username = ref('')
let password = ref('')
let error = ref('')

//console.log value of mail


const login = async () => {
 
    console.log('login');
  error.value = ''
 
  fetch('https://donutello-api.onrender.com/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "username": username.value,
            "password": password.value
        })
        }).then(response => response.json()).then(json => {
            console.log(json);


            if (json.status == "success") {


                console.log("success");

                //when successful login, save token in local storage
                let token = json.data.token;
                localStorage.setItem('token', token);

                // when successful login, redirect to gallery page
                window.location.href = "#/gallery"

            } else {
                console.log("failed");
            }
        });

}


</script>

<template>
    <form name="login-form" @submit.prevent="login" >
      <div class="">
        <label for="mail">Username: </label>
        <input id="username" type="username" v-model="username" />
      </div>
      <div class="">
        <label for="password">Password: </label>
        <input id="password" type="password" v-model="password"/>
      </div>
     
        <button type="submit" class="btn btn-primary" >Login</button>
    </form>
</template>

<style scoped>

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10%;
}




</style>
