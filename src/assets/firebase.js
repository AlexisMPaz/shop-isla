import { initializeApp } from "firebase/app";
import { getFirestore, doc, addDoc, getDocs, getDoc, updateDoc, deleteDoc, collection } from 'firebase/firestore';

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

// CRUD Products

const loadProducts = async () => {
  const promise = await fetch('../json/products.json')
  const productos = await promise.json();
  productos.forEach(async (prod) => {
    await addDoc(collection(dataBase, "products"), {
      category: prod.category,
      name: prod.name,
      type: prod.type,
      info: prod.info,
      price: prod.price,
      stock: prod.stock,
      img: prod.img
    });
  });
};

const getProducts = async () => {
  const products = await getDocs(collection(dataBase, "products"));
  const items = products.docs.map(prod => {
    return { ...prod.data(), id: prod.id };
  });
  return items;
};

const getProduct = async (id) => {
  const product = await getDoc(doc(dataBase, "products", id));
  const item = {...product.data(), id:product.id};
  return item;
};

const updateProduct = async (id, info) => {
  const state = await updateDoc(doc(dataBase, "products", id), info);
  return state;
};

const deleteProduct = async (id) => {
  const state = await deleteDoc(doc(dataBase, "products", id));
  return state;
};

// CREATE and READ PURCHASE ORDER

const createOrder = async (client, total, date) => {
  const order = await addDoc(collection(dataBase, "purchaseOrder"),{
    name: client.name,
    email: client.email,
    adress: client.adress,
    dni: client.dni,
    tel: client.tel,
    total: total,
    date: date
  });

  return order;
};

const getOrder = async (id) => {
  const order = await getDoc(doc(dataBase, "purchaseOrder", id))
  const item = {...order.data(), id: order.id}
  return item;
};


export { loadProducts };
export { getProducts };
export { getProduct };
export { updateProduct };
export { deleteProduct };

export {createOrder};
export { getOrder };
