<script>
    import PlantCard from "./PlantCard.svelte";
    import { cartContent } from "./store"
    import { fade } from "svelte/transition"

    let isVisible = false;

    const addToCart = (id, image, name, quantity, price, sum) => {
        cartContent.update(oldCartContent =>  [...oldCartContent, {id, image, name, quantity, price, sum}]);
        isVisible = true
    };


    let plants = [
        {
            "id" : 1,
            "name" : "Calathea ornata",
            "nickname" : "Daniel",
            "price" : 79.90,
            "image" : "/images/calathea.jpg",
            "quantity" : 1,
            "sum" : 79.90,
        },
        {
            "id" : 2,
            "name" : "Mini cactus",
            "nickname" : "Noah",
            "price" : 22.90,
            "image" : "/images/mini-cactus.jpg",
            "quantity" : 1,
            "sum" : 22.90,
        },
        {
            "id" : 3,
            "name" : "Calamondin",
            "nickname" : "Paolo",
            "price" : 65.90,
            "image" : "/images/calamondin.jpg",
            "quantity" : 1,
            "sum" : 65.90,
        },
        {
            "id" : 4,
            "name" : "Ficus lyrata",
            "nickname" : "Léon",
            "price" : 39.90,
            "image" : "/images/ficus.jpg",
            "quantity" : 1,
            "sum" : 39.90,
        },
        {
            "id" : 5,
            "name" : "Kentia",
            "nickname" : "Gustave",
            "price" : 59.90,
            "image" : "/images/kentia.jpg",
            "quantity" : 1,
            "sum" : 59.90,
        },
        {
            "id" : 6,
            "name" : "Peperomia",
            "nickname" : "Mila",
            "price" : 65.90,
            "image" : "/images/peperomia.jpg",
            "quantity" : 1,
            "sum" : 65.90,
        },
        {
            "id" : 7,
            "name" : "Monstera",
            "nickname" : "Emily",
            "price" : 65.90,
            "image" : "/images/monstera.jpg",
            "quantity" : 1,
            "sum" : 65.90,
        }
    ];

</script>

<section class="section">

    <div class="notifications--wrapper">
    {#if isVisible}
        <h3 transition:fade class="notifications">Votre achat a bien été rajouté à votre panier.</h3>
    {/if}
    </div>

    <div class="card--wrapper">
        {#each plants as plant}
            <PlantCard plant={plant} buy={addToCart}/>
        {/each}
    </div>
</section>

<style>
    .section {
        padding : 2rem;
    }

    .card--wrapper {
        display : grid;
        grid-template-columns: 1fr 1fr;
        justify-items: center;
    }

    .notifications{
        line-height: 5px;
        font-family: "Lora", serif;
        color: #313131;
        text-align: center;
    }

    .notifications--wrapper {
        height : 5rem;
        width : 100%;
    }

    @media (max-width: 489px){
        .card--wrapper {
            grid-template-columns: 1fr;
        }
    }
</style>