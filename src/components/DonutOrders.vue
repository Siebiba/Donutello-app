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






</script>

<template>
    <div class="gallery">
        <h1>Donut Orders</h1>
        <ul class="donut-orders">
            <li class="donut-order" v-for="donutOrder in donutOrders.donuts" :key="donutOrder.id">

                <button class= "btn-delete" @click="deleteDonut" v-bind:id="donutOrder._id">X</button>


                



                <div class="donut-image" v-if="donutOrder.glaze === 'cherry'">
                    <img src="../assets/Donut.png" alt="vanille" width="100" height="100">
                </div>
                <div class="donut-image" v-else-if="color === 'pistache'">
                    <img src="../assets/Donut.png" alt="vanille" width="100" height="100">
                </div>
                <div class="donut-image" v-else-if="color === 'chocolate'">
                    <img src="../assets/Donut.png" alt="vanille" width="100" height="100">
                </div>
                <div class="donut-image" v-else="color === 'none'">
                    <img src="../assets/Donut.png" alt="vanille" width="100" height="100">
                </div>

                <div class="info">
             
                <h2>{{ donutOrder.name }}</h2>

                
                <button @click="showDetails">Meer info</button>
                
                <div class="details"  style="display: none;">
                    <h3>Name of Designer</h3>
                    <p>{{ donutOrder.username }}</p>
                    <h3>Name of company</h3>
                    <p>{{ donutOrder.company }}</p>
                    <h3>Choose of Glaze</h3>
                    <p>{{ donutOrder.glaze }}</p>
                </div>
            </div>
            </li>
        </ul>
    </div>

 
 

</template>

<style scoped>

li {
    list-style: none;
}

.gallery {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 4rem;
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
    display: block;
    list-style: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

    margin:1rem;
    width: 320px;
    height: 400px;
    border-radius: 20px;
}

.donut-order img {

    display: block;
    width: 200px;
    height: auto;
    padding: 0.2rem;
    margin: auto;
   
}

.info{
    margin: 2rem;
    position: absolute;
    margin-top: 1rem;
}

.donut-image {
    margin: auto;
    background-color: antiquewhite;
    border-radius: 20px 20px 0 0;
}

.btn-delete{
    position: absolute;
    width: 30px;
    height: 30px;
    background-color: red;
    color: white;
    border-radius: 50%;
    border: none;
    padding: 0.5rem;
    
    cursor: pointer;
    margin: 0.5rem;
 
 

}



@media (max-width: 800px) {
  
    .donut-order {
        list-style: none;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        padding: 1rem;
        margin:1rem;
        width: 200px;
        height: 240px;
        border-radius: 20px;
    }
    
    .donut-order img {
        width: 200px;
        height: auto;
        padding: 0.2rem;
    }
}




</style>