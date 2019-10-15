<main class="home">
    <section class="section">
        <img alt="Aberdeen +" class="home--img" srcset="https://bergamotte.imgix.net/assets/images/264727/original/IMG_7348.jpg?ixlib=rails-2.1.4&amp;auto=format%2Ccompress&amp;fit=crop&amp;h=540&amp;q=95&amp;w=540 540w, https://bergamotte.imgix.net/assets/images/264727/original/IMG_7348.jpg?ixlib=rails-2.1.4&amp;auto=format%2Ccompress&amp;fit=crop&amp;h=1080&amp;q=95&amp;w=1080 1080w, https://bergamotte.imgix.net/assets/images/264727/original/IMG_7348.jpg?ixlib=rails-2.1.4&amp;auto=format%2Ccompress&amp;fit=crop&amp;h=1620&amp;q=95&amp;w=1620 1620w" src="https://bergamotte.imgix.net/assets/images/264727/original/IMG_7348.jpg?ixlib=rails-2.1.4&amp;auto=format%2Ccompress&amp;fit=crop&amp;h=540&amp;q=95&amp;w=540">
        <div class="section--intro">
            <h2 class="section--title">Nuances d'Automne</h2>
            <p class="section--title">Les plus belles fleurs et plantes livrées chez vous en un instant</p>
        </div>
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
        justify-content: space-evenly;
        flex-wrap : wrap;
        align-items: center;
        padding : 1rem;
    }

    .home--img {
        width : 540px;
    }

    .section--intro {
        width : 540px;
        display : flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding : 1rem;
    }

    .section--title {
        font-family: "Lora", sans-serif;
        color : #94AF94;
    }

    .section--prefooter {
        display : flex;
        background : #94AF94;
        justify-content: space-evenly;
        padding: 2.5rem 0;
        flex-wrap : wrap;
        margin : 1rem;
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

    @media (max-width : 480px){

        .section--intro {
           transform : translateY(-150%);
        }

        .section--title{
            text-shadow: 2px 2px 2px #313131;
            color: #ebebeb;
        }
    }


</style>