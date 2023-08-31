import { db } from "./config";
import { collection, getDocs, query, limit, onSnapshot, addDoc } from "firebase/firestore";

function getProductData(limi) {
    const productsRef = collection(db, "products");
    const q = query(productsRef, limit(limi));
    onSnapshot(q, doc => {
        console.log(doc.docs[0].data());
    })
}

export function addProduct(product) {
    const productRef = collection(db, "products");
    addDoc(productRef, product).then(obj => {
        console.log(obj)
    }).catch(err => {
        console.log(err)
    })
}