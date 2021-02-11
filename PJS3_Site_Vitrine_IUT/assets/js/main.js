// simule une fonction 'sleep'
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

// permet de détecter si un élément est visible à l'écran
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
            (window.innerWidth || document.documentElement.clientWidth)
    );
}

// stockage du premier élément (HTML) contenant la classe iut-data
const iutD = document.querySelector(".iut-data");
const iutR = document.querySelector("#rentree");
const iutC = document.querySelector("#candidature");
const iutDi = document.querySelector("#diplomes");
const iutA = document.querySelector(".actualites-intitule");


funcC = async function () {
    if (isInViewport(iutC)) {
        // suppression du listener, l'animation ne doit se déclencher qu'une fois
        document.removeEventListener("scroll", funcC);

    
        document.querySelector(".iut-candidature-intitule").classList.remove("fade2");
        document.querySelector(".iut-candidature-intitule").classList.add("popup");
        document.querySelector(".button_candidature").classList.remove("fade2");
        
    }
};


funcDi = async function () {
    if (isInViewport(iutDi)) {
        // suppression du listener, l'animation ne doit se déclencher qu'une fois
        document.removeEventListener("scroll", funcDi);

        document.querySelector(".iut-diplomes-intitule").classList.remove("fade2");
        document.querySelector(".iut-diplomes-intitule").classList.add("popup");

        var dip = document.getElementsByClassName("col-md-6 col-lg-3 col-sm-6 col-6");
        for (var i = 0; i < dip.length; i++) {
            dip[i].classList.remove("fade2");
            dip[i].classList.add("popflyin");
            await sleep(
                110
            )
        }
        document.querySelector(".col4").classList.remove("fade2");
        document.querySelector(".col4").classList.add("popflyin");
    }
};

funcA = async function () {
    if (isInViewport(iutA)) {
        // suppression du listener, l'animation ne doit se déclencher qu'une fois
        document.removeEventListener("scroll", funcA);

        document.querySelector(".actualites-intitule").classList.remove("fade2");
        document.querySelector(".actualites-intitule").classList.add("popup");
        var card = document.getElementsByClassName("card rounded-0");
        for (var i = 0; i < card.length; i++) {
            card[i].classList.remove("fade2");
        }
        document.querySelector(".row_actualites_button").classList.remove("fade2");
    }
};


// affichage animé des données stats, fonction asynchrone pour 'await sleep...'
//".iut-candidature-intitule,.iut-diplomes-intitule,.actualites-intitule,.iut-data-intitule"
funcD = async function () {
    if (isInViewport(iutD)) {
        // suppression du listener, l'animation ne doit se déclencher qu'une fois
        document.removeEventListener("scroll", funcD);

        const options = {
            separator: "",
        };
        var compteurs = [
            new countUp.CountUp("data-1", 3000, options),
            new countUp.CountUp("data-2", 1100, options),
            new countUp.CountUp("data-3", 170, options),
            new countUp.CountUp("data-4", 750, options),
            new countUp.CountUp("data-5", 84, options),
        ];
        /*sélectionne le premier élément contenant la classe "iut-data-intitule"
        et lui retire la classe "fade"*/
        document.querySelector(".iut-data-intitule").classList.remove("fade");

        /*chaque donnée statistique s'affiche en fondu, avec animation compteur,
        à 250ms d'intervalle*/
        var fadeStats = document.getElementsByClassName("elt-fade");
        for (var i = 0; i < fadeStats.length; i++) {
            fadeStats[i].classList.remove("fade");
            compteurs[i].start();
            await sleep(
                120
            ); /*délai(ms) entre l'affichage de chaque statistique.
            110 réplique à peu près correctement le site de l'IUT*/
        }
    }
};

document.addEventListener("scroll", funcD);
document.addEventListener("scroll", funcC);
document.addEventListener("scroll", funcDi);
document.addEventListener("scroll", funcA);
