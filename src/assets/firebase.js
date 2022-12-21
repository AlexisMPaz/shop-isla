import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "react-shop-isla.firebaseapp.com",
  projectId: "react-shop-isla",
  storageBucket: "react-shop-isla.appspot.com",
  messagingSenderId: "903013948889",
  appId: "1:903013948889:web:bb0e3191786cf64da2cdc8"
};

const app = initializeApp(firebaseConfig);

const dataBase = getFirestore();

const loadDataBase = async () => {
  const promise = await fetch('../json/products.json')
  const productos = await promise.json()
  productos.forEach(async (prod) => {
    await addDoc(collection(dataBase, "products"), { //collection si existe consulta si no existe crea
      category: prod.category,
      name: prod.name,
      type: prod.type,
      info: prod.info,
      price: prod.price,
      stock: prod.stock,
      img: prod.img
    })
  })
}

export { loadDataBase };

