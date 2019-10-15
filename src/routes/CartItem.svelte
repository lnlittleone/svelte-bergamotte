<script>

    import { cartContent } from "./store"

    export let item;
    let isDisabled = false;

    const increment = () => {
        cartContent.update(cart => {
            return cart.map((plant) => plant.id === item.id ? {...plant, quantity: plant.quantity + 1}: plant)
        })
    };

    const decrement = () => {
        cartContent.update( cart => {
            return cart
                    .map(plant => plant.id === item.id ? {...plant, quantity : Math.max(0, plant.quantity -1)} : plant)
                    //.filter(v => v.quantity)
        })
    };

    const deleteItem = () => {
        cartContent.update(cart => {return cart.filter( plant => plant.id !== item.id)})
    };

    $: totalPrice = item.price * item.quantity


</script>

{#if item}
    <div class="item-wrapper">
        <img class="item-image--small" src={item.image} alt={item.name} />
        <h3 class="item--name">{item.name}</h3>
        <div class="centered-left"><button class="quantity-button" on:click={decrement}>-</button></div>
        <p class="item--desc">{item.quantity}</p>
        <div class="centered-right"><button class="quantity-button" on:click={increment}>+</button></div>
        <p class="item--desc">{totalPrice.toFixed(2)}€</p>
        <div class="up-right"><button class="delete-button" on:click={deleteItem}>x</button></div>
    </div>
{/if}



<style>
    .item-wrapper {
        border : solid 1px #ebebeb;
        display :grid;
        grid-template-columns: 0.5fr 3fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr;
        padding : 0.625rem;
        width : 100%;
        box-sizing: border-box;
    }

    .item-image--small{
        width : 100px;
    }

    .item--name {
        font-size: 1.4rem;
        color: #94AF94;
        margin: 0;
        letter-spacing: 0.11rem;
        text-transform: uppercase;
        padding-left : 0.625rem;
        display : flex;
        align-items: center;
    }

    .centered-right {
        display : flex;
        justify-content: flex-start;
        align-items: center;
        margin : 0;
    }

    .centered-left {
        display : flex;
        justify-content: flex-end;
        align-items: center;
        margin : 0;
    }

    .up-right {
        display : flex;
        justify-content: flex-end;
        align-items: flex-start;
    }
    .quantity-button {
        border : none;
        background : #ebebeb;
        border-radius: 50%;
        width : 2.5rem;
        height : 2.5rem;
        color : #313131;
        font-size : 1rem;
        cursor : pointer;
        display : flex;
        padding : 0;
        justify-content: center;
    }

    .item--desc{
        display : flex;
        justify-content: center;
        align-items: center;
    }

    .delete-button{
        border : none;
        width : 2.5rem;
        height : 2.5rem;
        background : transparent;
        margin : 0;
        padding : 0;
        cursor : pointer;
    }
</style>