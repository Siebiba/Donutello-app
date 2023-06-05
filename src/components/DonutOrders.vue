<script>

/*import { onMounted, reactive, ref } from 'vue'

let donutOrders = reactive({ donuts: [] });

onMounted(() => {
    fetch('http://localhost:3000/api/v1/donuts', {
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
*/ 

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




</script>




<template>
    <div>
        <h1>Donut Orders</h1>
        <ul>
            <li v-for="donutOrder in donutOrders" :key="donutOrder.id">
                <h2>{{ donutOrder.name }}</h2>
                <p>{{ donutOrder.company }}</p>
                <p>{{ donutOrder.topping }}</p>
                <p>{{ donutOrder.quantity }}</p>
            </li>
        </ul>
    </div>
</template>