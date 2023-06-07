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
    window.location.href = "index.html/#/gallery"
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






</script>

<template>
    <div class="gallery">
        <h1>Donut Orders</h1>
        <ul class="donut-orders">
            <li class="donut-order" v-for="donutOrder in donutOrders.donuts" :key="donutOrder.id">

                <button @click="deleteDonut" v-bind:id="donutOrder._id">Delete</button>


                <h2>{{ donutOrder.name }}</h2>



                <div v-if="donutOrder.glaze === 'cherry'">
                    <img src="../assets/Donut.png" alt="vanille" width="100" height="100">
                </div>
                <div v-else-if="color === 'pistache'">
                    <img src="../assets/Donut.png" alt="vanille" width="100" height="100">
                </div>
                <div v-else-if="color === 'chocolate'">
                    <img src="../assets/Donut.png" alt="vanille" width="100" height="100">
                </div>
                <div v-else>
                    Not A/B/C
                </div>


                <div class="details"  style="display: none;">
                    <p>k,sak,skz,kaz</p>
                    <p>{{ donutOrder.name }}</p>
                    <p>{{ donutOrder.company }}</p>
                    <p>{{ donutOrder.glaze }}</p>



                </div>

                <button @click="showDetails">Meer info</button>
            </li>
        </ul>
    </div>

 
 

</template>

<style scoped>

li {
    list-style: none;
}

.gallery {
    width: 80%;
}

.donut-orders{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 4rem;
}
.donut-order {
    list-style: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    padding: 1rem;
    margin:1rem;
    width: 200px;
    height: 200px;
    border-radius: 20px;
}

.donut-order img {
    width: 200px;
    height: auto;
    padding: 0.2rem;
}





.details {

    background-color: rgb(240, 240, 240);
    
}



</style>