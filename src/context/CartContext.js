import { useContext, createContext, useState } from "react";

const CartContext = createContext();

export const useCartContext = () => useCartContext(CartContext);

export const CartProvider = (props) => {
    const [cart, setCart] = useState([]);

    const isInCart = (id) => {
        return cart.find(product = product.id === id)
    };

    const addItem = (product, amount) => {
        if (isInCart(product.id)) {
            const index = cart.findIndex(prod => prod.id === product.id);
            const aux = [...cart];
            aux[index].amt = amount;
            setCart(aux);
        } else {
            const newProduct = {
                ...product,
                amt: amount
            }

            setCart([...cart, newProduct]);
        }
    }

    const emptyCart = () => {
        setCart([]);
    }

    const removeItem = (id) => {
        setCart(cart.filter(prod => prod.id !== id));
    }

    const getItemQuantity = ()=> {
        return cart.reduce((accum, prod) => accum += prod.amt, 0);
    }

    const totalPrice = () => {
        return cart.reduce((accum, prod) => accum += (prod.amt * prod.price), 0)
    }

    return (
        <CartContext.Provider value={{cart, isInCart, addItem, removeItem, getItemQuantity, totalPrice}}>
            {props.children}
        </CartContext.Provider>
    )
}