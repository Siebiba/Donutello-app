<script setup>

import { onMounted, reactive, ref } from 'vue'

let donutOrders = reactive({ donuts: [] });

onMounted(() => {
    fetch('https://donutello-api.onrender.com/api/v1/donuts', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    }).then(response => response.json()).then(json => {
        console.log(json);
  //stringefy json data
    let data = JSON.stringify(json);
    console.log(data);
    //parse json data
    let parsedData = JSON.parse(data);
    //assign parsed data to reactive object
    donutOrders.donuts = parsedData;
    console.log(donutOrders.donuts);

    });
})

/*
//export default donutOrders;
export default {
    data() {
        return {
            donutOrders: []
        }
    },
    mounted() {
        fetch('http://localhost:3000/api/v1/donuts', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
        })

        .then(response => response.json())
        .then(data => {
            this.donutOrders = data
            console.log(this.donutOrders)
        })
        .catch(err => console.log(err))
    }
}
*/ 

//deleteDonut + event.target.id

const deleteDonut = (event) => {
event.preventDefault();
console.log("delete donut");
let id = event.target.id;
console.log(id);


fetch('https://donutello-api.onrender.com/api/v1/donuts/'+ id, {
    method: 'DELETE',
    headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
})
.then(response => response.json())
.then(data => {
  event.target.parentElement.parentElement.remove();
    console.log(data);
    //reload page but keep scroll position
    window.location.reload({ behavior: 'auto', keepScrollPosition: true });

})


}

/*
const showDetails = (event) =>
{
   //toggle dipslay block and none to details div of this donut order when clicking on button showDetails
  //  event.target.parentElement.querySelector("#details").style.display = "none";

   
  let details = event.target.parentElement.querySelector(".details");
    if (details.style.display === "none") {
        console.log("show details")
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }


}

*/

//add event listener to button showDetails ad toggle display on and off
const showDetails = (event) => {
    event.preventDefault();
    console.log("show details");
    let details = event.target.parentElement.querySelector(".details");
    if (details.style.display == "none") {
        console.log("show details")
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}


const logout = () => {
    console.log("logout");
   localStorage.clear();
   window.location.href = "#/"
}


</script>

<template>
    <div class="btn-logout">
        <a href="#" @click.prevent="logout">Logout</a>
    </div>

    <div class="gallery">

        <h1>Donut Orders</h1>
        <ul class="donut-orders">
            <li class="donut-order" v-for="donutOrder in donutOrders.donuts" :key="donutOrder.id">

                <button class="btn-delete" @click="deleteDonut" v-bind:id="donutOrder._id">X</button>

                <div class="donut-image" v-if="donutOrder.glaze === 'Cherry'">
                    <img src="../assets/Donut-cherry.png" alt="cherry" width="100" height="100">
                </div>
                <div class="donut-image" v-else-if="donutOrder.glaze === 'Pistache'">
                    <img src="../assets/Donut-pistache.png" alt="pistache" width="100" height="100">
                </div>
                <div class="donut-image" v-else-if="donutOrder.glaze === 'Chocolate'">
                    <img src="../assets/Donut-chocolate.png" alt="chocolate" width="100" height="100">
                </div>
                <div class="donut-image" v-else="donutOrder.glaze === 'none'">
                    <img src="../assets/Donut.png" alt="test" width="100" height="100">
                </div>

                <div class="info">

                    <h2>{{ donutOrder.name }}</h2>
                    <h3>{{ donutOrder.glaze }} Donut</h3>


                    <button class="btn-show" @click="showDetails">Meer info</button>

                    <div class="details" style="display: none;">
                        <h4>Id number user</h4>
                        <p>{{ donutOrder.user }}</p>
                        <h4>Name of company</h4>
                        <p>{{ donutOrder.company }}</p>
                       
                      
                    </div>
                </div>
            </li>
        </ul>
    </div>

 
 

</template>

<style scoped>li {
    list-style: none;
}

.gallery {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 4rem;
}

.donut-orders {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 4rem;
}

.donut-order {
    display: block;
    list-style: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    margin: 1rem;
    width: 320px;
    height: 420px;
    border-radius: 20px;
}

.donut-order img {

    display: block;
    width: 200px;
    height: auto;
    padding: 0.2rem;
    margin: auto;

}

.btn-logout {
    margin-top: 40px;
    position: absolute;
    right: 0;
}

a {
    font-size: 1.2em;
    padding: 0.6em 2em;
    font-weight: bold;
    border-radius: 2em;
    border: none;
    color: white;
    background-color: #e72870;
    cursor: pointer;
    margin: 2rem;
    float: right;
}

h1 {
    font-size: 2em;
   font-weight: bold;

}

.btn-logout a:hover {

    background-color: #3ec7d1;
    color: #ffffff;
    cursor: pointer;
}

.btn-show {
    font-size: 1em;
    padding: 0.2em 1em;
    font-weight: bold;
    border-radius: 2em;
    border: none;
    color: white;
    background-color: #e72870;
    cursor: pointer;
    margin-top: 10px;
    
}

h3 {
    font-size: 1em;
    color:#e72870;
}
h2{
    font-size: 1.4em;
    color:black;
    font-weight: bold;
}

.info {
    margin: 2rem;
    position: absolute;
    margin-top: 1rem;
}

.donut-image {
    margin: auto;
    background-color: rgb(255, 235, 254);
    border-radius: 20px 20px 0 0;
}

.details {
    
    margin-top: 0.4rem;
}

.details h4 {
    font-size: 1em;
    color: #e72870;
   
}
    
.details p {
    font-size: 1em;
    color: black;
    font-weight: bold;
}

.btn-delete {
    position: absolute;
    width: 30px;
    height: 30px;
    background-color: rgb(179, 32, 32);
    color: white;
    border-radius: 50%;
    border: none;
    padding: 0.5rem;
    cursor: pointer;
    margin: 0.5rem;
    font-weight: bold;
}

.btn-delete:hover {
    background-color: #cc13b3;
    color: #ffffff;
    cursor: pointer;
}


@media (max-width: 800px) {
    h3 {
    font-size: 0.8em;
    color:#e72870;
}
h2{
    font-size: 1.1em;
    color:black;
    font-weight: bold;
}
    .donut-order {
        width: 200px;
        height: 300px;
    }


    .donut-order img {
        width: 120px;
    }

    .details {
    
    margin-top: 0.2rem;
}

.details h4 {
    font-size: 0.8em;
    color: #e72870;
   
}
    
.details p {
    font-size: 0.8em;
    color: black;
    font-weight: bold;
}

.info {
    margin: 1rem;
    position: absolute;
    margin-top: 0.6rem;
}

}

</style>