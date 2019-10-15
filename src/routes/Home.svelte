<main class="home">
    <section class="section">
        <h2 class="section--title">Nuances d'Automne</h2>
        <p class="section--title">Les plus belles fleurs et plantes livrées chez vous en un instant</p>
    </section>

    <section class="section--prefooter">
        <div>
            <h3 class="section--subtitle">fraicheur optimale</h3>
            <p class="section--text">Tenue longue durée. <br> Producteurs triés sur le volet. </p>
        </div>

        <div>

            <h3 class="section--subtitle">Créations exclusives</h3>
            <p class="section--text">Des collections uniques et pointues <br> sans cesse renouvelées.</p>
        </div>

        <div>
            <h3 class="section--subtitle">Savoir-faire artisanal</h3>
            <p class="section--text">Préparé avec amour <br> dans notre atelier parisien.</p>
        </div>

        <div>
            <h3 class="section--subtitle">Livraison express</h3>
            <p class="section--text">Livraison partout<br> en France avant 13h.</p>
        </div>
    </section>
</main>


<style>
    .home {
        width : 100%;
        height : 100%;
    }

    .section {
        display : flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
    .section--title {
        font-family: "Lora", sans-serif;
        color : #ebebeb;
    }

    .section--prefooter {
        display : flex;
        background : #94AF94;
        justify-content: space-evenly;
        padding: 40px 0;
    }

    .section--subtitle{
        color: white;
        letter-spacing: 0.3rem;
        text-align: center;
        margin: 10px auto;
        padding: 0px 10px;
        font-size: 1.3rem;
        text-transform: uppercase;
    }

    .section--text {
        font-family: "Lora", sans-serif;
        color: white;
        text-align: center;
        line-height: 1.6rem;
    }


</style>