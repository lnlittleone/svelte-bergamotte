<script>
    import CartItem from "./CartItem.svelte"
    import { cartContent } from "./store"

    $: totalCart = $cartContent.reduce((acc, plant) => { return acc + (plant.quantity * plant.price) }, 0);

</script>


<section class="cart">
    <h4 class="subtitle">Recevez son contenu en quelques heures</h4>
    <h1 class="title">Votre panier</h1>
    <p class="intro">Une, deux ou trois commandes ? Remplissez votre panier jusqu'à ce qu'il soit plein à craquer.</p>

    <div class="cart--header"><h2 class="cart--title">Votre panier</h2></div>

        {#each $cartContent as data}
            <CartItem item={data} />
        {/each}

    <div class="cart--footer">
        <h2 class="cart--total">Total :</h2>
        <h2 class="cart--total">{totalCart.toFixed(2)}</h2>
    </div>
</section>

<style>
    .cart {
        display : flex;
        flex-direction: column;
        align-items: center;
        margin : 2rem 5rem;
        height : 100%;
    }

    .subtitle {
        font-family: "Source Sans Pro", sans-serif;
        font-size: 13px;
        letter-spacing: 3px;
        text-align: center;
        color: #9B9B9B;
        font-weight: normal;
        line-height: 20px;
    }

    .title {
        font-family: "Lora", serif;
        font-size: 50px;
        font-weight: bold;
        letter-spacing: 1px;
        text-align: center;
        color: #94AF94;
    }

    .intro {
        margin-bottom: 60px;
        font-size: 16px;
        text-align: center;
        font-family: "Lora", sans-serif;
    }

    .cart--header {
        line-height: 1.5rem;
        background-color: #5B5B5B;
        color: white;
        font-weight: 500;
        font-family: "Source Sans Pro", sans-serif;
        font-size: 0.875rem;
        letter-spacing: 0.05rem;
        padding: 0.625rem 1rem;
        border-radius: 0.25rem 0.25rem 0 0;
        border: 1px solid #5B5B5B;
        width : 100%;
        box-sizing: border-box;
        height : 3rem;
        display: flex;
        align-items: center;
    }

    .cart--footer {
        font-family: "Source Sans Pro", sans-serif;
        border-radius: 0 0 0.25rem 0.25rem;
        border : solid 1px #ebebeb;
        width : 100%;
        box-sizing: border-box;
        padding: 0.625rem 1rem;
        height : 3rem;
        line-height: 1.5rem;
        color: white;
        font-weight: 500;
        font-size: 0.875rem;
        letter-spacing: 0.05rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .cart--total {
        font-family: "Source Sans Pro", sans-serif;
        font-size: 1.25rem;
        color : #313131;
    }
</style>