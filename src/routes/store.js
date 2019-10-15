import {writable} from 'svelte/store';

export let cartContent = writable(loadCart());

cartContent.subscribe((v) => {
    localStorage.setItem("cart", JSON.stringify(v));
});

export let plants = writable([
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
]);



function loadCart() {
    try {
        return JSON.parse(localStorage.getItem("cart"))
    } catch (e) {
        return []
    }
}