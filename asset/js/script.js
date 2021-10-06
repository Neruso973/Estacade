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

// table of Menu
const chefMenu = [{
        type: entrance,
        name: 'Terrine de foie gras',
        image: "asset/img/assiette1.png",
        description: "foie gras de Canard aux pistaches et son pain toasté",
        price: "18€",
        container: entrance
    },
    {
        type: entrance,
        name: 'Tataki de saumon',
        image: "asset/img/tataki.png",
        description: "avec wakame au sésame",
        price: "20€",
    },
    {
        type: entrance,
        name: 'Crabe et Haddock',
        image: "",
        description: "sur carpaccio de betterave crue",
        price: "18€",
    },
    {
        type: entrance,
        name: "Huîtres",
        image: "",
        description: "Parc de l'Impératrice par 6",
        price: "16€",
    },
    {
        type: entrance,
        name: "Caviar d' Aquitaine",
        image: "",
        description: "L'Esturgeonnière, la boîte de 20g",
        price: "40€",
    },
    {
        type: meat,
        name: 'Ris de Veau poêlés',
        image: "",
        description: "sauce morilles, polenta crémeuse au mascarpone",
        price: "26€",
    },
    {
        type: meat,
        name: 'Tournedos de Bœuf',
        image: "",
        description: 'façon "Rossini", rosace de pommes de terre',
        price: "28€",
    },
    {
        type: meat,
        name: 'Côte de Veau rôtie',
        image: "",
        description: "déclinaison de carottes ",
        price: "26€",
    },
    {
        type: meat,
        name: "Magret de Canard entier",
        image: "asset/img/magret.png",
        description: "et ses légumes de saison",
        price: "26€",
    },
    {
        type: meat,
        name: "Penne aux épinards frais 🥬",
        image: "",
        description: "champignons de Paris et pistou de tétragones",
        price: "20€",
    },
    {
        type: fish,
        name: 'Pavé de Morue fraîche',
        image: "",
        description: "aioli maison et pommes de terre vapeur",
        price: "25€",
    },
    {
        type: fish,
        name: "Filet d’Esturgeon",
        image: "",
        description: "poêlé en écailles de magret séché, lentilles vertes",
        price: "26€",
    },
    {
        type: fish,
        name: 'Gambas en Tempura',
        image: "",
        description: "purée de céleri et sa mayonnaise au wasabi",
        price: "26€",
    },
    {
        type: fish,
        name: "Saint-jacques",
        image: "",
        description: 'snackées, risotto façon " Paëlla "',
        price: "28€",
    },
    {
        type: fish,
        name: "Dorade Royale entière",
        image: "",
        description: " à la plancha , aubergines au four",
        price: "26€",
    },
    {
        type: dessert,
        name: 'Formages',
        image: "",
        description: 'La séléction de 3 fromages du jour',
        price: "10€",
    },
    {
        type: dessert,
        name: 'Moelleux chocolat',
        image: "",
        description: "et son coeur praliné (10 min de cuisson)",
        price: "10€",
    },
    {
        type: dessert,
        name: 'Trio de crèmes brûlées',
        image: "",
        description: "chocolat, vanille et menthe",
        price: "10€",
    },
    {
        type: dessert,
        name: "Banofee",
        image: "",
        description: 'verrine façon " Estacade "',
        price: "10€",
    },
    {
        type: dessert,
        name: "Tartelette aux abricots",
        image: "",
        description: "et romarin",
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

//jscript à propos carousel//

const track = document.querySelector('.carousel-track');
const nextButton = document.querySelector('.carousel-button-felix.arrow-right');
const previousBUtton = document.querySelector('.carousel-button-felix.arrow-left');;
const dotsNav = document.querySelector('.carousel-nav');
const dots = Array.from('dotsNav.children');
// left click

//right click

//nav indicators click

//contact form display msg

const close = document.getElementById('buttonClose');
const open = document.getElementById('buttonOpen');

close.addEventListener('click', () => {
  document.getElementById('formMessage').style.display = 'none';
});

open.addEventListener('click', () => {
  document.getElementById('formMessage').style.display = 'block';
});
