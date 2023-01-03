import { useContext, createContext, useState } from "react";

// Toastify
import { toast } from "react-toastify";

const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

export const CartProvider = (props) => {
    const [cart, setCart] = useState([]);

    const isInCart = (id) => {
        return cart.find(product => product.id === id)
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
        
        toast.success('Artefacto agregado al carrito.', {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    const emptyCart = () => {
        setCart([]);
        toast.info('El carrito ha sido vaciado.', {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    const removeItem = (id) => {
        setCart(cart.filter(prod => prod.id !== id));
        toast.info('El Artefacto ha sido removido del carrito.', {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    const getItemQuantity = ()=> {
        return cart.reduce((accum, prod) => accum += prod.amt, 0);
    }

    const totalPrice = () => {
        return cart.reduce((accum, prod) => accum += (prod.amt * prod.price), 0)
    }

    return (
        <CartContext.Provider value={{cart, isInCart, addItem, removeItem, emptyCart, getItemQuantity, totalPrice}}>
            {props.children}
        </CartContext.Provider>
    )
}