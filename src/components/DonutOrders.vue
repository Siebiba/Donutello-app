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




</script>




<template>
    <div class="gallery">
        <h1>Donut Orders</h1>
        <ul class="donut-orders">
            <li class="donut-order" v-for="donutOrder in donutOrders" :key="donutOrder.id">
                <h2>{{ donutOrder.name }}</h2>
                <p>{{ donutOrder.company }}</p>
                <p>{{ donutOrder.topping }}</p>
                <p>{{ donutOrder.quantity }}</p>
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
    margin-top: 2rem;
}
.donut-order {
    border: 1px solid #ccc;
    padding: 1rem;
    margin-bottom: 1rem;
    width: 20%;
    height: 200px;
}




</style>