import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
    //find if the productToAdd is already present in the cart
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id)
    //if the productToAdd is already present then add to quantity
    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id ?
                { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }
    //return an array conaining modified cartItems/newcartItems
    return [...cartItems, { ...productToAdd, quantity: 1 }];
}
const removeCartItem = (cartItems, itemToRemove) => {

    //find the itemToRemove in the cart
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === itemToRemove.id)

    //if the itemToRemove quantity=1
    if (existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id);
    }

    //return an array conaining modified cartItems/newcartItems
    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === itemToRemove.id ?
                { ...cartItem, quantity: cartItem.quantity - 1 }
                : cartItem
        );
    }
}
const removeProductCart = (cartItems, product) => {

    //find the productToRemove in the cart
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === product.id)

    //if the itemToRemove quantity=1
    if (existingCartItem) {
        return cartItems.filter((cartItem) => cartItem.id !== product.id);
    }
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    removeItemFromCart: () => { },
    removeProductFromCart: () => { },
    cartCount: 0,
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [countItems, setCountItems] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCountItems(newCartCount);
    }, [cartItems])

    useEffect(() => {
        const newCartTotal = cartItems.reduce((total, cartItem) => total + (cartItem.quantity * cartItem.price), 0);
        setCartTotal(newCartTotal);
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }
    const removeItemFromCart = (itemToRemove) => {
        setCartItems(removeCartItem(cartItems, itemToRemove));
    }
    const removeProductFromCart = (product) => {
        setCartItems(removeProductCart(cartItems, product));
    }

    const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, countItems, removeItemFromCart, removeProductFromCart, cartTotal };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}