const cards = document.querySelector(".cards");
const entrance = document.querySelector(".entrance");
const meat = document.querySelector(".meat");
const fish = document.querySelector(".fish");
const dessert = document.querySelector(".dessert");

var menuButton = document.querySelector('#menu-button');
var menu = document.querySelector('#menu');

// show or hide
menuButton.addEventListener('click',function(){
menu.classList.toggle('show-menu');
menuButton.classList.toggle('close');
});

// table of Menu
const chefMenu = [
  {
    type: entrance,
    name: 'Terrine de foie gras',
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Ffree-png-bnpqn&psig=AOvVaw3FOsEbaxO_RZBYSbe_JO2Y&ust=1633013319535000&source=images&cd=vfe&ved=0CAsQjRxqGAoTCJiHsei2pPMCFQAAAAAdAAAAABCNAQ",
    description: "foie gras de Canard aux pistaches et son pain toasté",
    price: "18€",
    container: entrance
  },
  {
    type: entrance,
    name: 'Tataki de thon',
    image: "",
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
    image: "",
    description: "gastrique de grenades et ses légumes de saison",
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
    description: 'La séléction de 3 fromages par  " Madame Fromage "',
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
    description: 'en verrine façon " Estacade "',
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

//function for create card
function createCard(type, name, image, description, price) {

  const card = document.createElement("div");
  card.classList.add("card");
  type.appendChild(card);
  
  const cardImg = document.createElement("div");
  cardImg.style.backgroundImage = `url(${image})`;
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

for (let i=0; i<chefMenu.length; i++) {
  createCard(chefMenu[i].type, chefMenu[i].name, chefMenu[i].image, chefMenu[i].description, chefMenu[i].price,);
};


function goEntrance() {
  document.querySelector(".entrance")?.scrollIntoView({behavior: 'smooth'});
}
function goMeat() {
  document.querySelector(".meat")?.scrollIntoView({behavior: 'smooth'});
}
function goFish() {
  document.querySelector(".fish")?.scrollIntoView({behavior: 'smooth'});
}
function goDessert() {
  document.querySelector(".dessert")?.scrollIntoView({behavior: 'smooth'});
}