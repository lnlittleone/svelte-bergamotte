<script>
    export let plant;
    export let buy;
</script>

<div class="card">
    <img src={plant.image} alt="{plant.name}" class="card-img">
    <div class="card-title-wrapper">
        <div>
            <h3 class="card-title">{plant.nickname}</h3>
            <p class="card-price">{plant.price.toFixed(2)} €</p>
        </div>
        <button class="buy-button" on:click={()=>buy(plant.id, plant.image, plant.nickname, plant.quantity, plant.price, plant.sum)} >acheter</button>
    </div>
</div>

<style>
    .card {
        padding : 0 15px;
        margin : 0 0 30px 0;
        max-width : 400px;
    }

    .card-img:hover {
        opacity: 0.8;
    }

    .card-img {
        width : 100%;
    }

    .card-title {
        font-family : "Source Sans Pro", sans-serif;
        color : #94AF94;
        font-size : 0.875rem;
        font-weight: bold;
        margin : 0;
        padding : 5px 0;
        line-height: 20px;
        text-transform: uppercase;
        letter-spacing: 0.11rem;
    }

    .card-price {
        font-family : "Source Sans Pro", sans-serif;
        color : #313131;
        font-size : 0.85rem;
        margin-top : 0;
    }

    .buy-button {
        background-color: #94AF94;
        font-family: "Source Sans Pro", sans-serif;
        color: white;
        font-weight: 500;
        font-size: 14px;
        letter-spacing: 0.11rem;
        text-transform: uppercase;
        padding: 5px;
        border: 1px solid #94AF94;
        border-radius: 4px;
        margin: 0;
        transition: 0.4s;
    }

    .buy-button:hover{
        background-color: white;
        color: #94AF94;
        border-color: #94AF94;
        transition: 0.4s;
    }

    .card-title-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
</style>

