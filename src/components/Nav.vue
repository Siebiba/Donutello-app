<template>

    <nav>
        <div class="nav-wrapper">
            <img src="../assets/donuttello-logo.png" alt="">
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="sass.html">Log out</a></li>
              
              
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
        height: 120px;
        padding: 0 16rem;
      
        z-index: 10;

    }

    nav ul {
        list-style: none;
        float: right;
        padding: 40px 0;
    }



    nav a {
        color: white;
        text-decoration: none;
        font-size: 1.5rem;
      
        font-weight: bold;
    }
     

    img {
        margin-top: 30px;
        width: 180px;
       position: absolute;
    }


    @media (max-width: 800px) {
        nav {
            padding: 0 2rem;
        }

    }
</style>