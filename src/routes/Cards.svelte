<script>
    import PlantCard from "./PlantCard.svelte";
    import { cartContent } from "./store"
    import { fade } from "svelte/transition"

    let isVisible = false;

    const addToCart = (id, image, name, quantity, price, sum) => {
        cartContent.update(oldCartContent =>  {
            const idx = oldCartContent.filter(x => x['id'] === id);
            if(!idx.length){
                return [...oldCartContent, { id, image, name, quantity, price, sum }]
            } else {
                return  oldCartContent.map(x => x['id'] === id ? { ...x, quantity : x['quantity'] + 1} : x)
            }
        } );
        isVisible = true;
    };

    /*const addToCart = (id, image, name, quantity, price, sum) => {
        cartContent.update((oldCartContent => oldCartContent.map(plant => plant.id === id
                ? [...oldCartContent, {...plant, quantity: plant.quantity + 1}]
                : [...oldCartContent, {id, image, name, quantity, price, sum}])))
    };*/

    let plants = [
        {
            "id" : 1,
            "name" : "Calathea ornata",
            "nickname" : "Daniel",
            "price" : 79.90,
            "image" : "/images/calathea.jpg",
            "quantity" : 1,
        },
        {
            "id" : 2,
            "name" : "Mini cactus",
            "nickname" : "Noah",
            "price" : 22.90,
            "image" : "/images/mini-cactus.jpg",
            "quantity" : 1,
        },
        {
            "id" : 3,
            "name" : "Calamondin",
            "nickname" : "Paolo",
            "price" : 65.90,
            "image" : "/images/calamondin.jpg",
            "quantity" : 1,
        },
        {
            "id" : 4,
            "name" : "Ficus lyrata",
            "nickname" : "Léon",
            "price" : 39.90,
            "image" : "/images/ficus.jpg",
            "quantity" : 1,
        },
        {
            "id" : 5,
            "name" : "Kentia",
            "nickname" : "Gustave",
            "price" : 59.90,
            "image" : "/images/kentia.jpg",
            "quantity" : 1,
        },
        {
            "id" : 6,
            "name" : "Peperomia",
            "nickname" : "Mila",
            "price" : 65.90,
            "image" : "/images/peperomia.jpg",
            "quantity" : 1,
        },
        {
            "id" : 7,
            "name" : "Monstera",
            "nickname" : "Emily",
            "price" : 65.90,
            "image" : "/images/monstera.jpg",
            "quantity" : 1,
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
            <PlantCard plant={plant} buy={addToCart} />
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