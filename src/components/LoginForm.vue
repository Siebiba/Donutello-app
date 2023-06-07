
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
  <div class="login">
    <h1>Log in</h1>
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
  </div>
</template>

<style scoped>

.login
{
  width: 100%;
  max-width: 400px;
  margin: 6rem auto;
  padding: 2em;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border-radius: 1em;
}

.login h1
{
  text-align: center;
  font-size: 1.5em;
  margin: 0 0 1em;
}

.login label
{
  font-size: 1.2em;
  margin-top: 1rem;
}

.login input {
border: none;
  font-size: 1.2em;
  padding: 0.5em;
  border-radius: 0.4em;
  border: 1px solid #ccc;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  width: 100%;

}



.login-form{
  display: flex;
  flex-direction: column;
}
.btn
{
  font-size: 1.2em;
  padding: 0.6em 2em;
  font-weight: bold;
  border-radius: 2em;
  border: none;
  color: white;
  background-color: #e72870;
  cursor: pointer;
  margin-top: 20px;
}

.btn:active
{
  position: relative;
  top: 1px;
}

.hidden
{
  display:none;
}

.alert
{
  background-color: #B4C4E7;
  padding: 0.5em;
  margin-bottom: 1em;
  color: #32549d;
}

.btn:hover
{
  background-color: #3ec7d1;
  color: #ffffff;
  cursor: pointer;
}




</style>
