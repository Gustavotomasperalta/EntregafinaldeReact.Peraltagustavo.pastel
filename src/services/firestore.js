// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  collection,
  getFirestore,
  getDocs,
  getDoc,
  doc,
  query,
  where,
  addDoc,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJteutJIO5fTR9NFWa_CtOpR7_0t0opLU",
  authDomain: "react-37555.firebaseapp.com",
  projectId: "react-37555",
  storageBucket: "react-37555.appspot.com",
  messagingSenderId: "745774296744",
  appId: "1:745774296744:web:f2d8e41b1de53f74f95c9d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export async function getItems() {
  const miColleccion = collection(firestore, "tortas");
  let snapShotDB = await getDocs(miColleccion);

  let dataDocs = snapShotDB.docs.map((documento) => {
    let docFormateado = { ...documento.data(), id: documento.id };
    return docFormateado;
  });

  return dataDocs;
}
export async function getItemsSingle(idParams) {
  const docRef = doc(firestore, "tortas", idParams);
  const docSnapshot = await getDoc(docRef);

  return { ...docSnapshot.data(), id: docSnapshot.id };
}

export async function getItemsByCategory(catParams) {
  const collectionRef = collection(firestore, "tortas");
  const queryCategory = query(
    collectionRef,
    where("category", "==", catParams)
  );
  const snapShotDB = await getDocs(queryCategory);

  let dataDocs = snapShotDB.docs.map((documento) => {
    let docFormateado = { ...documento.data(), id: documento.id };
    return docFormateado;
  });

  return dataDocs;
}

export async function createBuyOrder(orderData) {
  const collectionRef = collection(firestore, "orders");
  let respuesta = await addDoc(collectionRef, orderData);

  return respuesta.id;
}

/* export async function exportDataToFirestore() {
  const data = [
    {
      id: 1,
      tittle: "Drip Cake",
      detail:
        "Simplemente hermosas en todas sus versiones. Esas gotitas de chocolate que caen son lo más.",
      price: "8600",
      stock: 6,
      img: "/img/galeria1.jpg",
      category: "dietetico",
    },
    {
      id: 2,
      tittle: "Torta glamour",
      detail:
        "Delicada y sofisticada. En cuanto a su relleno se eligio crema marroc con chips de chocolate.",
      price: "2300",
      stock: 3,
      img: "/img/galeria10B.jpg",
      category: "dietetico",
    },
    {
      id: 3,
      tittle: "Cheese Cake con Frutos Rojos",
      detail:
        "Esta es una variante sin cocción que no tiene nada que envidiar a la opción cocida en cuando a sabor y textura cremosa.",
      price: "6000",
      stock: 4,
      img: "/img/galeria14.jpg",
      category: "sintacc",
    },
    {
      id: 4,
      tittle: "Torta tiktok",
      detail:
        "Alegre y divertida en esta version mezclamos grafica y mazapan. Un relleno fresco de crema y frutillas.",
      price: "1500",
      stock: 7,
      img: "/img/galeria7.jpg",
      category: "sintacc",
    },
    {
      id: 5,
      tittle: "Torta Cerveza",
      detail:
        "Para fanaticos de la cerveza. En este caso su relleno contiene dulce de leche con nueces y ganache de chocolate.",
      price: "9000",
      stock: 2,
      img: "/img/galeria3.jpg",
      category: "comun",
    },
    {
      id: 6,
      tittle: "Torta Roblox",
      detail:
        "Fans de los videos juegos esta bomba de sabores. Contiene dulce de leche con oreo mas crema bon o bon.",
      price: "14000",
      stock: 3,
      img: "/img/galeria17.jpg",
      category: "comun",
    },
    {
      id: 7,
      tittle: "Torta Minios",
      detail:
        "Fans de la pelicula esta bomba de sabores. Contiene dulce de leche con oreo mas crema bon o bon.",
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

  const collectionRef = collection(firestore, "tortas");

  for (const item of data) {
    delete item.id;
    const newDoc = addDoc(collectionRef, item);
  }
} */

export default firestore;
