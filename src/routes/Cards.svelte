<script>
    import PlantCard from "./PlantCard.svelte";
    import {cartContent, plants} from "./store"
    import { fade } from "svelte/transition"

    let isVisible = false;
    let timeoutId = null;

    const addToCart = (id, image, name, quantity, price, sum) => {
        cartContent.update(oldCartContent => {
            const itemIndex = oldCartContent.findIndex(x => x.id === id);
            if (itemIndex === -1) {
                return [...oldCartContent, {id, image, name, quantity, price, sum}]
            } else {
                return oldCartContent
                        .map((cartItem, i) => i === itemIndex
                                ? {...cartItem, quantity: cartItem.quantity + 1}
                                : cartItem
                        )
            }
        });

        clearTimeout(timeoutId);
        isVisible = true;
        timeoutId = setTimeout(() => {
            isVisible = false
        }, 2000)
    };


</script>

<section class="section">

    <div class="section--header">
        <img sizes="848px" alt="Plantes pour le salon" class="img-fluid" srcset="https://bergamotte.imgix.net/assets/images/152132/original/bandeau-salon.jpg?1548772250?ixlib=rails-2.1.4&amp;auto=format%2Ccompress&amp;fit=crop&amp;h=180&amp;q=95&amp;w=848 848w, https://bergamotte.imgix.net/assets/images/152132/original/bandeau-salon.jpg?1548772250?ixlib=rails-2.1.4&amp;auto=format%2Ccompress&amp;fit=crop&amp;h=360&amp;q=95&amp;w=1696 1696w, https://bergamotte.imgix.net/assets/images/152132/original/bandeau-salon.jpg?1548772250?ixlib=rails-2.1.4&amp;auto=format%2Ccompress&amp;fit=crop&amp;h=540&amp;q=95&amp;w=2544 2544w" src="https://bergamotte.imgix.net/assets/images/152132/original/bandeau-salon.jpg?1548772250?ixlib=rails-2.1.4&amp;auto=format%2Ccompress&amp;fit=crop&amp;h=180&amp;q=95&amp;w=848">
        <div class="section--card">
            <h4 class="section--subtitle">Sélection</h4>
            <h1 class="section--title">Plantes pour le salon</h1>
            <div class="section--intro">
                Une plante est toujours une bonne idée pour peaufiner la décoration de votre salon. Voici notre sélection de variétés élégantes et design, pour recevoir vos invités comme il se doit ou tout simplement sublimer vos instants cocooning.
            </div>
        </div>
    </div>

    <div class="notifications--wrapper">
       {#if isVisible}
        <h3 class="notifications" transition:fade="{{ x: 0, duration: 2000 }}">Votre achat a bien été ajouté à votre panier.</h3>
       {/if}
    </div>

    <div class="card--wrapper">
        {#each $plants as plant}
            <PlantCard plant={plant} buy={addToCart} />
        {/each}
    </div>
</section>




<style>
    .img-fluid {
        width: 100%;
        height: auto;
        vertical-align: middle;
    }

    .section {
        padding: 2rem;
    }

    .section--card{
        position: relative;
        background-color: white;
        padding: 25px 25px 0 25px;
        margin: -39px 60px 0 60px;
    }

    .section--title{
        font-family: "Lora", serif;
        font-size: 3rem;
        font-weight: bold;
        letter-spacing: 1px;
        text-align: center;
        color: #94AF94;
    }

    .section--subtitle{
        font-family: "Source Sans Pro", sans-serif;
        font-size: 13px;
        letter-spacing: 3px;
        text-align: center;
        color: #9B9B9B;
        font-weight: normal;
        line-height: 20px;
    }

    .section--intro{
        font-size: 16px;
        text-align: center;
        font-family: "Lora", sans-serif;
    }

    .section--header{
        position: relative;
        box-sizing : border-box;
    }

    .card--wrapper {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-items: center;
    }

    .notifications {
        font-family: "Lora", serif;
        color: #313131;
        text-align: center;
    }

    .notifications--wrapper {
        width: 100%;
        display : flex;
        flex-wrap : wrap;
        height : 5rem;
        justify-content: center;
        padding : 20px 0;
    }

    @media(max-width: 1024px) {
        .card--wrapper {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 480px) {
        .section {
            padding : 1rem;
        }

        .card--wrapper {
            grid-template-columns: 1fr;
        }

        .section--card {
            padding: 15px 20px 0 20px;
            margin: -15px 20px 0 20px;
        }

        .section--title {
            font-size : 2rem;
        }

        .notifications {
            font-size : 1rem;
        }

        .notifications--wrapper {
            height : 3rem;
        }
    }
</style>