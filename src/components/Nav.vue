<template>

    <nav>
        <div class="nav-wrapper">
            <img src="../assets/donuttello-logo.png" alt="">
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              
            </ul>
        </div>
    </nav>


</template>


<style scoped>
    nav {
        background-color: #e72870;
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100px;
        padding: 0 60px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 10;

    }

    img {
        width: 140px;
       position: absolute;
    }
</style>