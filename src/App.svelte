<script>
	import { Router, Link, Route } from "svelte-routing";
	import Home from "./routes/Home.svelte";
	import Cards from "./routes/Cards.svelte";
	import Cart from "./routes/Cart.svelte"
	import Panier from "./svg/Panier.svelte"
	import { cartContent, plants } from "./routes/store"

	export let url = "";

	$: cartQuantities = $cartContent.reduce((acc, cartItem) => {
		const quantity = cartItem.quantity;
		return acc + quantity
	}, 0);

</script>

	<Router url="{url}" class="main">
		<header>
			<div class="title--wrapper">
				<h1 class="site--title">Bergamotte</h1>
			</div>

			<nav class="site--navbar">
				<Link class="link" to="/">Home</Link>
				<Link to="Cards">Plantes</Link>
				<Link to="Cart"><Panier/>{cartQuantities}</Link>
			</nav>

			<div>
				<Route path="Cards" component="{Cards}" />
				<Route path="Cart" component="{Cart}" />
				<Route path="/"><Home/></Route>
			</div>
		</header>
	</Router>


<style>

	@import url('https://fonts.googleapis.com/css?family=Lora&display=swap');

	html {
		font-family: "Source Sans Pro", sans-serif;
		color : #313131;
	}

	.title--wrapper {
		height : 75px;
		width : 100%;
		border-bottom : 1px solid #ebebeb;
		display : flex;
		flex-direction: column;
		align-items: center;
	}

	.site--title {
		color: #94AF94;
		font-family: "Lora", sans-serif;
		letter-spacing: 8px;
		text-transform: uppercase;
	}

	.site--navbar {
		width : 100%;
		border-bottom : 1px solid #ebebeb;
		display : flex;
		justify-content: center;
		color: #94AF94;
	}

	 :global(.site--navbar a) {
		 color: #94AF94;
		 font-weight: normal;
		 text-decoration: none;
		 border-bottom: 1px solid transparent;
		 padding : 20px;
		 text-transform: uppercase;
	}

	 :global(.site--navbar a:hover) {
		 border-bottom: 1px solid #94AF94;
	 }

	.footer {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		border-top: #ebebeb solid 1px;
		padding : 15px 50px;
		border-top: 1px solid #ebebeb;
	}

	.footer--title {
		color: #94AF94;
		font-family: "Lora", sans-serif;
		text-transform: uppercase;
		letter-spacing: 0.5rem;
	}

	.footer--text{
		line-height: 5px;
		margin-bottom: 15px;
		font-family: "Lora", serif;
		color: #313131;
	}

</style>


