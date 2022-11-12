import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles.js'
import { CartContext } from "../../contexts/cart-context"
import { useContext } from "react"


const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, countItems } = useContext(CartContext);
    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    }
    return (
        <CartIconContainer onClick={toggleCart}>
            <ShoppingIcon />
            <ItemCount>{`${countItems}`}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;
