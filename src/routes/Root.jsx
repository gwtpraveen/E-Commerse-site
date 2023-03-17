import "../style/Card.scss";
import productsData from "../data.json";
import Card from "../components/Card";
import Header from "../components/Header";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

export default function Root() {
    const [cart, setCart] = useState([]);
    const [data, setData] = useState(productsData);
    const addToCart = (product) => {
        setCart(prevCart => {
            let cart = [...prevCart];
            cart.push(product);
            return cart;
        })
    };

    const removeCartItem = (id) => {
        setCart(prevCart => {
            let cart = [...prevCart];
            return cart.filter(item => item.id != id);
        })
    };

    return (
        <>
            <Header cart={cart} onRemoveCartItem={removeCartItem} />
            <main>
                <div>
                    <Outlet  context={[data, addToCart]}/>
                    {/* <img src="/Images/banner 1.jpg" alt="" /> */}                
                </div>
            </main>
            <Footer/>
        </>
    );
};
