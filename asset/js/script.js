//set variables and const
const entrance = document.querySelector(".entrance");
const meat = document.querySelector(".meat");
const fish = document.querySelector(".fish");
const dessert = document.querySelector(".dessert");
let menuButton = document.querySelector('#menu-button');
let menu = document.querySelector('#menu');

const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
};

const displayScrollElement = (element) => {
    element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
            displayScrollElement(el);
        } else if (elementOutofView(el)) {
            hideScrollElement(el)
        }
    })
}

window.addEventListener("scroll", () => {
    handleScrollAnimation();
});

// show or hide
menuButton.addEventListener('click', function() {
    menu.classList.toggle('show-menu');
    menuButton.classList.toggle('close');
});

//hover menubuttons


// table of Menu
const chefMenu = [{
        type: entrance,
        name: 'Terrine de foie gras',
        image: "asset/img/assiettes/foie.png",
        description: "foie gras de Canard aux pistaches et son pain toasté",
        price: "18€",
        container: entrance
    },
    {
        type: entrance,
        name: 'Tataki de saumon',
        image: "asset/img/assiettes/tataki.png",
        description: "avec wakame au sésame",
        price: "20€",
    },
    {
        type: entrance,
        name: 'Crabe et Haddock',
        image: "asset/img/assiettes/crabe.png",
        description: "sur carpaccio de betterave crue",
        price: "18€",
    },
    {
        type: entrance,
        name: "Huîtres",
        image: "asset/img/assiettes/huitres.png",
        description: "Parc de l'Impératrice par 6",
        price: "16€",
    },
    {
        type: entrance,
        name: "Caviar d' Aquitaine",
        image: "asset/img/assiettes/caviar.png",
        description: "L'Esturgeonnière, la boîte de 20g",
        price: "40€",
    },
    {
        type: meat,
        name: 'Ris de Veau poêlés',
        image: "asset/img/assiettes/risdeveau.png",
        description: "sauce morilles, polenta crémeuse au mascarpone",
        price: "26€",
    },
    {
        type: meat,
        name: 'Tournedos de Bœuf',
        image: "asset/img/assiettes/tournedos.png",
        description: 'façon "Rossini", rosace de pommes de terre',
        price: "28€",
    },
    {
        type: meat,
        name: 'filet de Veau rôtie',
        image: "asset/img/assiettes/veau1.png",
        description: "déclinaison de carottes ",
        price: "26€",
    },
    {
        type: meat,
        name: "Magret de Canard entier",
        image: "asset/img/assiettes/magret.png",
        description: "et ses légumes de saison",
        price: "26€",
    },
    {
        type: meat,
        name: "Penne aux épinards frais 🥬",
        image: "asset/img/assiettes/penne.png",
        description: "pistou de tétragones",
        price: "20€",
    },
    {
        type: fish,
        name: "Pavé de Seiche à l'encre",
        image: "asset/img/assiettes/seiche.png",
        description: "aioli maison et pommes de terre vapeur",
        price: "25€",
    },
    {
        type: fish,
        name: 'tartar de Saumon',
        image: "asset/img/assiettes/saumon.png",
        description: "aneth, lentilles vertes",
        price: "26€",
    },
    {
        type: fish,
        name: 'Risotto de Gambas',
        image: "asset/img/assiettes/risotto.png",
        description: "asperge verte et sa mayonnaise au wasabi",
        price: "26€",
    },
    {
        type: fish,
        name: "Saint-jacques",
        image: "asset/img/assiettes/saint-jacques.png",
        description: "émultion d'epinards",
        price: "28€",
    },
    {
        type: fish,
        name: "Brandade de morue Royale",
        image: "asset/img/assiettes/brandade.png",
        description: "poirreaux, carottes",
        price: "26€",
    },
    {
        type: dessert,
        name: 'Formages',
        image: "asset/img/assiettes/fromages.png",
        description: 'La séléction de 3 fromages du jour',
        price: "10€",
    },
    {
        type: dessert,
        name: 'Mousse de framboise',
        image: "asset/img/assiettes/mousse.png",
        description: "et son ccoulis d'abricot",
        price: "10€",
    },
    {
        type: dessert,
        name: 'Café gourmand maison',
        image: "asset/img/assiettes/café.png",
        description: "chocolat",
        price: "10€",
    },
    {
        type: dessert,
        name: "Banofee",
        image: "asset/img/assiettes/Banofee.png",
        description: 'verrine façon " Estacade "',
        price: "10€",
    },
    {
        type: dessert,
        name: "Tartelette et pavé au chocolat",
        image: "asset/img/assiettes/tartelette.png",
        description: "et fruits rouges",
        price: "10€",
    },
];

//function for create card menu
function createCard(type, name, image, description, price) {

    const card = document.createElement("div");
    card.classList.add("card");
    type.appendChild(card);

    const cardImg = document.createElement("img");
    cardImg.src = `${image}`;
    cardImg.classList.add("card-image");
    card.appendChild(cardImg);

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    card.appendChild(cardBody);

    const cardName = document.createElement("h3");
    cardName.classList.add("card-name");
    cardName.innerHTML = name;
    cardBody.appendChild(cardName);

    const cardDes = document.createElement("p");
    cardDes.classList.add("card-description");
    cardDes.innerHTML = description;
    cardBody.appendChild(cardDes);

    const cardPrice = document.createElement("p");
    cardPrice.classList.add("card-price");
    cardPrice.innerHTML = price;
    cardBody.appendChild(cardPrice);
};

// iterate cards in html
chefMenu.forEach(function(menu) {
    createCard(menu.type, menu.name, menu.image, menu.description, menu.price, );
})

//function to stop scoll nav-food
window.onscroll = function scrollFunction() {
    let element = document.querySelector(".nav-food");

    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        element.classList.add("scroll");
    } else {
        element.classList.remove("scroll");
    }
}