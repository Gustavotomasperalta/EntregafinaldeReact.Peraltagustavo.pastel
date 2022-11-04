const data = [
  {
    id: 1,
    tittle: "Drip Cake",
    detail: "Simplemente hermosas en todas sus versiones. Esas gotitas de chocolate que caen son lo más.",
    price: "8600",
    stock: 6,
    img: "/img/galeria1.jpg",
    category: "dietetico",
  },
  {
    id: 2,
    tittle: "Torta glamour",
    detail: "Delicada y sofisticada. En cuanto a su relleno se eligio crema marroc con chips de chocolate.",
    price: "2300",
    stock: 3,
    img: "/img/galeria10B.jpg",
    category: "dietetico",
  },
  {
    id: 3,
    tittle: "Cheese Cake con Frutos Rojos",
    detail: "Esta es una variante sin cocción que no tiene nada que envidiar a la opción cocida en cuando a sabor y textura cremosa.",
    price: "6000",
    stock: 4,
    img: "/img/galeria14.jpg",
    category: "sintacc",
  },
  {
    id: 4,
    tittle: "Torta tiktok",
    detail: "Alegre y divertida en esta version mezclamos grafica y mazapan. Un relleno fresco de crema y frutillas.",
    price: "1500",
    stock: 7,
    img: "/img/galeria7.jpg",
    category: "sintacc",
  },
  {
    id: 5,
    tittle: "Torta Cerveza",
    detail: "Para fanaticos de la cerveza. En este caso su relleno contiene dulce de leche con nueces y ganache de chocolate.",
    price: "9000",
    stock: 2,
    img: "/img/galeria3.jpg",
    category: "comun",
  },
  {
    id: 6,
    tittle: "Torta Roblox",
    detail: "Fans de los videos juegos esta bomba de sabores. Contiene dulce de leche con oreo mas crema bon o bon.",
    price: "14000",
    stock: 3,
    img: "/img/galeria17.jpg",
    category: "comun",
  },
  {
    id: 7,
    tittle: "Torta Minios",
    detail: "Fans de la pelicula esta bomba de sabores. Contiene dulce de leche con oreo mas crema bon o bon.",
    price: "6580",
    stock: 5,
    img: "/img/galeria6.jpg",
    category: "dietetico",
  },
  {
    id: 8,
    tittle: "Bard",
    detail: "Tortoise, radiated",
    price: "6000",
    stock: 9,
    img: "/img/galeria1.jpg",
    category: "comun",
  },
  {
    id: 9,
    tittle: "Guss",
    detail: "Four-striped grass mouse",
    price: "9230",
    stock: 4,
    img: "/img/galeria1.jpg",
    category: "sintacc",
  },  
];

export default function getItems() {
  return new Promise((resolve, reject) => {
    setTimeout ( () => {
      resolve(data);
    }, 12000);
  });
}

export function getItemsByCategory(cat) {
  return new Promise((resolve, reject) => {

    let itemFind = data.filter((item) => {
      return item.category === cat
    });

    setTimeout ( () => {
    if (itemFind) resolve(itemFind);
    else reject (new Error("Item no encontrado"));
      
    }, 12000);
  });
};

export function getItemsSingle(idItem) {
  return new Promise((resolve, reject) => {

    let itemFind = data.find((item) => {
      return item.id === parseInt(idItem)
    });

    setTimeout ( () => {
    if (itemFind) resolve(itemFind);
   else reject (new Error("Item no encontrado"));
    }, 12000);
  });
};